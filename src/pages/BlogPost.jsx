import { useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPostBySlug, getRelatedPosts } from '../data/blog'
import BlogCard from '../components/ui/BlogCard'
import NewsletterCTA from '../components/ui/NewsletterCTA'
import { usePageMeta } from '../hooks/usePageMeta'

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// Extract a YouTube video ID from common URL forms or a raw 11-char ID
function extractYouTubeId(input) {
  if (!input) return null
  const trimmed = input.trim()
  if (/^[A-Za-z0-9_-]{11}$/.test(trimmed)) return trimmed
  const patterns = [
    /youtube\.com\/watch\?v=([A-Za-z0-9_-]{11})/,
    /youtu\.be\/([A-Za-z0-9_-]{11})/,
    /youtube\.com\/embed\/([A-Za-z0-9_-]{11})/,
  ]
  for (const p of patterns) {
    const m = trimmed.match(p)
    if (m) return m[1]
  }
  return null
}

// Inline formatting: bold, italic, inline code, and links (applied to escaped text)
function inline(text) {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>')
    .replace(
      /`([^`\n]+)`/g,
      '<code class="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[13px] font-mono text-primary-700">$1</code>'
    )
    .replace(
      /\[([^\]]+)\]\(([^)\s]+)\)/g,
      (match, text, url) => {
        const external = /^https?:\/\//.test(url)
        const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : ''
        return `<a href="${url}"${attrs} class="text-primary-600 font-medium underline underline-offset-2 hover:text-primary-700">${text}</a>`
      }
    )
}

// Line-based markdown-ish renderer: headers, lists, blockquotes, tables, paragraphs
function renderContent(content) {
  const lines = content.split('\n')
  const out = []
  let listItems = []
  let inList = false
  let quoteItems = []
  let inQuote = false
  let paragraph = []

  const flushList = () => {
    if (inList) {
      out.push('<ul class="space-y-2 my-4 ml-1">' + listItems.join('') + '</ul>')
      inList = false
      listItems = []
    }
  }
  const flushQuote = () => {
    if (inQuote) {
      out.push(
        '<blockquote class="my-6 pl-4 border-l-4 border-primary-200 text-gray-500 italic">' +
          quoteItems.join('') +
          '</blockquote>'
      )
      inQuote = false
      quoteItems = []
    }
  }
  const flushParagraph = () => {
    if (paragraph.length) {
      out.push(
        '<p class="text-gray-600 leading-relaxed my-4">' +
          paragraph.map(inline).join('<br/>') +
          '</p>'
      )
      paragraph = []
    }
  }
  const flushAll = () => {
    flushList()
    flushQuote()
    flushParagraph()
  }

  const isTableRow = (l) => /^\|.+\|$/.test(l || '')
  const isTableSeparator = (l) => /^\|[\s\-:|]+\|$/.test(l || '')
  const splitRow = (l) => l.split('|').map((c) => c.trim()).filter(Boolean)

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    // Tables: header row immediately followed by a separator row
    if (isTableRow(line) && isTableSeparator(lines[i + 1]?.trim())) {
      flushAll()
      const headers = splitRow(line)
      i += 2 // skip header + separator
      const rows = []
      while (i < lines.length && isTableRow(lines[i].trim()) && !isTableSeparator(lines[i].trim())) {
        rows.push(splitRow(lines[i].trim()))
        i++
      }
      i -= 1 // for-loop increments past the last consumed line
      out.push(
        '<div class="overflow-x-auto my-6"><table class="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">' +
          '<thead class="bg-gray-50"><tr>' +
          headers.map((h) => '<th class="px-4 py-3 text-left text-sm font-semibold text-gray-900">' + inline(h) + '</th>').join('') +
          '</tr></thead>' +
          '<tbody class="divide-y divide-gray-200 bg-white">' +
          rows.map((row) => '<tr>' + row.map((c) => '<td class="px-4 py-3 text-sm text-gray-600">' + inline(c) + '</td>').join('') + '</tr>').join('') +
          '</tbody></table></div>'
      )
      continue
    }

    if (!line) {
      flushAll()
      continue
    }

    if (line.startsWith('### ')) {
      flushAll()
      out.push('<h3 class="text-xl font-semibold text-gray-900 mt-8 mb-3">' + inline(line.slice(4)) + '</h3>')
    } else if (line.startsWith('## ')) {
      flushAll()
      out.push('<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">' + inline(line.slice(3)) + '</h2>')
    } else if (line.startsWith('# ')) {
      flushAll()
      out.push('<h1 class="text-3xl font-bold text-gray-900 mt-10 mb-4">' + inline(line.slice(2)) + '</h1>')
    } else if (line.startsWith('- ')) {
      flushParagraph()
      flushQuote()
      inList = true
      listItems.push(
        '<li class="flex items-start gap-2 text-gray-600"><span class="text-primary-500 mt-1.5 flex-shrink-0">•</span><span>' +
          inline(line.slice(2)) +
          '</span></li>'
      )
    } else if (line.startsWith('> ')) {
      flushParagraph()
      flushList()
      inQuote = true
      quoteItems.push('<p class="mb-2">' + inline(line.slice(2)) + '</p>')
    } else if (line.startsWith('!video[')) {
      // Video embed: !video[Title](youtube-url)
      flushAll()
      const videoMatch = line.match(/^!video\[([^\]]*)\]\(([^)\s]+)\)$/)
      if (videoMatch && extractYouTubeId(videoMatch[2])) {
        const ytId = extractYouTubeId(videoMatch[2])
        out.push(
          '<div class="my-8"><div class="relative w-full aspect-video overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-black">' +
            '<iframe class="absolute inset-0 w-full h-full" src="https://www.youtube-nocookie.com/embed/' +
            ytId +
            '" title="' +
            escapeHtml(videoMatch[1]) +
            '" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' +
            '</div><p class="text-center text-sm text-gray-400 mt-2">' +
            inline(videoMatch[1]) +
            '</p></div>'
        )
      }
    } else if (line.startsWith('![')) {
      // Image embed: ![alt text](/images/...)
      flushAll()
      const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/)
      if (imgMatch) {
        out.push(
          '<figure class="my-8">' +
            '<img src="' +
            escapeHtml(imgMatch[2]) +
            '" alt="' +
            escapeHtml(imgMatch[1]) +
            '" class="w-full rounded-2xl border border-gray-100 shadow-sm" loading="lazy" />' +
            (imgMatch[1]
              ? '<figcaption class="text-center text-sm text-gray-400 mt-2">' + inline(imgMatch[1]) + '</figcaption>'
              : '') +
            '</figure>'
        )
      }
    } else {
      flushList()
      flushQuote()
      paragraph.push(line)
    }
  }
  flushAll()
  return out.join('\n')
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)
  const related = useMemo(() => getRelatedPosts(post, 3), [post])
  const [copied, setCopied] = useState(false)

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const encodedUrl = encodeURIComponent(shareUrl)
  const encodedTitle = encodeURIComponent(post ? post.title : '')

  usePageMeta({
    title: post ? `${post.title} | Easy Aquatix` : 'Post Not Found | Easy Aquatix',
    description: post ? post.excerpt : 'The blog post you are looking for does not exist or has been removed.',
  })

  const jsonLd = post
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: post.image
          ? (typeof window !== 'undefined' ? window.location.origin : '') + post.image
          : undefined,
        datePublished: post.date,
        author: { '@type': 'Organization', name: 'Easy Aquatix' },
        publisher: { '@type': 'Organization', name: 'Easy Aquatix' },
      }
    : null

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable — ignore
    }
  }

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
          <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Post Not Found</h1>
        <p className="text-gray-500 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary-600 transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>

        {/* Category Badge */}
        <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-4">
          {post.category}
        </span>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
          <span className="font-medium text-gray-700">{post.author}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span>{formatDate(post.date)}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span>{post.readTime}</span>
        </div>

        {/* Hero image */}
        {post.image && (
          <div className="mb-10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full aspect-[16/10] object-cover rounded-2xl border border-gray-100 shadow-sm"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
        />

        {/* Share */}
        <div className="mt-10 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
          <h3 className="text-sm font-semibold text-gray-900">Share this article</h3>
          <div className="flex items-center gap-2">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-primary-600 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-primary-600 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-primary-600 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <button
              onClick={handleCopyLink}
              aria-label="Copy link"
              className="h-9 px-4 inline-flex items-center gap-1.5 rounded-full bg-gray-100 text-gray-500 hover:bg-primary-600 hover:text-white transition-colors text-xs font-medium"
            >
              {copied ? 'Copied!' : 'Copy link'}
            </button>
          </div>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="bg-gray-50/50 border-t border-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Keep Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <NewsletterCTA />
    </div>
  )
}

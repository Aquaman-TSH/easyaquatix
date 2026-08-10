---
description: Plan and execute a full marketing campaign for a product launch, feature update, seasonal sale, or promotional event for Aquatic Sentinel or EasyAquatix.
agent: marketing-manager
---

# /campaign Command — Full Campaign Suite

Plan and execute a complete marketing campaign for $ARGUMENTS.

## Campaign Types

- **launch**: New product or major feature launch
- **sale**: Seasonal sale, discount event, or limited-time offer
- **feature**: Feature update or changelog announcement
- **seasonal**: Holiday, back-to-school, spring cleaning, etc.
- **bundle**: Product bundle promotion (e.g., Aquatic Sentinel + Water Calculator + Guide)

If $ARGUMENTS is empty, ask the user which campaign type they want to run.

## Execution Steps

1. **Campaign Brief**: Based on the campaign type, create a brief including:
   - Campaign name and objective
   - Target audience segment(s)
   - Key messaging pillars
   - Timeline (pre-launch, launch, post-launch)
   - Success metrics

2. **Generate Campaign Assets**:

   ### Landing Page Copy
   - Hero headline and subheadline
   - 3 benefit sections with icons
   - Social proof section (testimonial placeholders)
   - FAQ section (5 questions)
   - CTA copy variations

   ### Email Sequence (3-5 emails)
   - Subject lines and preview text
   - Full email body for each
   - Send timing and trigger conditions

   ### Social Media Pack (per platform)
   - 3-5 posts staggered across the campaign timeline
   - Platform-specific formatting
   - Hashtag strategy
   - Visual/creative briefs

   ### Forum / Community Posts
   - Announcement post template
   - Follow-up engagement post
   - FAQ response template

3. **Stage All Assets**:
   - Landing page copy → `marketing/campaigns/[campaign-name]/landing-page.md`
   - Email sequence → `marketing/campaigns/[campaign-name]/emails.md`
   - Social posts → `marketing/queue/pending/` (with campaign tag in metadata)
   - Forum posts → `marketing/campaigns/[campaign-name]/forum-posts.md`

4. **Campaign Calendar**: Generate a day-by-day execution calendar showing which assets to publish when.

## Output Structure

```
marketing/campaigns/[campaign-name]/
├── brief.md              # Campaign brief and strategy
├── landing-page.md       # Full landing page copy
├── emails.md             # Email sequence
├── social-posts.md       # All social media posts
├── forum-posts.md        # Forum/community posts
├── calendar.md           # Day-by-day execution calendar
└── metrics.md            # KPIs and tracking plan
```

## Post-Generation Checklist

- [ ] All assets align with campaign objectives
- [ ] Landing page copy includes clear CTAs
- [ ] Email sequence has compelling subject lines
- [ ] Social posts are platform-optimized
- [ ] Forum posts follow community guidelines
- [ ] Calendar is realistic and actionable
- [ ] KPIs are measurable and time-bound
- [ ] User informed to review campaign assets before publishing

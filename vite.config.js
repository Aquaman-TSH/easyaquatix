import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const buttondownApiKey = env.BUTTONDOWN_API_KEY || process.env.BUTTONDOWN_API_KEY

  const subscribeHandler = async (req, res) => {
    let raw = ''
    for await (const chunk of req) raw += chunk

    let email
    try {
      email = String(JSON.parse(raw || '{}').email || '').trim().toLowerCase()
    } catch {
      res.statusCode = 400
      return res.end(JSON.stringify({ ok: false, error: 'invalid_email' }))
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.statusCode = 400
      return res.end(JSON.stringify({ ok: false, error: 'invalid_email' }))
    }

    if (!buttondownApiKey) {
      res.statusCode = 500
      return res.end(JSON.stringify({ ok: false, error: 'server_not_configured' }))
    }

    try {
      const result = await fetch('https://api.buttondown.email/v1/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${buttondownApiKey}`,
        },
        body: JSON.stringify({ email_address: email }),
      })

      res.setHeader('Content-Type', 'application/json')
      if (result.status === 201 || result.status === 400) {
        res.statusCode = 200
        return res.end(JSON.stringify({ ok: true }))
      }
      res.statusCode = 502
      return res.end(JSON.stringify({ ok: false, error: 'provider_error' }))
    } catch {
      res.statusCode = 502
      return res.end(JSON.stringify({ ok: false, error: 'provider_error' }))
    }
  }

  const subscribeApiPlugin = {
    name: 'subscribe-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathname = (req.url || '').split('?')[0]
        if (req.method === 'POST' && pathname === '/api/subscribe') {
          subscribeHandler(req, res).catch(() => {
            res.statusCode = 502
            res.end(JSON.stringify({ ok: false, error: 'provider_error' }))
          })
          return
        }
        next()
      })
    },
  }

  return {
    plugins: [react(), tailwindcss(), subscribeApiPlugin],
    server: {
      port: 4105,
      strictPort: true,
    },
  }
})

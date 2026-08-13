const MAX_BODY_BYTES = 2048
const MAX_EMAIL_LENGTH = 254

const json = (data, status) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })

export async function onRequestPost({ request, env }) {
  const contentType = request.headers.get('Content-Type') || ''
  if (!contentType.toLowerCase().includes('application/json')) {
    return json({ ok: false, error: 'unsupported_media_type' }, 415)
  }

  const contentLength = Number(request.headers.get('Content-Length') || 0)
  if (contentLength > MAX_BODY_BYTES) {
    return json({ ok: false, error: 'payload_too_large' }, 413)
  }

  let body
  try {
    const text = await request.text()
    if (text.length > MAX_BODY_BYTES) {
      return json({ ok: false, error: 'payload_too_large' }, 413)
    }
    body = JSON.parse(text)
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400)
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return json({ ok: false, error: 'bad_request' }, 400)
  }

  if (typeof body.website === 'string' && body.website.length > 0) {
    return json({ ok: true }, 200)
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
  if (email.length > MAX_EMAIL_LENGTH || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: 'invalid_email' }, 400)
  }

  if (!env.BUTTONDOWN_API_KEY) {
    return json({ ok: false, error: 'server_not_configured' }, 500)
  }

  const ipAddress = request.headers.get('CF-Connecting-IP')

  let res
  try {
    res = await fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${env.BUTTONDOWN_API_KEY}`,
      },
      body: JSON.stringify({
        email_address: email,
        ...(ipAddress ? { ip_address: ipAddress } : {}),
      }),
    })
  } catch {
    return json({ ok: false, error: 'provider_error' }, 502)
  }

  if (res.status === 201) {
    return json({ ok: true }, 200)
  }

  if (res.status === 400) {
    return json({ ok: true, already_subscribed: true }, 200)
  }

  return json({ ok: false, error: 'provider_error', status: res.status }, 502)
}

export async function onRequestPost({ request, env }) {
  const json = (data, status) =>
    new Response(JSON.stringify(data), {
      status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })

  try {
    const body = await request.json()
    const email = String(body.email || '').trim().toLowerCase()

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ ok: false, error: 'invalid_email' }, 400)
    }

    if (!env.BUTTONDOWN_API_KEY) {
      return json({ ok: false, error: 'server_not_configured' }, 500)
    }

    const ipAddress = request.headers.get('CF-Connecting-IP')

    const res = await fetch('https://api.buttondown.email/v1/subscribers', {
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

    if (res.status === 201) {
      return json({ ok: true }, 200)
    }

    if (res.status === 400) {
      return json({ ok: true, already_subscribed: true }, 200)
    }

    return json({ ok: false, error: 'provider_error', status: res.status }, 502)
  } catch (err) {
    return json({ ok: false, error: 'bad_request' }, 400)
  }
}

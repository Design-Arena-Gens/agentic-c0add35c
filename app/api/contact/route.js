export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body || {};

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Invalid payload' }),
        { status: 400, headers: { 'content-type': 'application/json' } }
      );
    }

    // Placeholder: In real apps, send email or persist to DB here.

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { 'content-type': 'application/json' } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: 'Server error' }),
      { status: 500, headers: { 'content-type': 'application/json' } }
    );
  }
}


export default async function handler(req, res) {
  const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    res.status(500).json({ error: 'Missing Supabase env vars' });
    return;
  }

  try {
    const url = `${SUPABASE_URL}/rest/v1/demo_cards?select=image_url,mantra,question&limit=1&order=random`;
    const response = await fetch(url, {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });

    if (!response.ok) {
      const text = await response.text();
      res.status(response.status).json({ error: text });
      return;
    }

    const data = await response.json();
    const card = data[0] || null;
    res.status(200).json(card);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export default async function handler(req, res) {
  const { code, redirect_uri } = req.query;
  if (!code) {
    return res.status(400).json({ error: 'Missing code' });
  }
  try {
    const response = await fetch('https://api.notion.com/v1/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`${process.env.NOTION_CLIENT_ID}:${process.env.NOTION_CLIENT_SECRET}`).toString('base64')}`
      },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        code,
        redirect_uri
      })
    });
    const data = await response.json();
    // TODO: persist access token for user
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

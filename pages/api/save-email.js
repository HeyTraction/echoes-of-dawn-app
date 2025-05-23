export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { email } = req.body || {};
  if (!email) {
    return res.status(400).json({ error: 'Email required' });
  }
  // Placeholder for saving to Supabase and Mailchimp
  return res.status(200).json({ status: 'saved' });
}

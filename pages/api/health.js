export default function handler(req, res) {
  const requiredEnvVars = [
    'SUPABASE_URL',
    'SUPABASE_ANON_KEY',
    'MAILCHIMP_API_KEY',
    'MAILCHIMP_AUDIENCE_ID',
    'NOTION_CLIENT_ID',
    'NOTION_CLIENT_SECRET',
    'FEATURE_CUSTOM_DRAW'
  ];
  const missing = requiredEnvVars.filter((name) => !process.env[name]);
  if (missing.length > 0) {
    res.status(500).json({ status: 'error', missing });
  } else {
    res.status(200).json({ status: 'ok' });
  }
}

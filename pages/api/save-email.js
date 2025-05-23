import { createClient } from '@supabase/supabase-js';
import mailchimp from '@mailchimp/mailchimp_marketing';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;
const mailchimpAudienceId = process.env.MAILCHIMP_AUDIENCE_ID;

const supabase = createClient(supabaseUrl, supabaseKey);

if (mailchimpApiKey) {
  mailchimp.setConfig({
    apiKey: mailchimpApiKey,
    server: mailchimpApiKey.split('-')[1],
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body || {};
  if (!email) {
    return res.status(400).json({ error: 'Email required' });
  }

  try {
    if (supabaseUrl && supabaseKey) {
      await supabase.from('emails').insert({ email });
    }

    if (mailchimpApiKey && mailchimpAudienceId) {
      await mailchimp.lists.addListMember(mailchimpAudienceId, {
        email_address: email,
        status: 'subscribed',
      });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

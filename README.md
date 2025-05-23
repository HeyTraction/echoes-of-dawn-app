# echoes-of-dawn-app

# Echoes of Dawn – v0 Web App

Key feature: draw a demo reflection card → download / email → save to Notion.

Tech stack: Next.js, Supabase, Mailchimp, Notion API.

## API

### POST `/api/save-email`
Store an email address in Supabase and subscribe the address to the configured Mailchimp audience. Provide JSON `{ "email": "user@example.com" }` in the request body.

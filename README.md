# echoes-of-dawn-app

# Echoes of Dawn – v0 Web App

Key feature: draw a demo reflection card → download / email → save to Notion.

Tech stack: Next.js, Supabase, Mailchimp, Notion API.

## Screenshot API

An Edge Function using `@vercel/og` is available at `/api/screenshot`. Pass a `title` query
parameter to customize text. The response is a downloadable image named
`screenshot.png`.

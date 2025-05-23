# echoes-of-dawn-app

# Echoes of Dawn – v0 Web App

Key feature: draw a demo reflection card → download / email → save to Notion.

Tech stack: Next.js, Supabase, Mailchimp, Notion API.


## Vercel Preview

This repository includes a minimal health check endpoint at `/api/health`. The
endpoint validates that all required environment variables are set. For preview
deployments, copy `.env.example` to `.env` and adjust values as needed. The
health check will respond with `{ "status": "ok" }` when variables are present.

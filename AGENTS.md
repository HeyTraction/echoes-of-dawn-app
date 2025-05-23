# Codex Guide for Echoes of Dawn

## Dev environment
- Framework: Next.js (Pages Router)
- Start app: `npm run dev`
- Tests: `npm test`

## Required env vars
SUPABASE_URL, SUPABASE_ANON_KEY, MAILCHIMP_API_KEY, MAILCHIMP_AUDIENCE_ID,
NOTION_CLIENT_ID, NOTION_CLIENT_SECRET, FEATURE_CUSTOM_DRAW

## Acceptance tests to satisfy
1. GET `/api/demo-draw` returns JSON with image_url, mantra, question
2. POST `/api/save-email` stores to Supabase *and* tags Mailchimp
3. Visiting `/` shows "Draw Demo Card" button; clicking flips a card

## Task style for Codex
- Work in small PRs
- Commit message must reference task number

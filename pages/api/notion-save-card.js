import { Client } from '@notionhq/client';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { token, pageId, card } = req.body;
  if (!token || !pageId || !card) {
    return res.status(400).json({ error: 'Missing parameters' });
  }
  const notion = new Client({ auth: token });
  try {
    await notion.blocks.children.append({
      block_id: pageId,
      children: [
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            rich_text: [
              {
                type: 'text',
                text: { content: card }
              }
            ]
          }
        }
      ]
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

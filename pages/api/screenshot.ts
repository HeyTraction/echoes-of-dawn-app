import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Echoes of Dawn';

  const image = new ImageResponse(
    (
      <div
        style={{
          fontSize: 72,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {title}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );

  return new Response(image.body!, {
    headers: {
      'Content-Type': 'image/png',
      'Content-Disposition': 'attachment; filename="screenshot.png"',
    },
  });
}

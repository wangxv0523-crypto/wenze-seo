import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 60,
            background: 'linear-gradient(135deg, #0B2D4D 0%, #1a5490 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: 'white',
            padding: '40px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              marginBottom: '20px',
            }}
          >
            文则电气
          </div>
          <div
            style={{
              fontSize: 40,
              marginBottom: '30px',
            }}
          >
            Power Transformer Manufacturer & Exporter
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#FF8A00',
            }}
          >
            Industrial & Power Distribution Projects Worldwide
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}

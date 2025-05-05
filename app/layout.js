export const metadata = {
  title: '10 Thousand Bands',
  description: 'A Spline-powered interactive experience',
  icons: {
    icon: '/preview.png',
    shortcut: '/preview.png',
    apple: '/preview.png',
  },
  openGraph: {
    title: '10 Thousand Bands',
    description: 'A Spline-powered interactive experience',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: '10 Thousand Bands Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 Thousand Bands',
    description: 'A Spline-powered interactive experience',
    images: ['/preview.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          html, body {
            width: 100vw;
            height: 100vh;
            margin: 0;
            padding: 0;
            background: #000;
            overflow: hidden;
          }
          body > div, main {
            width: 100vw;
            height: 100vh;
            margin: 0;
            padding: 0;
            background: transparent;
            overflow: hidden;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}

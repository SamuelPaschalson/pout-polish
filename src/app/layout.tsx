import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import App from './app';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Pout & Polish',
    template: '%s | Pout & Polish',
  },
  robots: {
    index: true,
    follow: true,
  },
  description:
    'Pout & Polish — nourish, care, and shine. The ultimate lip care experience.',
  keywords: [
    'lip care',
    'beauty',
    'skincare',
    'pout',
    'polish',
    'sheet mask',
    'lip mask',
    'pout and polish',
    'lip gloss',
    'lip balm',
  ],
  openGraph: {
    title: 'Pout & Polish — Lip Care & Beauty',
    description:
      'Discover natural lip care products that make your lips shine with confidence.',
    url: 'https://pout-polish.vercel.app',
    siteName: 'Pout & Polish',
    images: [
      {
        url: 'https://pout-polish.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pout & Polish lip care',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pout & Polish — Lip Care & Beauty',
    description:
      'Take care of your lips with Pout & Polish — natural and nourishing.',
    images: ['https://pout-polish.vercel.app/og-image.png'],
    creator: '@poutandpolish',
  },
  metadataBase: new URL('https://pout-polish.vercel.app'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <App>{children}</App>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Pout & Polish',
              url: 'https://pout-polish.vercel.app',
              logo: 'https://pout-polish.vercel.app/logo.jpg',
              sameAs: ['https://www.instagram.com/urfav_empress'],
            }),
          }}
        />
      </body>
    </html>
  );
}

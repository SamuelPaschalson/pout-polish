import type { Metadata } from 'next';
import './globals.css';
import ClientWrapper from './client-wrapper';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    default: 'Pout & Polish | Luxury Lip Care Products in Nigeria',
    template: '%s | Pout & Polish',
  },
  description:
    "Discover Pout & Polish – Nigeria's premium lip care brand. Shop natural lip scrubs, balms, glosses, oils & masks. Nourish your lips with our organic, handcrafted products. Free delivery available.",
  keywords: [
    'lip care Nigeria',
    'lip balm',
    'lip scrub',
    'lip gloss',
    'lip oil',
    'lip mask',
    'natural lip care',
    'organic lip products',
    'beauty products Nigeria',
    'pout and polish',
    'lip treatment',
    'lip hydration',
    'lip care routine',
    'best lip balm Nigeria',
    'handmade lip care',
  ],
  authors: [{ name: 'Pout & Polish' }],
  creator: 'Pout & Polish',
  publisher: 'Pout & Polish',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://pout-polish.vercel.app',
    siteName: 'Pout & Polish',
    title: 'Pout & Polish | Luxury Lip Care Products in Nigeria',
    description:
      "Nigeria's premium lip care brand. Natural lip scrubs, balms, glosses, oils & masks. Nourish your lips with organic, handcrafted products.",
    images: [
      {
        url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Pout & Polish Luxury Lip Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pout & Polish | Luxury Lip Care Products in Nigeria',
    description:
      "Nigeria's premium lip care brand. Natural lip scrubs, balms, glosses, oils & masks.",
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=630&fit=crop',
    ],
    creator: '@poutandpolish',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Beauty',
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#fb7185" />
      </head>
      <body>
        <ClientWrapper>{children}</ClientWrapper>

        {/* Organization Schema */}
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Pout & Polish',
              url: 'https://pout-polish.vercel.app',
              logo: 'https://pout-polish.vercel.app/logo.jpg',
              description:
                "Nigeria's premium lip care brand offering natural and organic lip products.",
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'NG',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+234-817-869-4956',
                contactType: 'sales',
                availableLanguage: 'English',
              },
              sameAs: ['https://www.instagram.com/urfav_empress'],
            }),
          }}
        />

        {/* Local Business Schema */}
        <Script
          id="business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Pout & Polish',
              image: 'https://pout-polish.vercel.app/logo.jpg',
              '@id': 'https://pout-polish.vercel.app',
              url: 'https://pout-polish.vercel.app',
              telephone: '+234-817-869-4956',
              priceRange: '₦₦',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'NG',
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
                opens: '09:00',
                closes: '18:00',
              },
            }),
          }}
        />

        {/* Product Schema */}
        <Script
          id="product-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              itemListElement: [
                {
                  '@type': 'Product',
                  position: 1,
                  name: 'Velvet Lip Scrub',
                  description: 'Luxurious lip scrub for smooth, soft lips',
                  offers: {
                    '@type': 'Offer',
                    price: '1500',
                    priceCurrency: 'NGN',
                  },
                },
                {
                  '@type': 'Product',
                  position: 2,
                  name: 'Honey Lip Balm',
                  description: 'Nourishing lip balm with natural honey',
                  offers: {
                    '@type': 'Offer',
                    price: '2000',
                    priceCurrency: 'NGN',
                  },
                },
                {
                  '@type': 'Product',
                  position: 3,
                  name: 'Hydrating Lip Oil',
                  description: 'Deep hydration for dry lips',
                  offers: {
                    '@type': 'Offer',
                    price: '3000',
                    priceCurrency: 'NGN',
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

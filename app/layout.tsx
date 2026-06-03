import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { UnifiedHeader } from '@/components/unified-header'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.wenzepower.com'),
  title: {
    default: 'Power Transformer Manufacturer China | Wenze Electric | 文则电气',
    template: '%s | Wenze Electric'
  },
  description: 'Wenze Electric (Shandong China) manufactures oil immersed, dry type, distribution, high voltage and renewable energy transformers. IEC 60076 & ANSI C57 certified. Exported to 30+ countries. Get a free quote.',
  keywords: 'power transformer manufacturer China, oil immersed transformer, dry type transformer, distribution transformer, high voltage transformer, transformer exporter, IEC 60076, Shandong transformer factory, 文则电气, transformer supplier China',
  authors: [{ name: 'Wenze Electric', url: 'https://www.wenzepower.com' }],
  creator: 'Wenze Electric',
  publisher: 'Shandong Wenze Electric Co., Ltd.',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Power Transformer Manufacturer China | Wenze Electric',
    description: 'Oil immersed, dry type, distribution & high voltage transformers. IEC & ANSI certified. Factory in Shandong China. Exported to 30+ countries.',
    type: 'website',
    url: 'https://www.wenzepower.com',
    siteName: 'Wenze Electric',
    locale: 'en_US',
    images: [{ url: '/api/og', width: 1200, height: 630, alt: 'Wenze Electric - Transformer Manufacturer Shandong China' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Power Transformer Manufacturer China | Wenze Electric',
    description: 'Oil immersed, dry type & high voltage transformers. IEC certified. Shandong China factory.',
    images: ['/api/og'],
  },
  alternates: {
    canonical: 'https://www.wenzepower.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {
    google: 'add-your-google-search-console-verification-code-here',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Wenze Electric',
  legalName: 'Shandong Wenze Electric Co., Ltd.',
  alternateName: ['文则电气', 'Wenzepower'],
  url: 'https://www.wenzepower.com',
  logo: 'https://www.wenzepower.com/placeholder-logo.svg',
  description: 'Professional power transformer manufacturer in Shandong, China. Products include oil immersed transformers, dry type transformers, distribution transformers, high voltage power transformers, pole mounted transformers and renewable energy transformers.',
  foundingDate: '2009',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: '100+' },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+86-159-0534-2475',
      contactType: 'sales',
      email: 'sales@wenzepower.com',
      availableLanguage: ['English', 'Chinese'],
    }
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CN',
    addressRegion: 'Shandong',
    addressLocality: 'Shandong Province',
  },
  sameAs: [
    'https://wa.me/8615905342475',
  ],
}

const productListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Power Transformer Products by Wenze Electric',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Oil Immersed Transformer', url: 'https://www.wenzepower.com/products/oil-immersed-transformer' },
    { '@type': 'ListItem', position: 2, name: 'Dry Type Transformer', url: 'https://www.wenzepower.com/products/dry-type-transformer' },
    { '@type': 'ListItem', position: 3, name: 'Distribution Transformer', url: 'https://www.wenzepower.com/products/distribution-transformer' },
    { '@type': 'ListItem', position: 4, name: 'High Voltage Power Transformer', url: 'https://www.wenzepower.com/products/high-voltage-power-transformer' },
    { '@type': 'ListItem', position: 5, name: 'Pole Mounted Transformer', url: 'https://www.wenzepower.com/products/pole-mounted-transformer' },
    { '@type': 'ListItem', position: 6, name: 'Renewable Energy Transformer', url: 'https://www.wenzepower.com/products/renewable-energy-transformer' },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }} />
        <UnifiedHeader />
        {children}
      </body>
    </html>
  )
}

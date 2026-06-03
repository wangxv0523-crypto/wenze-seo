import { ProductDetail } from '../_components/product-detail'
import { products } from '@/lib/products-data'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Distribution Transformer Manufacturer China | 10kV–35kV | Wenze Electric',
  description: 'Wenze Electric manufactures distribution transformers for residential, commercial and industrial projects. Voltage 10kV–35kV, Capacity 30–2500kVA. Exported to 30+ countries.',
  keywords: 'distribution transformer, power distribution transformer manufacturer China, 10kV transformer, 35kV transformer, transformer exporter, IEC 60076',
  openGraph: {
    title: 'Distribution Transformer Manufacturer China | Wenze Electric',
    description: '10kV–35kV distribution transformers, 30–2500kVA. Pole-mount, pad-mount and substation types available.',
    type: 'website',
    url: 'https://www.wenzepower.com/products/distribution-transformer',
  },
  alternates: {
    canonical: 'https://www.wenzepower.com/products/distribution-transformer',
  },
}

export default function Page() {
  const product = products.find(p => p.id === 'distribution-transformer')!
  const { icon, ...data } = product
  return <ProductDetail product={{
    ...data,
    iconName: 'box' as const
  }} />
}

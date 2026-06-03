import { ProductDetail } from '../_components/product-detail'
import { products } from '@/lib/products-data'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'High Voltage Power Transformer Manufacturer | 110kV–220kV | Wenze Electric',
  description: 'Wenze Electric manufactures 110kV–220kV high voltage power transformers for utility transmission and large industrial applications. Capacity 6.3MVA–63MVA. IEC certified.',
  keywords: 'high voltage transformer, 110kV transformer, 220kV transformer, power transformer manufacturer China, utility transformer, transmission transformer',
  openGraph: {
    title: 'High Voltage Power Transformer 110kV–220kV | Wenze Electric',
    description: '110kV–220kV power transformers for utility and industrial grid applications. 6.3MVA–63MVA capacity.',
    type: 'website',
    url: 'https://www.wenzepower.com/products/high-voltage-power-transformer',
  },
  alternates: {
    canonical: 'https://www.wenzepower.com/products/high-voltage-power-transformer',
  },
}

export default function Page() {
  const product = products.find(p => p.id === 'high-voltage-power-transformer')!
  const { icon, ...data } = product
  return <ProductDetail product={{
    ...data,
    iconName: 'zap' as const
  }} />
}

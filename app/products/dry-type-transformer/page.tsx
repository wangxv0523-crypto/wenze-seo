import { ProductDetail } from '../_components/product-detail'
import { products } from '@/lib/products-data'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Dry Type Transformer Manufacturer China | SCB Series | Wenze Electric',
  description: 'Wenze Electric manufactures SCB12/SCB13 dry type transformers for indoor substations, data centers and hospitals. Voltage 6kV–35kV, 125–2500kVA. IEC 60076-11 certified.',
  keywords: 'dry type transformer, cast resin transformer, SCB transformer, indoor transformer manufacturer, fire-safe transformer China, IEC 60076-11',
  openGraph: {
    title: 'Dry Type Transformer Manufacturer China | Wenze Electric',
    description: 'SCB12/SCB13 dry type transformers for fire-safe indoor applications. 6kV–35kV, 125–2500kVA. IEC 60076-11.',
    type: 'website',
    url: 'https://www.wenzepower.com/products/dry-type-transformer',
  },
  alternates: {
    canonical: 'https://www.wenzepower.com/products/dry-type-transformer',
  },
}

export default function Page() {
  const product = products.find(p => p.id === 'dry-type-transformer')!
  const { icon, ...data } = product
  return <ProductDetail product={{
    ...data,
    iconName: 'zap' as const
  }} />
}

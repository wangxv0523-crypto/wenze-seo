import { ProductDetail } from '../_components/product-detail'
import { products } from '@/lib/products-data'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Oil Immersed Transformer Manufacturer China | S13 Series | Wenze Electric',
  description: 'Wenze Electric manufactures S13 series oil immersed power transformers. Voltage 6kV–35kV, Capacity 30–2500kVA, IEC 60076 certified. Factory in Shandong China. Get a free quote.',
  keywords: 'oil immersed transformer, oil filled transformer manufacturer, S13 transformer, power transformer China, IEC 60076 transformer, transformer exporter, Shandong transformer factory',
  openGraph: {
    title: 'Oil Immersed Transformer Manufacturer China | Wenze Electric',
    description: 'S13 series oil immersed transformers, 6kV–35kV, 30–2500kVA. IEC 60076 certified. Factory in Shandong, China.',
    type: 'website',
    url: 'https://www.wenzepower.com/products/oil-immersed-transformer',
  },
  alternates: {
    canonical: 'https://www.wenzepower.com/products/oil-immersed-transformer',
  },
}

export default function Page() {
  const product = products.find(p => p.id === 'oil-immersed-transformer')!
  const { icon, ...data } = product
  return <ProductDetail product={{
    ...data,
    iconName: 'droplets' as const
  }} />
}

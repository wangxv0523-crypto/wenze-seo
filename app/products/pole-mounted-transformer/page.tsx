import { ProductDetail } from '../_components/product-detail'
import { products } from '@/lib/products-data'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Pole Mounted Transformer Manufacturer China | 5–167kVA | Wenze Electric',
  description: 'Wenze Electric manufactures single-phase and three-phase pole mounted transformers for overhead distribution networks. 5kVA–167kVA. Suitable for rural electrification projects.',
  keywords: 'pole mounted transformer, overhead transformer, single phase pole transformer, rural electrification transformer, transformer manufacturer China',
  openGraph: {
    title: 'Pole Mounted Transformer Manufacturer China | Wenze Electric',
    description: 'Single and three-phase pole mounted transformers, 5–167kVA. For overhead distribution networks globally.',
    type: 'website',
    url: 'https://www.wenzepower.com/products/pole-mounted-transformer',
  },
  alternates: {
    canonical: 'https://www.wenzepower.com/products/pole-mounted-transformer',
  },
}

export default function Page() {
  const product = products.find(p => p.id === 'pole-mounted-transformer')!
  const { icon, ...data } = product
  return <ProductDetail product={{
    ...data,
    iconName: 'radio' as const
  }} />
}

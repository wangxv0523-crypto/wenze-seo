import { ProductDetail } from '../_components/product-detail'
import { products } from '@/lib/products-data'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Renewable Energy Transformer Manufacturer | Solar & Wind | Wenze Electric',
  description: 'Wenze Electric manufactures transformers for solar PV, wind power and energy storage systems. 1000–3150kVA, 10kV–35kV. Designed for variable loads and high harmonic environments.',
  keywords: 'renewable energy transformer, solar transformer, wind power transformer, energy storage transformer, PV transformer manufacturer China, green energy transformer',
  openGraph: {
    title: 'Renewable Energy Transformer for Solar & Wind | Wenze Electric',
    description: 'Transformers for solar PV inverters, wind turbines and BESS. 1000–3150kVA, harmonic suppression design.',
    type: 'website',
    url: 'https://www.wenzepower.com/products/renewable-energy-transformer',
  },
  alternates: {
    canonical: 'https://www.wenzepower.com/products/renewable-energy-transformer',
  },
}

export default function Page() {
  const product = products.find(p => p.id === 'renewable-energy-transformer')!
  const { icon, ...data } = product
  return <ProductDetail product={{
    ...data,
    iconName: 'sun' as const
  }} />
}

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Oil Immersed vs Dry Type Transformer: Complete Comparison Guide | Wenze Electric',
  description: 'Detailed comparison of oil immersed and dry type transformers. Learn which type suits your project based on environment, fire safety, cost, and application requirements.',
  keywords: 'oil immersed transformer vs dry type, transformer comparison, which transformer to choose, oil vs dry transformer',
  alternates: { canonical: 'https://www.wenzepower.com/blog/oil-immersed-vs-dry-type-transformer' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Oil Immersed vs Dry Type Transformer: Which One Should You Choose?',
  author: { '@type': 'Organization', name: 'Wenze Electric' },
  publisher: { '@type': 'Organization', name: 'Wenze Electric', url: 'https://www.wenzepower.com' },
  datePublished: '2026-05-20',
  description: 'A complete comparison of oil immersed and dry type transformers for international buyers.',
}

export default function BlogPost() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {['Buying Guide', 'Oil Transformer', 'Dry Type Transformer'].map(tag => (
              <span key={tag} className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">{tag}</span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Oil Immersed vs Dry Type Transformer: Which One Should You Choose?
          </h1>
          <p className="text-muted-foreground text-sm mb-8">Published: May 20, 2026 · 8 min read · Wenze Electric Technical Team</p>

          <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg text-foreground">
              Choosing between an oil immersed transformer and a dry type transformer is one of the most common decisions buyers face. Both types serve the same fundamental purpose — stepping voltage up or down — but they differ significantly in design, application, cost, and maintenance requirements.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8">What is an Oil Immersed Transformer?</h2>
            <p>
              An oil immersed transformer (also called oil-filled transformer) uses mineral oil or natural ester fluid as both the insulating medium and coolant. The core and windings are fully submerged in oil inside a sealed steel tank. The oil circulates heat away from the windings and provides excellent dielectric strength.
            </p>
            <p>
              <strong>Common types:</strong> S11, S13 (energy-efficient series), ONAN (oil natural air natural), ONAF (oil natural air forced), OFAF (oil forced air forced).
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8">What is a Dry Type Transformer?</h2>
            <p>
              A dry type transformer uses air and solid insulation materials (typically epoxy resin for cast resin types, or varnish for open wound types) instead of oil. The windings are cast in epoxy resin or vacuum-pressure impregnated, making them suitable for indoor installations where fire risk must be minimized.
            </p>
            <p>
              <strong>Common types:</strong> SCB (cast resin), VPI (vacuum pressure impregnated). SCB12 and SCB13 are the current energy-efficient series in China.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8">Key Comparison: Oil Immersed vs Dry Type</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="border border-border px-4 py-2 text-left">Factor</th>
                    <th className="border border-border px-4 py-2 text-left">Oil Immersed</th>
                    <th className="border border-border px-4 py-2 text-left">Dry Type</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Installation', 'Indoor or outdoor', 'Indoor only (or weather-protected enclosure)'],
                    ['Fire Safety', 'Oil is flammable (use FR3 for fire-safe)', 'Non-flammable, fire-safe'],
                    ['Cost', 'Lower initial cost', '20–40% higher initial cost'],
                    ['Maintenance', 'Oil sampling, Buchholz relay checks', 'Minimal, no oil management'],
                    ['Efficiency', 'Slightly higher efficiency', 'Slightly lower efficiency'],
                    ['Noise', 'Lower noise level', 'Higher noise level'],
                    ['Capacity Range', 'Up to 100MVA+', 'Typically up to 2500kVA'],
                    ['Voltage Range', 'Up to 220kV+', 'Typically up to 35kV'],
                    ['Environment', 'Outdoor, industrial, substation', 'Hospital, data center, mall, high-rise'],
                    ['Standards', 'IEC 60076', 'IEC 60076-11'],
                  ].map(([factor, oil, dry]) => (
                    <tr key={factor} className="even:bg-secondary/20">
                      <td className="border border-border px-4 py-2 font-medium text-foreground">{factor}</td>
                      <td className="border border-border px-4 py-2">{oil}</td>
                      <td className="border border-border px-4 py-2">{dry}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-primary mt-8">When to Choose Oil Immersed Transformer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Outdoor installation (utility pole, outdoor substation, industrial yard)</li>
              <li>High capacity requirements above 2500kVA</li>
              <li>High voltage applications above 35kV</li>
              <li>Budget-sensitive projects where lower initial cost matters</li>
              <li>Rural electrification and distribution networks</li>
              <li>Industrial parks, factories, mining operations</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8">When to Choose Dry Type Transformer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Indoor installations where fire risk must be minimized</li>
              <li>Data centers, hospitals, hotels, shopping malls</li>
              <li>High-rise buildings and underground substations</li>
              <li>Environments with strict fire codes (many Middle East and European projects)</li>
              <li>Locations where oil spill contamination is unacceptable</li>
              <li>Offshore platforms and marine applications</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8">Regional Preferences</h2>
            <p>
              In Southeast Asia (Vietnam, Indonesia, Philippines, Thailand), oil immersed transformers dominate due to lower cost and suitability for outdoor distribution networks. In the Middle East (Saudi Arabia, UAE), both types are used — dry type is preferred for indoor commercial buildings due to fire codes.
            </p>
            <p>
              In Africa (Nigeria, Kenya, Ghana), oil immersed transformers are standard for rural and urban distribution networks operating at 11kV or 33kV.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-8">
              <h3 className="font-bold text-primary mb-2">Need help choosing the right transformer?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our technical team can review your project specifications and recommend the most suitable transformer type and rating. Response within 24 hours.
              </p>
              <a href="/#contact" className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                Get Free Technical Consultation
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

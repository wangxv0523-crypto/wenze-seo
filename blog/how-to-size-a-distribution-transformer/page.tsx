import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Size a Distribution Transformer: Step-by-Step Guide | Wenze Electric',
  description: 'Learn how to calculate the correct transformer kVA rating for your project. Covers load calculation, demand factor, power factor, and safety margin.',
  keywords: 'transformer sizing, how to size transformer, kVA calculation, distribution transformer capacity, transformer load calculation',
  alternates: { canonical: 'https://www.wenzepower.com/blog/how-to-size-a-distribution-transformer' },
}

export default function BlogPost() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Technical Guide', 'Distribution Transformer', 'Sizing'].map(tag => (
              <span key={tag} className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            How to Size a Distribution Transformer: A Step-by-Step Guide
          </h1>
          <p className="text-muted-foreground text-sm mb-8">Published: May 10, 2026 · 10 min read · Wenze Electric Technical Team</p>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg text-foreground">
              Selecting the correct transformer kVA rating is critical. An undersized transformer will overheat and fail prematurely. An oversized one wastes money and increases no-load losses. This guide walks you through the sizing process step by step.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8">Step 1: Calculate Total Connected Load</h2>
            <p>Add up the rated power (in watts or kW) of all equipment connected to the transformer:</p>
            <div className="bg-secondary/30 rounded-lg p-4 font-mono text-sm">
              Total Connected Load = Sum of all equipment ratings (kW)
            </div>
            <p>Example: 10 motors × 15kW + 50 lighting circuits × 2kW = 150kW + 100kW = 250kW</p>

            <h2 className="text-2xl font-bold text-primary mt-8">Step 2: Apply Demand Factor</h2>
            <p>Not all equipment runs at full load simultaneously. The demand factor accounts for this:</p>
            <div className="bg-secondary/30 rounded-lg p-4 font-mono text-sm">
              Demand Load = Total Connected Load × Demand Factor
            </div>
            <p>Typical demand factors: Industrial (0.6–0.8), Commercial (0.5–0.7), Residential (0.4–0.6)</p>
            <p>Example: 250kW × 0.75 = 187.5kW</p>

            <h2 className="text-2xl font-bold text-primary mt-8">Step 3: Convert to kVA Using Power Factor</h2>
            <p>Transformers are rated in kVA, not kW. Convert using the power factor (PF):</p>
            <div className="bg-secondary/30 rounded-lg p-4 font-mono text-sm">
              Required kVA = Demand Load (kW) ÷ Power Factor
            </div>
            <p>Typical power factors: Industrial with motors (0.75–0.85), Commercial (0.85–0.95)</p>
            <p>Example: 187.5kW ÷ 0.80 = 234 kVA</p>

            <h2 className="text-2xl font-bold text-primary mt-8">Step 4: Add Safety Margin (20–25%)</h2>
            <p>Always add a safety margin to allow for future load growth and short-term overloads:</p>
            <div className="bg-secondary/30 rounded-lg p-4 font-mono text-sm">
              Final kVA = Required kVA × 1.25
            </div>
            <p>Example: 234 kVA × 1.25 = 292.5 kVA → Select standard size: <strong>315 kVA</strong></p>

            <h2 className="text-2xl font-bold text-primary mt-8">Standard Transformer Sizes (IEC)</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="border border-border px-4 py-2">Standard kVA Ratings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      30 · 50 · 63 · 80 · 100 · 125 · 160 · 200 · 250 · 315 · 400 · 500 · 630 · 800 · 1000 · 1250 · 1600 · 2000 · 2500 kVA
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs">Always round up to the next standard size.</p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-8">
              <h3 className="font-bold text-primary mb-2">Need a transformer sized for your project?</h3>
              <p className="text-sm text-muted-foreground mb-4">Send us your load schedule and we will recommend the correct rating, voltage, and cooling type free of charge.</p>
              <a href="/#contact" className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                Get Free Sizing Consultation
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

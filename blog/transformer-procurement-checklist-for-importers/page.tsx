import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Transformer Procurement Checklist for International Buyers | Wenze Electric',
  description: 'Complete checklist for importing transformers from China. Covers technical specs, standards, FAT inspection, shipping documents and common mistakes.',
  keywords: 'transformer procurement, import transformer from China, transformer buying guide, transformer inspection checklist',
  alternates: { canonical: 'https://www.wenzepower.com/blog/transformer-procurement-checklist-for-importers' },
}

const checklist = [
  { category: 'Technical Specifications', items: ['Rated power (kVA)', 'Primary voltage (HV)', 'Secondary voltage (LV)', 'Frequency (50Hz or 60Hz)', 'Vector group (Dyn11, YNd11, etc.)', 'Impedance voltage (%)', 'Cooling type (ONAN, ONAF, AN, AF)', 'Tap range (±2×2.5% standard)', 'Altitude of installation site'] },
  { category: 'Standards & Certifications', items: ['Confirm IEC 60076 or ANSI C57 requirement', 'Request test certificates for each unit', 'Specify third-party inspection if required (SGS/BV/TÜV)', 'Check if CE mark is required for your country'] },
  { category: 'Factory Acceptance Test (FAT)', items: ['Winding resistance measurement', 'Voltage ratio and polarity test', 'No-load loss and current test', 'Load loss and impedance voltage test', 'Induced overvoltage test', 'Request witness inspection if budget allows'] },
  { category: 'Shipping & Documentation', items: ['Commercial invoice', 'Packing list', 'Certificate of Origin (CO)', 'Test reports and FAT certificate', 'Bill of lading', 'HS code: 8504.21 (≤650kVA) or 8504.22 (>650kVA)', 'Insurance certificate'] },
]

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
            {['Import Guide', 'Procurement', 'Quality Control'].map(tag => (
              <span key={tag} className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Transformer Procurement Checklist for International Buyers
          </h1>
          <p className="text-muted-foreground text-sm mb-8">Published: April 28, 2026 · 12 min read · Wenze Electric Technical Team</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <p className="text-lg text-foreground">
              Importing transformers from China requires careful preparation. Missing a specification or skipping an inspection step can result in costly delays or equipment that does not meet local grid requirements. Use this checklist to ensure a smooth procurement process.
            </p>

            {checklist.map((section) => (
              <div key={section.category}>
                <h2 className="text-2xl font-bold text-primary mb-4">{section.category}</h2>
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-8">
              <h3 className="font-bold text-primary mb-2">Ready to start your procurement?</h3>
              <p className="text-sm text-muted-foreground mb-4">Contact us with your technical requirements and we will provide a detailed quotation with full documentation support.</p>
              <a href="/#contact" className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

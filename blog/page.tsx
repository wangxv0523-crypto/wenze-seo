import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Transformer Technical Blog | Buying Guide & Tips | Wenze Electric',
  description: 'Technical articles on power transformer selection, installation, and maintenance. Expert guides for buyers in Southeast Asia, Middle East and Africa.',
  alternates: { canonical: 'https://www.wenzepower.com/blog' },
}

const posts = [
  {
    slug: 'oil-immersed-vs-dry-type-transformer',
    title: 'Oil Immersed vs Dry Type Transformer: Which One Should You Choose?',
    excerpt: 'A complete comparison of oil immersed and dry type transformers covering installation environment, fire safety, maintenance, cost, and application scenarios to help buyers make the right choice.',
    date: '2026-05-20',
    readTime: '8 min read',
    tags: ['Buying Guide', 'Oil Transformer', 'Dry Type Transformer'],
  },
  {
    slug: 'how-to-size-a-distribution-transformer',
    title: 'How to Size a Distribution Transformer: A Step-by-Step Guide',
    excerpt: 'Learn how to calculate the correct transformer capacity (kVA) for your project. Covers load calculation, demand factor, power factor correction, and safety margin.',
    date: '2026-05-10',
    readTime: '10 min read',
    tags: ['Technical Guide', 'Distribution Transformer', 'Sizing'],
  },
  {
    slug: 'transformer-procurement-checklist-for-importers',
    title: 'Transformer Procurement Checklist for International Buyers',
    excerpt: 'Everything you need to know when importing transformers from China: technical specs, IEC vs ANSI standards, FAT inspection, shipping documentation, and common mistakes to avoid.',
    date: '2026-04-28',
    readTime: '12 min read',
    tags: ['Import Guide', 'Procurement', 'Quality Control'],
  },
  {
    slug: 'iec-60076-vs-ansi-c57-transformer-standards',
    title: 'IEC 60076 vs ANSI C57: Understanding Transformer Standards by Region',
    excerpt: 'Which transformer standard applies to your country? This guide explains the key differences between IEC 60076 and ANSI C57 and which regions require each standard.',
    date: '2026-04-15',
    readTime: '7 min read',
    tags: ['Standards', 'IEC', 'ANSI', 'Technical'],
  },
  {
    slug: 'solar-farm-transformer-selection-guide',
    title: 'How to Select Transformers for Solar PV and Wind Power Projects',
    excerpt: 'Special requirements for renewable energy transformers including harmonic suppression, bidirectional power flow, inverter compatibility, and efficiency optimization.',
    date: '2026-04-05',
    readTime: '9 min read',
    tags: ['Renewable Energy', 'Solar PV', 'Wind Power'],
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Transformer Technical Blog</h1>
            <p className="text-muted-foreground text-lg">
              Expert guides for transformer buyers, engineers and importers worldwide
            </p>
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2 hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

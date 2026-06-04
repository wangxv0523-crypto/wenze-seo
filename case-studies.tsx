import { MapPin, Zap, Calendar } from 'lucide-react'

const cases = [
  {
    id: 1,
    country: 'Vietnam',
    flag: '🇻🇳',
    region: 'Southeast Asia',
    project: 'Industrial Park Power Supply',
    product: 'Oil Immersed Transformer',
    specs: '10 × 1000kVA, 22kV/0.4kV',
    year: '2024',
    description: 'Supplied 10 units of S13 oil immersed transformers for a large industrial park in Ho Chi Minh City. All units passed third-party FAT inspection before shipment.',
    color: 'bg-blue-50 border-blue-200',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 2,
    country: 'Indonesia',
    flag: '🇮🇩',
    region: 'Southeast Asia',
    project: 'Rural Electrification Program',
    product: 'Pole Mounted Transformer',
    specs: '50 × 50kVA, 20kV/0.4kV',
    year: '2024',
    description: 'Delivered 50 pole mounted transformers for a rural electrification project in Sumatra. Designed for tropical climate with enhanced corrosion protection.',
    color: 'bg-green-50 border-green-200',
    tagColor: 'bg-green-100 text-green-700',
  },
  {
    id: 3,
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    region: 'Middle East',
    project: 'Data Center Substation',
    product: 'Dry Type Transformer',
    specs: '6 × 2000kVA, 13.8kV/0.4kV',
    year: '2023',
    description: 'Supplied SCB13 cast resin dry type transformers for a tier-3 data center in Riyadh. Fire-safe design with IP23 enclosure for indoor installation.',
    color: 'bg-orange-50 border-orange-200',
    tagColor: 'bg-orange-100 text-orange-700',
  },
  {
    id: 4,
    country: 'Nigeria',
    flag: '🇳🇬',
    region: 'Africa',
    project: '33kV Distribution Network',
    product: 'Distribution Transformer',
    specs: '20 × 300kVA, 33kV/0.415kV',
    year: '2023',
    description: 'Exported 20 distribution transformers for a utility grid expansion project in Lagos State. Designed for 33kV systems common in West Africa.',
    color: 'bg-yellow-50 border-yellow-200',
    tagColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    id: 5,
    country: 'Philippines',
    flag: '🇵🇭',
    region: 'Southeast Asia',
    project: '50MW Solar Farm',
    product: 'Renewable Energy Transformer',
    specs: '25 × 2000kVA, 34.5kV/0.27kV',
    year: '2024',
    description: 'Supplied 25 photovoltaic step-up transformers for a utility-scale solar farm in Luzon. Harmonic suppression design optimized for inverter output.',
    color: 'bg-purple-50 border-purple-200',
    tagColor: 'bg-purple-100 text-purple-700',
  },
  {
    id: 6,
    country: 'Iraq',
    flag: '🇮🇶',
    region: 'Middle East',
    project: 'Power Plant Substation',
    product: 'High Voltage Power Transformer',
    specs: '2 × 40MVA, 110kV/11kV',
    year: '2023',
    description: 'Delivered two 110kV power transformers for a gas-fired power plant substation. Complete with OLTC, cooling fans, and Buchholz relay protection.',
    color: 'bg-red-50 border-red-200',
    tagColor: 'bg-red-100 text-red-700',
  },
]

export function CaseStudies() {
  return (
    <section id="cases" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Project References</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Global Project Case Studies
          </h2>
          <p className="text-muted-foreground text-lg">
            Transformer projects delivered to utilities, industrial parks, solar farms and data centers worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.id} className={`rounded-xl border p-6 ${c.color}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{c.flag}</span>
                    <span className="font-bold text-foreground">{c.country}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-xs">
                    <MapPin className="w-3 h-3" />
                    <span>{c.region}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-xs">
                  <Calendar className="w-3 h-3" />
                  <span>{c.year}</span>
                </div>
              </div>

              <h3 className="font-bold text-foreground mb-2">{c.project}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{c.description}</p>

              <div className="space-y-2">
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${c.tagColor}`}>
                  <Zap className="w-3 h-3" />
                  {c.product}
                </div>
                <div className="text-xs text-muted-foreground font-mono bg-white/60 px-2.5 py-1 rounded border">
                  {c.specs}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Have a similar project? We provide free technical consultation and quotation.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

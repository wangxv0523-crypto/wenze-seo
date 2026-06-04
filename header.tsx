"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Products',
    href: '#products',
    children: [
      { name: 'Oil Immersed Transformer', href: '/products/oil-immersed-transformer' },
      { name: 'Dry Type Transformer', href: '/products/dry-type-transformer' },
      { name: 'Distribution Transformer', href: '/products/distribution-transformer' },
      { name: 'High Voltage Transformer', href: '/products/high-voltage-power-transformer' },
      { name: 'Pole Mounted Transformer', href: '/products/pole-mounted-transformer' },
      { name: 'Renewable Energy Transformer', href: '/products/renewable-energy-transformer' },
    ]
  },
  { name: 'Case Studies', href: '#cases' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'About', href: '#about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '#contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="mailto:sales@wenzepower.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">sales@wenzepower.com</span>
              </a>
              <a href="https://wa.me/8615905342475" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">+86 159 0534 2475</span>
              </a>
            </div>
            <div className="hidden md:block text-xs">
              Shandong Wenze Electric Co., Ltd. | IEC & ANSI Certified Transformer Manufacturer
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-n2GL5TaXQSDwwTPZmdjvvT0y5cX8oN.png"
              alt="Wenze Electric - Transformer Manufacturer China"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              item.children ? (
                <div key={item.name} className="relative">
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {productsOpen && (
                    <div
                      className="absolute top-full left-0 mt-1 w-64 bg-white border border-border rounded-xl shadow-lg py-2 z-50"
                      onMouseEnter={() => setProductsOpen(true)}
                      onMouseLeave={() => setProductsOpen(false)}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              <Link href="#contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full mt-2">
                <Link href="#contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

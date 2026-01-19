'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import clsx from 'clsx'

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Residential',
    href: '/services/residential',
    children: [
      { name: 'Kitchens', href: '/services/residential/kitchens' },
      { name: 'Bathrooms', href: '/services/residential/bathrooms' },
      { name: 'Basements', href: '/services/residential/basements' },
      { name: 'Garage', href: '/services/residential/garage' },
      { name: 'EV Charging Stations', href: '/services/residential/ev-charging' },
      { name: 'Knob and Tube', href: '/services/residential/knob-and-tube' },
      { name: 'Aluminum Wiring', href: '/services/residential/aluminum-wiring' },
      { name: 'Lighting Design', href: '/services/residential/lighting-design' },
      { name: 'Outdoor Lighting', href: '/services/residential/outdoor-lighting' },
      { name: 'Electrical Panels', href: '/services/residential/electrical-panels' },
      { name: 'Meter Replacement', href: '/services/residential/meter-replacement' },
      { name: 'Service Upgrades', href: '/services/residential/service-upgrades' },
      { name: 'Storm Damage', href: '/services/residential/storm-damage' },
    ],
  },
  { name: 'Commercial', href: '/services/commercial' },
  { name: 'Industrial', href: '/services/industrial' },
  { name: 'About Us', href: '/about' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: "FAQ's", href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 transition-all duration-300 overflow-visible',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white shadow-sm'
      )}
    >
      {/* Top bar */}
      <div className="bg-dark-900 text-white py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <p className="hidden sm:block">Family Owned & Operated Since 1987</p>
          <a
            href="tel:314-773-4955"
            className="flex items-center gap-2 hover:text-primary-400 transition-colors group"
          >
            <Phone className="h-4 w-4 group-hover:animate-pulse" />
            <span>(314) 773-4955</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom overflow-visible">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative z-10">
            <Image
              src="/logo.png"
              alt="Fielder Electrical Services"
              width={400}
              height={120}
              className="h-24 md:h-28 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-dark-700 hover:text-primary-500 font-medium transition-colors relative group"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.name}
                      <ChevronDown
                        className={clsx(
                          'h-4 w-4 transition-transform duration-200',
                          openDropdown === item.name && 'rotate-180'
                        )}
                      />
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </button>
                    <div
                      className={clsx(
                        'absolute top-full left-0 w-56 bg-white shadow-xl rounded-xl py-2 transition-all duration-300 border border-dark-100',
                        openDropdown === item.name
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-4'
                      )}
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-2.5 text-dark-700 hover:bg-primary-50 hover:text-primary-500 font-medium transition-colors"
                      >
                        All Residential Services
                      </Link>
                      <div className="border-t border-dark-100 my-1" />
                      {item.children.map((child, idx) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-dark-600 hover:bg-primary-50 hover:text-primary-500 hover:pl-5 transition-all"
                          style={{ transitionDelay: `${idx * 20}ms` }}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-dark-700 hover:text-primary-500 font-medium transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex btn-primary"
          >
            Get a Quote
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-dark-700 hover:text-primary-500 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span
                className={clsx(
                  'absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300',
                  mobileMenuOpen && 'rotate-45 top-3'
                )}
              />
              <span
                className={clsx(
                  'absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300',
                  mobileMenuOpen && 'opacity-0'
                )}
              />
              <span
                className={clsx(
                  'absolute left-0 top-5 w-6 h-0.5 bg-current transition-all duration-300',
                  mobileMenuOpen && '-rotate-45 top-3'
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          className={clsx(
            'lg:hidden overflow-hidden transition-all duration-500 ease-in-out',
            mobileMenuOpen ? 'max-h-[calc(100vh-80px)] pb-4 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="space-y-1 border-t border-dark-100 pt-4">
            {navigation.map((item, index) => (
              <div
                key={item.name}
                className="transform transition-all duration-300"
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms',
                  opacity: mobileMenuOpen ? 1 : 0,
                  transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                }}
              >
                {item.children ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 text-dark-700 hover:bg-primary-50 rounded-lg font-medium transition-colors"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        )
                      }
                    >
                      {item.name}
                      <ChevronDown
                        className={clsx(
                          'h-5 w-5 transition-transform duration-300',
                          openDropdown === item.name && 'rotate-180'
                        )}
                      />
                    </button>
                    <div
                      className={clsx(
                        'overflow-hidden transition-all duration-300',
                        openDropdown === item.name ? 'max-h-[500px]' : 'max-h-0'
                      )}
                    >
                      <Link
                        href={item.href}
                        className="block px-8 py-2 text-dark-600 hover:text-primary-500 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        All Residential Services
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-8 py-2 text-dark-600 hover:text-primary-500 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-dark-700 hover:bg-primary-50 rounded-lg font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div
              className="transform transition-all duration-300 pt-2"
              style={{
                transitionDelay: mobileMenuOpen ? `${navigation.length * 50}ms` : '0ms',
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(10px)',
              }}
            >
              <Link
                href="/contact"
                className="block mx-4 btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

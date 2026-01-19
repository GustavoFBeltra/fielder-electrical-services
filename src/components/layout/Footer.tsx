'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, ArrowRight, Zap } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Residential Services', href: '/services/residential' },
  { name: 'Commercial Services', href: '/services/commercial' },
  { name: 'Industrial Services', href: '/services/industrial' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: "FAQ's", href: '/faq' },
  { name: 'Contact Us', href: '/contact' },
]

const services = [
  { name: 'Kitchens & Bathrooms', href: '/services/residential/kitchens' },
  { name: 'EV Charging Stations', href: '/services/residential/ev-charging' },
  { name: 'Knob and Tube Wiring', href: '/services/residential/knob-and-tube' },
  { name: 'Electrical Panels', href: '/services/residential/electrical-panels' },
  { name: 'Lighting Design', href: '/services/residential/lighting-design' },
  { name: 'Storm Damage Repair', href: '/services/residential/storm-damage' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      {/* CTA Section */}
      <div className="bg-primary-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-500" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-5 left-10 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute bottom-5 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
        </div>

        <div className="container-custom py-14 text-center relative">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-white/80" />
              <span className="text-white/80 font-medium">Let&apos;s Work Together</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="heading-2 text-white mb-4">
              Ready to Start Your Project?
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free estimate. Our team of licensed electricians
              is ready to help with all your electrical needs.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:314-773-4955"
                className="btn bg-white text-primary-500 hover:bg-dark-50 group"
              >
                <Phone className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                Call (314) 773-4955
              </a>
              <Link
                href="/contact"
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary-500 group"
              >
                Request a Quote Online
                <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <AnimatedSection animation="fade-up" delay={0}>
            <div>
              <div className="mb-6">
                <Image
                  src="/logo.png"
                  alt="Fielder Electrical Services"
                  width={240}
                  height={72}
                  className="h-14 w-auto brightness-0 invert transition-transform hover:scale-105"
                />
              </div>
              <p className="text-dark-300 mb-6 leading-relaxed">
                Family owned and operated since 1987. Serving the St. Louis area
                with professional electrical services for residential, commercial,
                and industrial clients.
              </p>
              <div className="inline-flex items-center gap-2 bg-primary-500/10 text-primary-400 px-4 py-2 rounded-full border border-primary-500/20">
                <span className="text-sm font-medium">A+ BBB Rating</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Quick Links */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary-500" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-dark-300 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Services */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary-500" />
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-dark-300 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 transition-all" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary-500" />
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <div className="bg-dark-800 p-2 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                    <MapPin className="h-5 w-5 text-primary-400" />
                  </div>
                  <span className="text-dark-300">
                    1827 S. Kingshighway Blvd.
                    <br />
                    St. Louis, Missouri 63110
                  </span>
                </li>
                <li>
                  <a
                    href="tel:314-773-4955"
                    className="flex items-center gap-3 text-dark-300 hover:text-primary-400 transition-colors group"
                  >
                    <div className="bg-dark-800 p-2 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                      <Phone className="h-5 w-5 text-primary-400" />
                    </div>
                    (314) 773-4955
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@fielderstl.com"
                    className="flex items-center gap-3 text-dark-300 hover:text-primary-400 transition-colors group"
                  >
                    <div className="bg-dark-800 p-2 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary-400" />
                    </div>
                    info@fielderstl.com
                  </a>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="bg-dark-800 p-2 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                    <Clock className="h-5 w-5 text-primary-400" />
                  </div>
                  <span className="text-dark-300">
                    Monday - Friday
                    <br />
                    8:00 AM - 5:00 PM
                  </span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-400 text-sm">
            &copy; {new Date().getFullYear()} Fielder Electrical Services. All
            rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/careers"
              className="text-dark-400 hover:text-primary-400 transition-colors"
            >
              Careers
            </Link>
            <Link
              href="/service-areas"
              className="text-dark-400 hover:text-primary-400 transition-colors"
            >
              Service Areas
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

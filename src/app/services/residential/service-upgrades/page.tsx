import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, Zap } from 'lucide-react'
import ImageGallery from '@/components/ui/ImageGallery'

const images = [
  '/images/service-upgrades/100-amp-meter-replacement-829x1024-1.webp',
  '/images/service-upgrades/Electrical-Panel-Replacement-819x1024-1.webp',
  '/images/service-upgrades/Electrical-Service-Upgrade.webp',
]

export const metadata: Metadata = {
  title: 'Electrical Service Upgrades | Fielder Electrical Services',
  description:
    'Professional electrical service upgrades in St. Louis. Meter upgrades, code compliance, and capacity increases for older homes.',
}

export default function ServiceUpgradesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-primary-400 mb-4">
              <Link href="/services/residential" className="hover:underline">
                Residential Services
              </Link>
              <span>/</span>
              <span>Service Upgrades</span>
            </div>
            <h1 className="heading-1 mb-6">Electrical Service Upgrades</h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              At Fielder Electrical Services, we specialize in older and existing
              structures. We have ample experience wiring electrical service
              upgrades in homes across the St. Louis area.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Why Upgrade */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  Why Upgrade Your Service?
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  It is common for older homes to have outdated systems that
                  require electrical service upgrades to meet the current
                  electrical codes. Our considerable experience with these types
                  of properties is extremely beneficial for this work.
                </p>
              </div>

              {/* Components */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  Your Electrical Service
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  A residential electrical service is generally comprised of two
                  primary areas: the interior panel and the exterior meter. Just
                  because your home might require a new interior panel does not
                  necessarily mean you need to replace the exterior service - or
                  vice versa.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-dark-50 rounded-xl p-6">
                    <h3 className="font-semibold text-dark-900 mb-3">
                      Interior Panel Components
                    </h3>
                    <ul className="space-y-2 text-dark-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                        Main breaker panel
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                        Circuit breakers
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                        Bus bars
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                        Ground connections
                      </li>
                    </ul>
                  </div>
                  <div className="bg-dark-50 rounded-xl p-6">
                    <h3 className="font-semibold text-dark-900 mb-3">
                      Exterior Meter Components
                    </h3>
                    <ul className="space-y-2 text-dark-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                        Meter base
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                        Entrance cable
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                        Riser cable
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                        Mast & weatherhead
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Code Compliance */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  Code Compliance
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  The needs of each home are determined on a case-by-case basis
                  with a free estimate. Our work is done in compliance with local
                  codes/jurisdictions and the rules set forth by the National
                  Electric Code.
                </p>
                <p className="text-dark-600 leading-relaxed">
                  Compliance requirements can vary by municipality. If you would
                  like to know what is needed for your home to meet code
                  requirements, contact us to request a free estimate.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-dark-50 rounded-xl p-6">
                <h3 className="font-semibold text-dark-900 text-lg mb-4">
                  Upgrade Services
                </h3>
                <ul className="space-y-3">
                  {[
                    'Meter base replacement',
                    'Entrance cable upgrade',
                    'Riser cable replacement',
                    'Mast replacement',
                    'Weatherhead installation',
                    'Grounding system upgrade',
                    'Panel upgrades',
                    'Code compliance work',
                  ].map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-2 text-dark-700"
                    >
                      <CheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary-500 rounded-xl p-6 text-white">
                <Zap className="h-10 w-10 mb-4" />
                <h3 className="font-semibold text-lg mb-2">
                  Need a Service Upgrade?
                </h3>
                <p className="text-primary-100 mb-4">
                  Contact us for a free estimate to determine what your home
                  needs.
                </p>
                <a
                  href="tel:314-773-4955"
                  className="btn bg-white text-primary-600 hover:bg-primary-50 w-full"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (314) 773-4955
                </a>
              </div>

              <div className="bg-dark-900 rounded-xl p-6 text-white">
                <h3 className="font-semibold text-lg mb-2">Related Services</h3>
                <ul className="space-y-2 text-dark-300">
                  <li>
                    <Link
                      href="/services/residential/electrical-panels"
                      className="hover:text-primary-400"
                    >
                      → Electrical Panels
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/residential/storm-damage"
                      className="hover:text-primary-400"
                    >
                      → Storm Damage Repairs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <h2 className="heading-2 text-dark-900 mb-4 text-center">Our Work</h2>
          <p className="text-dark-600 text-lg mb-10 text-center max-w-2xl mx-auto">
            Browse photos of our electrical service upgrade projects.
          </p>
          <ImageGallery images={images} alt="Electrical service upgrade work" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Get Your Home Up to Code</h2>
          <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate to determine what electrical
            service upgrades your home needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:314-773-4955" className="btn-primary">
              <Phone className="h-5 w-5 mr-2" />
              Call for Free Estimate
            </a>
            <Link
              href="/contact"
              className="btn border-2 border-white text-white hover:bg-white hover:text-dark-900"
            >
              Request Quote Online
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, AlertTriangle, Zap } from 'lucide-react'
import ImageGallery from '@/components/ui/ImageGallery'

const images = [
  '/images/aluminum-wiring/Aluminum-Wiring-Repairs.webp',
]

export const metadata: Metadata = {
  title: 'Aluminum Wiring Repairs | Fielder Electrical Services',
  description:
    'Professional aluminum wiring repairs and replacement in St. Louis. Safety inspections and fire prevention for homes with aluminum wiring.',
}

export default function AluminumWiringPage() {
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
              <span>Aluminum Wiring</span>
            </div>
            <h1 className="heading-1 mb-6">Aluminum Wiring Repairs</h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              Homes with aluminum wiring are 55 times more likely to have
              connections reach &quot;Fire-Hazard-Conditions.&quot; Our qualified
              electricians can make your home safe.
            </p>
          </div>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="bg-red-600 text-white py-6">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-4">
            <AlertTriangle className="h-8 w-8" />
            <p className="text-lg font-semibold text-center">
              Homes with aluminum wiring are 55 times more likely to have fire
              hazard conditions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  About Aluminum Wiring
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  Aluminum wiring is commonly found in homes and additions built
                  between 1965 and the mid-1970s. During that time, the cost of
                  copper increased, so aluminum was substituted in branch
                  electrical circuits, such as outlets and switches.
                </p>
                <p className="text-dark-600 leading-relaxed">
                  The only way for a home owner to tell if they have this wiring
                  is to look at the printed outer jacket of electric cables, which
                  are typically only visible in unfinished areas such as
                  basements. Cable with aluminum conductors will be marked with
                  &quot;Al&quot; or similar labels.
                </p>
              </div>

              {/* Facts */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  Aluminum Wiring Facts
                </h2>
                <div className="space-y-4">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                      <p className="text-dark-700">
                        Aluminum wiring expands as it warms up and contracts when
                        it cools down. This causes a loss in tightness at the
                        connection.
                      </p>
                    </div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                      <p className="text-dark-700">
                        According to the U.S. Consumer Product Safety Commission,
                        problems resulting from expansion can cause overheating at
                        connections between the wiring and devices, or at splices.
                      </p>
                    </div>
                  </div>
                  <div className="bg-dark-50 rounded-xl p-6">
                    <p className="text-dark-700">
                      An excess of two million homes in the United States were
                      constructed using this type of wiring.
                    </p>
                  </div>
                </div>
              </div>

              {/* Our Solution */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  How We Handle Aluminum Wiring
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  If you see indications of issues with aluminum wiring, contact
                  the qualified electricians at Fielder Electrical Services to
                  make the devices in your home safe.
                </p>
                <p className="text-dark-600 leading-relaxed mb-6">
                  The most popular option for solving issues with aluminum wiring
                  is to hire a licensed electrician to replace the connections at
                  each outlet, switch, and junction box.
                </p>
                <p className="text-dark-600 leading-relaxed">
                  A qualified electrician (like those at Fielder Electrical
                  Services) can replace or repair aluminum wiring to effectively
                  and permanently reduce the possibility of fire and injury
                  resulting from overheating connections.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-dark-50 rounded-xl p-6">
                <h3 className="font-semibold text-dark-900 text-lg mb-4">
                  Our Aluminum Wiring Services
                </h3>
                <ul className="space-y-3">
                  {[
                    'Aluminum wiring inspection',
                    'Connection replacement',
                    'Outlet & switch upgrades',
                    'Junction box repairs',
                    'Complete rewiring options',
                    'Safety assessments',
                    'Code compliance',
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

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="font-semibold text-dark-900 text-lg mb-4">
                  Warning Signs
                </h3>
                <ul className="space-y-3">
                  {[
                    'Warm cover plates on outlets or switches',
                    'Flickering lights',
                    'Circuits that don\'t work',
                    'Burning smell near outlets',
                    'Sparking when plugging in devices',
                  ].map((sign) => (
                    <li
                      key={sign}
                      className="flex items-start gap-2 text-dark-700"
                    >
                      <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      {sign}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary-500 rounded-xl p-6 text-white">
                <Zap className="h-10 w-10 mb-4" />
                <h3 className="font-semibold text-lg mb-2">
                  Think You Have Aluminum Wiring?
                </h3>
                <p className="text-primary-100 mb-4">
                  Contact our office for a professional assessment. Our licensed
                  electricians have the expertise to make your home safe.
                </p>
                <a
                  href="tel:314-773-4955"
                  className="btn bg-white text-primary-600 hover:bg-primary-50 w-full"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (314) 773-4955
                </a>
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
            Browse photos of our aluminum wiring repair projects.
          </p>
          <ImageGallery images={images} alt="Aluminum wiring repair work" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Don&apos;t Take Chances with Your Safety</h2>
          <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
            If you believe you have aluminum wiring in your home, contact our
            office. Our licensed electricians have the expertise necessary to
            make your home wiring safe!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:314-773-4955" className="btn-primary">
              <Phone className="h-5 w-5 mr-2" />
              Call (314) 773-4955
            </a>
            <Link
              href="/contact"
              className="btn border-2 border-white text-white hover:bg-white hover:text-dark-900"
            >
              Request Assessment Online
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

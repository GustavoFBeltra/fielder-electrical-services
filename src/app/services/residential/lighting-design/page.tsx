import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, Lightbulb } from 'lucide-react'
import ImageGallery from '@/components/ui/ImageGallery'

const images = [
  '/images/lighting-design/LD-01.webp',
  '/images/lighting-design/LD-04.webp',
  '/images/lighting-design/LD-11.webp',
  '/images/lighting-design/Lighting-After.webp',
  '/images/lighting-design/UCLs-01.webp',
  '/images/lighting-design/UCLs-03.webp',
  '/images/lighting-design/Crestwood-Under-Cabinet-Lighting.webp',
  '/images/lighting-design/Under-Cabinet-Lighting-01.webp',
  '/images/lighting-design/Under-Cabinet-Lighting-02.webp',
  '/images/lighting-design/Under-Cabinet-Lighting-04.webp',
  '/images/lighting-design/Under-Cabinet-Lighting-05.webp',
]

export const metadata: Metadata = {
  title: 'Lighting Design Services | Fielder Electrical Services',
  description:
    'Professional lighting design and installation in St. Louis. Recessed lighting, pendants, chandeliers, and custom lighting solutions.',
}

export default function LightingDesignPage() {
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
              <span>Lighting Design</span>
            </div>
            <h1 className="heading-1 mb-6">Lighting Design Services</h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              The professional team at Fielder Electrical Services works with
              home owners and general contractors to provide lighting design
              services tailored to enhance each individual home we wire.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Approach */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  Our Hands-On Approach
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  We pride ourselves in our hands-on approach to lighting design.
                  For each project, our estimators work to provide exactly what
                  the client wants in their home.
                </p>
                <p className="text-dark-600 leading-relaxed">
                  This enables our skilled electricians to install any type of
                  lighting where you never thought possible! One simple, yet
                  dramatic change a home owner can make in any room is to change
                  or add lighting.
                </p>
              </div>

              {/* Lighting Types */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  We Wire All Lighting Types
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  The rooms in your home are frequently used for more than one
                  purpose, so incorporating more than one lighting type is common
                  practice.
                </p>
                <p className="text-dark-600 leading-relaxed mb-6">
                  When our team provides a lighting design and completes the
                  wiring, we utilize the lighting types best suited to meet your
                  needs. This includes hanging fixtures, such as pendants and
                  chandeliers, as well as wall sconces and recessed lighting.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Recessed lighting',
                    'Pendant lights',
                    'Chandeliers',
                    'Wall sconces',
                    'Track lighting',
                    'Under cabinet lights',
                    'Dimmer switches',
                    'LED upgrades',
                  ].map((type) => (
                    <div
                      key={type}
                      className="flex items-center gap-2 text-dark-700 bg-dark-50 rounded-lg p-3"
                    >
                      <Lightbulb className="h-5 w-5 text-primary-500" />
                      {type}
                    </div>
                  ))}
                </div>
              </div>

              {/* Custom Work */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  We Wire Exactly What You Want
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  Not every room commands variable lighting - sometimes one will
                  suffice. In that case, we can wire whatever you fancy in your
                  home&apos;s lighting design.
                </p>
                <p className="text-dark-600 leading-relaxed mb-6">
                  Whether you are wanting to transition from track lighting to
                  recessed lighting, or add lighting to what is existing, we can
                  wire it!
                </p>
                <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
                  <h3 className="font-semibold text-dark-900 mb-2">
                    Minimal Damage Installation
                  </h3>
                  <p className="text-dark-600">
                    We pride ourselves on our ability to install lighting in
                    existing ceilings by doing the least amount of damage possible
                    to the surrounding structure.
                  </p>
                </div>
              </div>

              {/* Example Project */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  Example: Vaulted Ceiling Lighting
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  One Ballwin home had no existing lighting in the family room,
                  and the room had a vaulted ceiling. Our electrician cut into the
                  existing ceiling and installed completely new recessed lighting
                  to the surrounding vaulted ceiling.
                </p>
                <p className="text-dark-600 leading-relaxed">
                  The electricians of Fielder Electrical Services take pride in
                  their exceptional ability to add lighting in locations you never
                  thought possible.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-dark-50 rounded-xl p-6">
                <h3 className="font-semibold text-dark-900 text-lg mb-4">
                  Lighting Services
                </h3>
                <ul className="space-y-3">
                  {[
                    'Custom lighting design',
                    'Recessed light installation',
                    'Pendant & chandelier wiring',
                    'Dimmer switch installation',
                    'LED lighting upgrades',
                    'Under cabinet lighting',
                    'Task lighting',
                    'Accent lighting',
                    'Vaulted ceiling lighting',
                    'Existing ceiling additions',
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
                <Lightbulb className="h-10 w-10 mb-4" />
                <h3 className="font-semibold text-lg mb-2">
                  Transform Your Space
                </h3>
                <p className="text-primary-100 mb-4">
                  Contact us for a free estimate on your lighting project.
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
                <h3 className="font-semibold text-lg mb-2">
                  Related Services
                </h3>
                <ul className="space-y-2 text-dark-300">
                  <li>
                    <Link
                      href="/services/residential/outdoor-lighting"
                      className="hover:text-primary-400"
                    >
                      → Outdoor Lighting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/residential/kitchens"
                      className="hover:text-primary-400"
                    >
                      → Kitchen Lighting
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
            Browse photos of our lighting design projects.
          </p>
          <ImageGallery images={images} alt="Lighting design work" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Ready to Light Up Your Home?</h2>
          <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your lighting design project.
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

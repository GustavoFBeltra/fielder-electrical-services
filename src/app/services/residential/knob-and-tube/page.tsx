import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, AlertTriangle, Cable } from 'lucide-react'
import ImageGallery from '@/components/ui/ImageGallery'

const images = [
  '/images/knob-and-tube/Knob-Tube.webp',
  '/images/knob-and-tube/Knob-Tube2.webp',
  '/images/knob-and-tube/Knob-Tube3.webp',
  '/images/knob-and-tube/Knob-Tube4.webp',
  '/images/knob-and-tube/Knob-Tube5.webp',
]

export const metadata: Metadata = {
  title: 'Knob and Tube Wiring Replacement | Fielder Electrical Services',
  description:
    'Professional knob and tube wiring assessment and replacement in St. Louis. Safety inspections and modern wiring solutions for older homes.',
}

const advantages = [
  'Higher ampacity than modern wiring of the same gauge due to wire separation',
  'Less likely to be punctured by nails since wires are held away from framing',
  'Porcelain components have an almost unlimited lifespan',
  'Required more skill to install, so was rarely done by unskilled persons',
]

const dangers = [
  'Age of the wiring system',
  'Improper modifications over the years',
  'Building insulation enveloping the wires',
  'No ground wire for three-pronged appliances',
  'Not permitted in electrical upgrades',
]

export default function KnobAndTubePage() {
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
              <span>Knob and Tube Wiring</span>
            </div>
            <h1 className="heading-1 mb-6">Knob and Tube Wiring</h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              This early standardized method of electrical wiring was common in
              North American buildings from about 1880 up until the 1970s. The
              system is considered obsolete and can be an electrical safety
              hazard.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* How It Works */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  How Knob and Tube Wiring Works
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  Knob and Tube wiring consists of insulated copper conductors
                  passing through lumber framing drill-holes via protective
                  porcelain insulating tubes. They are supported along their
                  length by nailed-down porcelain knobs.
                </p>
                <p className="text-dark-600 leading-relaxed">
                  Where wires enter a wiring device, such as a lamp or switch, or
                  were pulled into a wall, they are protected by flexible cloth or
                  rubber insulation called &quot;loom.&quot;
                </p>
              </div>

              {/* Important Info */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-8 w-8 text-amber-500 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-dark-900 text-lg mb-2">
                      Important Information
                    </h3>
                    <p className="text-dark-600 mb-4">
                      Knob and tube wiring is not inherently dangerous. The
                      dangers arise from its age, improper modifications, and
                      situations where building insulation envelops the wires. It
                      has no ground wire and cannot service three-pronged
                      appliances.
                    </p>
                    <p className="text-dark-600">
                      While it is considered obsolete, there is no code that
                      requires its complete removal. However, it is not permitted
                      in any electrical upgrades.
                    </p>
                  </div>
                </div>
              </div>

              {/* Advantages */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  Advantages of Knob and Tube Wiring
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  While obsolete, knob and tube wiring does have some technical
                  advantages that explain why it lasted so long:
                </p>
                <ul className="space-y-3">
                  {advantages.map((advantage) => (
                    <li
                      key={advantage}
                      className="flex items-start gap-3 text-dark-700"
                    >
                      <CheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                      {advantage}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Treatment */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  How We Handle Knob and Tube
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  Knob and tube wiring is treated differently in different
                  jurisdictions. In some areas, it must be removed at all
                  accessible locations, while others merely require that it not be
                  installed in new construction.
                </p>
                <p className="text-dark-600 leading-relaxed">
                  Our experienced electricians can assess your home&apos;s knob
                  and tube wiring, determine what work is necessary, and safely
                  replace or modify the wiring to meet current codes and your
                  safety needs.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="font-semibold text-dark-900 text-lg mb-4">
                  Potential Dangers
                </h3>
                <ul className="space-y-3">
                  {dangers.map((danger) => (
                    <li
                      key={danger}
                      className="flex items-start gap-2 text-dark-700"
                    >
                      <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      {danger}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-dark-50 rounded-xl p-6">
                <h3 className="font-semibold text-dark-900 text-lg mb-4">
                  Our Services
                </h3>
                <ul className="space-y-3">
                  {[
                    'Knob and tube assessment',
                    'Safety inspection',
                    'Partial removal',
                    'Complete replacement',
                    'Modern wiring installation',
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

              <div className="bg-primary-500 rounded-xl p-6 text-white">
                <Cable className="h-10 w-10 mb-4" />
                <h3 className="font-semibold text-lg mb-2">
                  Have Knob and Tube?
                </h3>
                <p className="text-primary-100 mb-4">
                  Contact us for a professional assessment of your home&apos;s
                  wiring.
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
            Browse photos of our knob and tube wiring projects.
          </p>
          <ImageGallery images={images} alt="Knob and tube wiring work" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Concerned About Your Home&apos;s Wiring?</h2>
          <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
            Our licensed electricians have the expertise to assess and address
            knob and tube wiring in your home. Contact us for a free estimate.
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

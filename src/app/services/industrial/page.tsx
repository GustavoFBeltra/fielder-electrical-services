import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Factory, Lightbulb, Wrench, Zap, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Industrial Electrical Services | Fielder Electrical Services',
  description:
    'Professional industrial electrical services in St. Louis. New construction, warehouse lighting, and large machinery wiring.',
}

const industrialServices = [
  {
    title: 'New Industrial Construction',
    description:
      'Complete electrical systems for new industrial facilities and expansions.',
    icon: Factory,
  },
  {
    title: 'Warehouse Lighting',
    description:
      'High-efficiency lighting solutions for warehouses and distribution centers.',
    icon: Lightbulb,
  },
  {
    title: 'Large Machinery Wiring',
    description:
      'Power connections for industrial equipment and manufacturing machinery.',
    icon: Wrench,
  },
  {
    title: 'Power Distribution',
    description:
      'Industrial-grade power distribution systems and upgrades.',
    icon: Zap,
  },
]

const capabilities = [
  'Three-phase power systems',
  '120/208 power configurations',
  '240 Delta power systems',
  '277/480 power installations',
  'Motor control centers',
  'High-voltage work',
  'Emergency power systems',
  'Industrial lighting retrofits',
]

export default function IndustrialServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Industrial Electrical Services</h1>
            <p className="text-xl text-dark-300 leading-relaxed mb-8">
              We have the skills, knowledge and the equipment to handle new
              industrial construction, warehouse lighting and large machinery
              wiring. Our experienced team is ready for your industrial project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:314-773-4955" className="btn-primary">
                <Phone className="h-5 w-5 mr-2" />
                Call for Free Estimate
              </a>
              <Link href="/contact" className="btn-outline">
                Request Quote Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-dark-900 mb-4">
              Industrial Services We Provide
            </h2>
            <p className="text-dark-600 text-lg max-w-2xl mx-auto">
              From new construction to equipment upgrades, we handle all aspects
              of industrial electrical work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrialServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 border border-dark-100 hover:border-primary-200 hover:shadow-lg transition-all"
              >
                <div className="bg-primary-100 text-primary-600 p-4 rounded-xl w-fit mb-4">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-dark-900 text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-dark-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-dark-900 mb-6">
                Our Industrial Capabilities
              </h2>
              <p className="text-dark-600 text-lg leading-relaxed mb-8">
                Our electricians have extensive experience with all types of
                industrial power systems and configurations. We&apos;re equipped
                to handle complex industrial electrical projects of any size.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-center gap-2 text-dark-700"
                  >
                    <CheckCircle className="h-5 w-5 text-primary-500 shrink-0" />
                    {capability}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-dark-900 rounded-2xl p-8 text-white">
              <h3 className="heading-3 mb-6">Why Choose Fielder Industrial?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-400 shrink-0 mt-0.5" />
                  <span>
                    Experienced electricians with industrial specialization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-400 shrink-0 mt-0.5" />
                  <span>
                    We own our heavy equipment - scissor lifts, bucket trucks,
                    trenchers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-400 shrink-0 mt-0.5" />
                  <span>OSHA certified safety practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-400 shrink-0 mt-0.5" />
                  <span>Over 37 years serving St. Louis industry</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-400 shrink-0 mt-0.5" />
                  <span>Free estimates for all industrial projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Industrial Project? Let&apos;s Talk.</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your industrial electrical needs and
            schedule a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:314-773-4955"
              className="btn bg-white text-primary-600 hover:bg-primary-50"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (314) 773-4955
            </a>
            <Link
              href="/contact"
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600"
            >
              Request Quote Online
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone,
  Building2,
  Church,
  Factory,
  Stethoscope,
  UtensilsCrossed,
  Home,
  LampDesk,
  CheckCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Electrical Services | Fielder Electrical Services',
  description:
    'Professional commercial electrical services in St. Louis. Small businesses, churches, restaurants, medical offices, parking lots, and more.',
}

const commercialServices = [
  {
    title: 'Small Business',
    description:
      'Complete electrical solutions for small businesses of all types.',
    icon: Building2,
  },
  {
    title: 'Subdivisions',
    description:
      'Electrical infrastructure for new residential developments.',
    icon: Home,
  },
  {
    title: 'Churches',
    description:
      'Specialized electrical work for worship spaces and facilities.',
    icon: Church,
  },
  {
    title: 'Factories & Plants',
    description:
      'Industrial-grade electrical work for manufacturing facilities.',
    icon: Factory,
  },
  {
    title: 'Medical & Dental Offices',
    description:
      'Code-compliant electrical for healthcare facilities.',
    icon: Stethoscope,
  },
  {
    title: 'Parking Lot Lighting',
    description:
      'Safety and security lighting for commercial parking areas.',
    icon: LampDesk,
  },
  {
    title: 'Restaurants',
    description:
      'Kitchen equipment circuits, lighting, and more for food service.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Retail Spaces',
    description:
      'Display lighting, power distribution, and tenant improvements.',
    icon: Building2,
  },
]

const equipment = [
  'Scissor lifts',
  'Bucket trucks',
  'Trenchers',
  'Heavy-duty equipment',
]

export default function CommercialServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Commercial Electrical Services</h1>
            <p className="text-xl text-dark-300 leading-relaxed mb-8">
              Regardless of the type of business you maintain, Fielder Electrical
              Services has the skilled commercial electricians to meet your needs.
              From commercial construction to general maintenance or special
              projects - we do it all!
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

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-dark-900 mb-4">
              Commercial Services We Provide
            </h2>
            <p className="text-dark-600 text-lg max-w-2xl mx-auto">
              While all our electricians are cross-trained, we have a select few
              who specialize in commercial electrical wiring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commercialServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 border border-dark-100 hover:border-primary-200 hover:shadow-lg transition-all"
              >
                <div className="bg-primary-100 text-primary-600 p-3 rounded-xl w-fit mb-4">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-dark-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-dark-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-dark-900 mb-6">
                We Own Our Equipment
              </h2>
              <p className="text-dark-600 text-lg leading-relaxed mb-6">
                We maintain all of our own heavy duty equipment, which saves all
                our customers from secondary rental fees. This equipment includes:
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {equipment.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-dark-700"
                  >
                    <CheckCircle className="h-5 w-5 text-primary-500" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-dark-600">
                This means cost savings passed directly to you, our valued
                commercial clients.
              </p>
            </div>
            <div className="bg-dark-900 rounded-2xl p-8 text-white">
              <h3 className="heading-3 mb-6">Why Choose Us for Commercial?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-400 shrink-0 mt-0.5" />
                  <span>Specialized commercial electricians on staff</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-400 shrink-0 mt-0.5" />
                  <span>We own all our heavy equipment - no rental markups</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-400 shrink-0 mt-0.5" />
                  <span>Licensed in 20+ municipalities across St. Louis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-400 shrink-0 mt-0.5" />
                  <span>Over 37 years of commercial experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-400 shrink-0 mt-0.5" />
                  <span>Free estimates for all commercial projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Ready to Discuss Your Project?</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today by calling or submit a request online to schedule a
            FREE ESTIMATE for your commercial project.
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

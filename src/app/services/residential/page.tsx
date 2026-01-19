import { Metadata } from 'next'
import Link from 'next/link'
import {
  ChefHat,
  Bath,
  Car,
  Cable,
  Lightbulb,
  Sun,
  Gauge,
  CloudLightning,
  Zap,
  ArrowRight,
  Phone,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Electrical Services | Fielder Electrical Services',
  description:
    'Professional residential electrical services in St. Louis. From kitchen wiring to EV charging stations, electrical panels, and more. Free estimates available.',
}

const services = [
  {
    title: 'Kitchens',
    description:
      'The kitchen is the central hub of your home. We wire integrated kitchens, updated kitchens, appliances, and all types of kitchen lighting.',
    icon: ChefHat,
    href: '/services/residential/kitchens',
    features: ['Appliance circuits', 'Under cabinet lighting', 'Recessed lighting'],
  },
  {
    title: 'Bathrooms',
    description:
      'From changing lighting to adding creature comforts, we can wire any bathroom modification including vanity lights, exhaust fans, heated floors, and more.',
    icon: Bath,
    href: '/services/residential/bathrooms',
    features: ['Vanity lighting', 'Exhaust fans', 'Floor heat', 'GFCI outlets'],
  },
  {
    title: 'EV Charging Stations',
    description:
      'Install a Level 2 home charging station and enjoy the convenience of charging your electric vehicle at home, usually overnight.',
    icon: Car,
    href: '/services/residential/ev-charging',
    features: ['Level 2 chargers', 'Permit assistance', 'Dedicated circuits'],
  },
  {
    title: 'Knob and Tube Wiring',
    description:
      'This obsolete wiring method from 1880-1970s can be a safety hazard. We can safely replace or repair knob and tube wiring in your home.',
    icon: Cable,
    href: '/services/residential/knob-and-tube',
    features: ['Safety assessment', 'Complete removal', 'Modern replacement'],
  },
  {
    title: 'Aluminum Wiring Repairs',
    description:
      'Homes with aluminum wiring are 55 times more likely to have fire hazard conditions. Our qualified electricians can make your home safe.',
    icon: Zap,
    href: '/services/residential/aluminum-wiring',
    features: ['Safety inspection', 'Connection replacement', 'Fire prevention'],
  },
  {
    title: 'Lighting Design',
    description:
      'We provide lighting design services tailored to enhance each home. From recessed lighting to pendants and chandeliers.',
    icon: Lightbulb,
    href: '/services/residential/lighting-design',
    features: ['Custom design', 'All fixture types', 'Dimmer installation'],
  },
  {
    title: 'Outdoor Lighting',
    description:
      'From security lighting to landscape and accent lighting, we can help create the outdoor oasis of your dreams.',
    icon: Sun,
    href: '/services/residential/outdoor-lighting',
    features: ['Security lighting', 'Landscape lighting', 'Deck & pergola'],
  },
  {
    title: 'Electrical Panels',
    description:
      'The electric panel is the most important asset in your electrical system. We can replace fuse boxes and upgrade existing panels.',
    icon: Gauge,
    href: '/services/residential/electrical-panels',
    features: ['Panel upgrades', 'Fuse box replacement', 'Safety inspections'],
  },
  {
    title: 'Service Upgrades',
    description:
      'Older homes often have outdated systems. We specialize in electrical service upgrades to meet current codes.',
    icon: Zap,
    href: '/services/residential/service-upgrades',
    features: ['Meter upgrades', 'Code compliance', 'Capacity increases'],
  },
  {
    title: 'Storm Damage Repairs',
    description:
      'Storms can cause damage to your electrical service. We repair mast damage, entrance cables, and other storm-related issues.',
    icon: CloudLightning,
    href: '/services/residential/storm-damage',
    features: ['Emergency repairs', 'Mast replacement', 'Insurance work'],
  },
]

export default function ResidentialServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Residential Electrical Services</h1>
            <p className="text-xl text-dark-300 leading-relaxed mb-8">
              Fielder Electrical Services, Inc. is one of the top residential
              electrical contractors in the St. Louis area. From new custom homes
              to rehabs and remodels, we handle it all.
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
            <h2 className="heading-2 text-dark-900 mb-4">Our Services</h2>
            <p className="text-dark-600 text-lg max-w-2xl mx-auto">
              We specialize in older and existing homes, providing expert
              electrical services for every room and need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="card group p-6 border border-dark-100 hover:border-primary-200"
              >
                <div className="bg-primary-100 text-primary-600 p-3 rounded-xl w-fit mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-dark-600 mb-4 line-clamp-3">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-dark-500 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 text-dark-900 mb-6">
              What We Can Do For You
            </h2>
            <p className="text-dark-600 text-lg mb-8">
              Our services include replacing outlets or light fixtures to
              electrical service panel and meter upgrades or remodels. We are
              licensed, bonded, and insured in over 20 municipalities across the
              St. Louis area.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl font-bold text-primary-500 mb-2">
                  37+
                </div>
                <p className="text-dark-600">Years of Experience</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl font-bold text-primary-500 mb-2">
                  A+
                </div>
                <p className="text-dark-600">BBB Rating</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl font-bold text-primary-500 mb-2">
                  100%
                </div>
                <p className="text-dark-600">Licensed & Insured</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Ready to Start Your Project?</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate. Our professional electricians
            are ready to help with all your residential electrical needs.
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

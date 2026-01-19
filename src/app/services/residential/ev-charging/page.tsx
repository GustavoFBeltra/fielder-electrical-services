import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, Car, Clock, DollarSign, Zap, Home, TrendingUp } from 'lucide-react'
import ImageGallery from '@/components/ui/ImageGallery'

const images = [
  '/images/ev-charging/AdobeStock_520885095.jpeg',
  '/images/ev-charging/AdobeStock_772485244.jpeg',
]

export const metadata: Metadata = {
  title: 'EV Charging Station Installation | Fielder Electrical Services',
  description:
    'Professional Level 2 EV charging station installation in St. Louis. Home charging stations, permits, and dedicated circuits for electric vehicles.',
}

const benefits = [
  {
    icon: Clock,
    title: 'More Convenient',
    description:
      'An estimated 80% of EV drivers charge at home, usually overnight. Plug in while you sleep and wake up fully charged.',
  },
  {
    icon: DollarSign,
    title: 'Less Expensive',
    description:
      'Charging at home overnight uses lower electricity rates compared to public charging stations during the day.',
  },
  {
    icon: Zap,
    title: 'More Predictable',
    description:
      "No waiting in line at public stations. A Level 2 charger can give you about 250 miles of range overnight.",
  },
  {
    icon: Home,
    title: 'Better for Your Battery',
    description:
      'EV automakers recommend limiting fast charger use. Level 2 home charging is gentler on your battery.',
  },
  {
    icon: TrendingUp,
    title: 'Increases Property Value',
    description:
      'For property owners, EV charging stations attract tenants and increase property value as EV adoption grows.',
  },
]

export default function EVChargingPage() {
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
              <span>EV Charging Stations</span>
            </div>
            <h1 className="heading-1 mb-6">EV Home Charging Stations</h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              You love driving your electric vehicle, but probably don&apos;t
              like searching for or waiting at public charging stations. Install
              an EV charging station at home and enjoy the freedom to charge
              whenever you want.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  What is a Home Charging Station?
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  The home charging station is technically known as the Electric
                  Vehicle Supply Equipment (EVSE). There are three levels of EV
                  charging: Level 1 (slowest), Level 2, and Level 3 (fastest).
                  Home charging stations consist of Level 1 and Level 2.
                </p>
                <p className="text-dark-600 leading-relaxed">
                  It is highly recommended that EV drivers install a Level 2
                  charger rather than rely on the Level 1 (120 Volt) charger that
                  comes with your vehicle. Level 2 charging provides significantly
                  faster charging times.
                </p>
              </div>

              {/* Permits */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  Permits & Installation
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  For most home charging station installations, a permit is
                  required by the local jurisdiction. These permits ensure the
                  electrical code is being followed for your safety and your
                  home&apos;s safety.
                </p>
                <p className="text-dark-600 leading-relaxed mb-6">
                  If you do not have a spare 240V outlet near your garage, a new
                  circuit will need to be installed by an electrician. An
                  electrical circuit consists of the outlet, wire, and breaker.
                  Together, these components safely allow power to flow from your
                  wall through your charger to your EV.
                </p>
                <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
                  <h3 className="font-semibold text-dark-900 mb-2">
                    We Handle the Permits
                  </h3>
                  <p className="text-dark-600">
                    Fielder Electrical Services assists with obtaining the
                    necessary permits and ensures your installation meets all
                    local codes and safety requirements.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-6">
                  5 Reasons to Install a Level 2 Charging Station
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={benefit.title} className="flex gap-4">
                      <div className="bg-primary-100 text-primary-600 p-3 rounded-xl h-fit shrink-0">
                        <benefit.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark-900 mb-2">
                          {index + 1}. {benefit.title}
                        </h3>
                        <p className="text-dark-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Battery Care */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  Battery Care Tips
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  Studies have found that frequent supercharging (Level 3) can
                  degrade an EV battery faster than lower-level chargers. Tesla
                  has even programmed its cars to limit charging speeds if they
                  are supercharged too often.
                </p>
                <p className="text-dark-600 leading-relaxed">
                  It is essential to know your battery type and what is most
                  efficient and effective to extend its life. Not every EV battery
                  can accommodate Level 3 charging, making home Level 2 charging
                  even more valuable.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-dark-50 rounded-xl p-6">
                <h3 className="font-semibold text-dark-900 text-lg mb-4">
                  Our EV Charging Services
                </h3>
                <ul className="space-y-3">
                  {[
                    'Level 2 charger installation',
                    'Dedicated 240V circuit',
                    'Electrical panel evaluation',
                    'Permit acquisition',
                    'Code-compliant installation',
                    'Various charger brands supported',
                    'Residential installations',
                    'Multi-family property installations',
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
                <Car className="h-10 w-10 mb-4" />
                <h3 className="font-semibold text-lg mb-2">
                  Ready to Charge at Home?
                </h3>
                <p className="text-primary-100 mb-4">
                  Contact us for a free estimate on your EV charging station
                  installation.
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
                <h3 className="font-semibold text-lg mb-2">The EV Boom is Here</h3>
                <p className="text-dark-300 mb-4">
                  You&apos;re probably noticing more and more EVs on the roads.
                  Getting an EV charger installed at home allows you to take full
                  advantage of the joy of not stopping for gas.
                </p>
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
            Browse photos of our EV charging station installation projects.
          </p>
          <ImageGallery images={images} alt="EV charging station installation work" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Take Action Today</h2>
          <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
            Regardless of which EV you drive, getting an EV charger installed at
            your home allows you to take full advantage of electric vehicle
            ownership.
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

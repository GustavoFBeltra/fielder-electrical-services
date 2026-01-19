import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle, Gauge, Shield, AlertTriangle } from 'lucide-react'
import ImageGallery from '@/components/ui/ImageGallery'

export const metadata = {
  title: 'Electrical Meter Replacement | Fielder Electrical Services',
  description: 'Professional electrical meter replacement services in St. Louis. Meter base repairs, upgrades, and utility coordination.',
}

const images = [
  '/images/meter-replacement/electrical-meter-install-829x1024-3.webp',
  '/images/meter-replacement/Meter-Replacement-1-829x1024-3.webp',
  '/images/meter-replacement/New-Bypass-Meter.webp',
  '/images/meter-replacement/Old-Style-Ring-Meter.webp',
]

const services = [
  'Meter base replacement',
  'Meter socket upgrades',
  'Weather head replacement',
  'Service entrance repairs',
  'Utility coordination',
  'Permit acquisition',
  'Inspection coordination',
  'Emergency meter repairs',
  '100 to 200 amp upgrades',
  'Code compliance updates',
]

const signs = [
  'Rust or corrosion on the meter base',
  'Burn marks or discoloration',
  'Loose or damaged meter socket',
  'Flickering lights in your home',
  'Buzzing sounds from the meter',
  'Water damage or moisture inside',
  'Outdated equipment (30+ years old)',
  'Utility company requests replacement',
]

export default function MeterReplacementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-primary-400 font-medium mb-4">Residential Services</p>
            <h1 className="heading-1 mb-6">Electrical Meter Replacement</h1>
            <p className="text-xl text-dark-300 mb-8">
              Your electrical meter is the connection between your home and the power
              grid. When it needs replacement, trust our licensed electricians to handle
              the job safely and coordinate with your utility company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:314-773-4955" className="btn-primary">
                <Phone className="h-5 w-5 mr-2" />
                Call (314) 773-4955
              </a>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-dark-900">
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 text-dark-900 mb-6">
                Professional Meter Services
              </h2>
              <p className="text-dark-600 text-lg mb-8">
                Electrical meter replacement requires coordination with your utility
                company and must be performed by a licensed electrician. We handle the
                entire process, from permits to final inspection, ensuring your service
                is restored quickly and safely.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div key={service} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-dark-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-dark-50 rounded-2xl p-8">
                <div className="bg-primary-50 text-primary-500 p-3 rounded-xl w-fit mb-4">
                  <Gauge className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">
                  Meter Base Replacement
                </h3>
                <p className="text-dark-600">
                  The meter base houses your electric meter and connects your home to
                  the utility. We replace damaged or outdated meter bases with new,
                  code-compliant equipment.
                </p>
              </div>

              <div className="bg-dark-50 rounded-2xl p-8">
                <div className="bg-primary-50 text-primary-500 p-3 rounded-xl w-fit mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">
                  Utility Coordination
                </h3>
                <p className="text-dark-600">
                  Meter work requires coordination with Ameren or your local utility.
                  We handle all communication, scheduling, and requirements to ensure
                  a smooth process.
                </p>
              </div>

              <div className="bg-dark-50 rounded-2xl p-8">
                <div className="bg-primary-50 text-primary-500 p-3 rounded-xl w-fit mb-4">
                  <AlertTriangle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">
                  Emergency Service
                </h3>
                <p className="text-dark-600">
                  A damaged meter can leave you without power. We offer prompt service
                  to get your electrical service restored as quickly as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signs Section */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-dark-900 mb-4">
              Signs You Need Meter Replacement
            </h2>
            <p className="text-dark-600 text-lg">
              Watch for these warning signs that indicate your electrical meter or
              meter base may need replacement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {signs.map((sign) => (
              <div
                key={sign}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-dark-100"
              >
                <AlertTriangle className="h-8 w-8 text-primary-500 mx-auto mb-3" />
                <p className="text-dark-700 font-medium">{sign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2 text-dark-900 mb-4 text-center">Our Work</h2>
          <p className="text-dark-600 text-lg mb-10 text-center max-w-2xl mx-auto">
            Browse photos of our meter replacement projects.
          </p>
          <ImageGallery images={images} alt="Meter replacement work" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-dark-900 mb-4">
            Need Meter Replacement?
          </h2>
          <p className="text-dark-600 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your meter replacement project.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Free Estimate
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}

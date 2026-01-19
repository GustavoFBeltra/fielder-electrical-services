import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle, Lightbulb, Plug, Shield } from 'lucide-react'
import ImageGallery from '@/components/ui/ImageGallery'

export const metadata = {
  title: 'Basement Electrical Services | Fielder Electrical Services',
  description: 'Professional basement electrical services in St. Louis. Lighting, outlets, panels, and complete basement finishing electrical work.',
}

const images = [
  '/images/basements/basement-wiring-2.webp',
  '/images/basements/electrical-rough-in-1.webp',
  '/images/basements/elelectrical-wiring-in-basement-1.webp',
  '/images/basements/rough-in-1.webp',
]

const services = [
  'Recessed lighting installation',
  'Outlet and switch installation',
  'Sub-panel installation',
  'Dedicated circuits for appliances',
  'Home theater wiring',
  'Egress lighting',
  'Sump pump circuits',
  'Basement bathroom electrical',
  'Workshop electrical setup',
  'Code-compliant installations',
]

export default function BasementsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-primary-400 font-medium mb-4">Residential Services</p>
            <h1 className="heading-1 mb-6">Basement Electrical Services</h1>
            <p className="text-xl text-dark-300 mb-8">
              Transform your basement into functional living space with professional
              electrical work. From lighting to dedicated circuits, we handle all your
              basement electrical needs.
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
                Complete Basement Electrical Solutions
              </h2>
              <p className="text-dark-600 text-lg mb-8">
                Whether you&apos;re finishing your basement, adding a home office, creating
                an entertainment space, or building a workshop, proper electrical work is
                essential. Our licensed electricians ensure your basement electrical system
                is safe, up to code, and designed for your specific needs.
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
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">
                  Basement Lighting Design
                </h3>
                <p className="text-dark-600">
                  Basements often lack natural light. We design and install lighting
                  solutions that make your basement bright and inviting, including
                  recessed lighting, track lighting, and under-cabinet options.
                </p>
              </div>

              <div className="bg-dark-50 rounded-2xl p-8">
                <div className="bg-primary-50 text-primary-500 p-3 rounded-xl w-fit mb-4">
                  <Plug className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">
                  Dedicated Circuits
                </h3>
                <p className="text-dark-600">
                  Large appliances, home theaters, and workshops require dedicated
                  circuits. We install properly sized circuits to handle your
                  basement&apos;s electrical demands safely.
                </p>
              </div>

              <div className="bg-dark-50 rounded-2xl p-8">
                <div className="bg-primary-50 text-primary-500 p-3 rounded-xl w-fit mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">
                  Code Compliance
                </h3>
                <p className="text-dark-600">
                  All basement electrical work must meet local building codes. Our
                  licensed electricians ensure your installation passes inspection
                  and keeps your family safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <h2 className="heading-2 text-dark-900 mb-4 text-center">Our Work</h2>
          <p className="text-dark-600 text-lg mb-10 text-center max-w-2xl mx-auto">
            Browse photos of our basement electrical projects.
          </p>
          <ImageGallery images={images} alt="Basement electrical work" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-dark-900 mb-4">
            Ready to Finish Your Basement?
          </h2>
          <p className="text-dark-600 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your basement electrical project.
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

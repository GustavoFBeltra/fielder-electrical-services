import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle, Wrench, Car, Zap } from 'lucide-react'
import ImageGallery from '@/components/ui/ImageGallery'

export const metadata = {
  title: 'Garage Electrical Services | Fielder Electrical Services',
  description: 'Professional garage electrical services in St. Louis. Lighting, outlets, EV chargers, and workshop electrical installations.',
}

const images = [
  '/images/garage/Best-Garage-Lighting.webp',
  '/images/garage/Garage-Lighting.webp',
  '/images/garage/Garage-Lighting-Ideas.webp',
  '/images/garage/led-garage-ceiling-lights-photo-9.webp',
]

const services = [
  'Overhead lighting installation',
  'Workbench outlet installation',
  '240V outlet installation',
  'EV charger installation',
  'Sub-panel installation',
  'Motion sensor lighting',
  'Garage door opener wiring',
  'Workshop power setup',
  'Exterior security lighting',
  'Code upgrades and repairs',
]

export default function GaragePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-primary-400 font-medium mb-4">Residential Services</p>
            <h1 className="heading-1 mb-6">Garage Electrical Services</h1>
            <p className="text-xl text-dark-300 mb-8">
              Power up your garage with professional electrical services. From basic
              lighting to complete workshop setups and EV charger installations, we
              do it all.
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
                Complete Garage Electrical Solutions
              </h2>
              <p className="text-dark-600 text-lg mb-8">
                Your garage is more than just a place to park your car. Whether you need
                better lighting, power for tools, or an EV charging station, our licensed
                electricians can transform your garage into a fully functional space.
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
                  <Wrench className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">
                  Workshop Power
                </h3>
                <p className="text-dark-600">
                  Power tools and equipment require adequate electrical capacity. We
                  install dedicated circuits and sub-panels to handle your workshop
                  needs safely and efficiently.
                </p>
              </div>

              <div className="bg-dark-50 rounded-2xl p-8">
                <div className="bg-primary-50 text-primary-500 p-3 rounded-xl w-fit mb-4">
                  <Car className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">
                  EV Charger Installation
                </h3>
                <p className="text-dark-600">
                  Make charging your electric vehicle convenient with a home EV charger.
                  We install Level 2 chargers that can fully charge your vehicle overnight.
                </p>
              </div>

              <div className="bg-dark-50 rounded-2xl p-8">
                <div className="bg-primary-50 text-primary-500 p-3 rounded-xl w-fit mb-4">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">
                  240V Outlets
                </h3>
                <p className="text-dark-600">
                  Many power tools, welders, and appliances require 240V power. Our
                  electricians install 240V outlets safely with the proper circuit
                  protection.
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
            Browse photos of our garage electrical projects.
          </p>
          <ImageGallery images={images} alt="Garage electrical work" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-dark-900 mb-4">
            Ready to Upgrade Your Garage?
          </h2>
          <p className="text-dark-600 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your garage electrical project.
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

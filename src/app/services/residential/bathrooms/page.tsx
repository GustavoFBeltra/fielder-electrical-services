import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, Bath } from 'lucide-react'
import ImageGallery from '@/components/ui/ImageGallery'

export const metadata: Metadata = {
  title: 'Bathroom Electrical Services | Fielder Electrical Services',
  description:
    'Professional bathroom electrical wiring in St. Louis. Vanity lights, exhaust fans, GFCI outlets, floor heat, and more. Free estimates available.',
}

const images = [
  '/images/bathrooms/AdobeStock_322427999_Preview.jpeg',
  '/images/bathrooms/AdobeStock_534004600_Preview.jpeg',
  '/images/bathrooms/Bathrooms-03.webp',
  '/images/bathrooms/Bathrooms-11.webp',
  '/images/bathrooms/Shower-Can-Lighting.webp',
  '/images/bathrooms/Shower-Cans-02.webp',
  '/images/bathrooms/Shower-Cans-06.webp',
  '/images/bathrooms/Varied-Lighting-in-Bathroom.webp',
]

const bathroomServices = [
  'Bathroom vanity lights',
  'Shower can lighting',
  'Towel warmer installation',
  'Dehumidifying or heated mirror',
  'Floor heat wiring',
  'Heated toilet seat circuits',
  'Wall heater installation',
  'Steam shower or sauna wiring',
  'Exhaust fan installation',
  'Heat lamp wiring',
  'LED backlit mirror',
  'GFCI outlet installation',
  'Overhead lighting',
  'Sconce lighting',
]

export default function BathroomsPage() {
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
              <span>Bathrooms</span>
            </div>
            <h1 className="heading-1 mb-6">Bathroom Electrical Services</h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              At Fielder Electrical Services, we specialize in older and existing
              homes. We can modify wiring to enhance an existing bathroom, or wire
              an entirely new one.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  Bathroom Electrical Modifications
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  We can wire any bathroom modification that requires electricity.
                  Want to get rid of that old light fixture? We can do that! From
                  changing lighting to adding other creature comforts, the
                  electricians of Fielder Electrical Services can wire what you
                  want.
                </p>
              </div>

              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  Enhance Your Bathroom
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  We understand that you want to make the most of your home, and
                  enhancements can make a huge difference in the comfort and
                  functionality of your bathroom. This could include overhead,
                  sconce, or vanity lighting, along with GFI outlets and specialty
                  items.
                </p>
                <div className="bg-dark-50 rounded-xl p-6">
                  <h3 className="font-semibold text-dark-900 text-lg mb-4">
                    Popular Bathroom Electrical Upgrades
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-dark-800 mb-2">Lighting</h4>
                      <ul className="space-y-2 text-dark-600">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                          Vanity lighting
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                          Shower recessed lights
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                          LED backlit mirrors
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                          Heat lamps
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-dark-800 mb-2">Comfort</h4>
                      <ul className="space-y-2 text-dark-600">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                          Floor heating
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                          Towel warmers
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                          Heated mirrors
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                          Steam showers
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  Safety First: GFCI Outlets
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed">
                  Bathrooms require GFCI (Ground Fault Circuit Interrupter)
                  outlets for safety. These special outlets protect you from
                  electrical shock in areas where water may be present. We ensure
                  all bathroom electrical work meets current safety codes.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-dark-50 rounded-xl p-6">
                <h3 className="font-semibold text-dark-900 text-lg mb-4">
                  Bathroom Services
                </h3>
                <ul className="space-y-3">
                  {bathroomServices.map((service) => (
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
                <Bath className="h-10 w-10 mb-4" />
                <h3 className="font-semibold text-lg mb-2">
                  Upgrade Your Bathroom
                </h3>
                <p className="text-primary-100 mb-4">
                  Contact us for a free estimate on your bathroom electrical
                  project.
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
                  More Than Bathrooms
                </h3>
                <p className="text-dark-300 mb-4">
                  We wire more than just bathrooms! Visit our residential services
                  page for more information about what we can do in your home.
                </p>
                <Link
                  href="/services/residential"
                  className="text-primary-400 hover:text-primary-300 font-medium"
                >
                  View All Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <h2 className="heading-2 text-dark-900 mb-4 text-center">Our Bathroom Projects</h2>
          <p className="text-dark-600 text-lg mb-10 text-center max-w-2xl mx-auto">
            Browse photos of our bathroom electrical work.
          </p>
          <ImageGallery images={images} alt="Bathroom electrical work" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Questions About Your Bathroom Project?</h2>
          <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
            If you have questions or inquiries, please contact our office or
            submit a request online.
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
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

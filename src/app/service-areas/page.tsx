import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin, CheckCircle, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Service Areas | Fielder Electrical Services',
  description:
    'Fielder Electrical Services serves St. Louis City, St. Louis County, and surrounding areas. Licensed in over 20 municipalities.',
}

const serviceAreas = {
  'Missouri Counties': [
    'St. Louis County',
    'St. Louis City',
    'Franklin County',
    'Jefferson County',
    'St. Charles County',
  ],
  'St. Louis Municipalities': [
    'University City',
    'Webster Groves',
    'Brentwood',
    'Jennings',
    'Kirkwood',
    'Overland',
    'Glendale',
    'Florissant',
    'Ferguson',
    'Ellisville',
    'Arnold',
    'Northwoods',
  ],
  'St. Charles Area': ['St. Peters', 'St. Charles City', 'Washington'],
}

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Licensed Electrician Service Areas</h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              Fielder Electrical Services, Inc. maintains the professional
              licenses required to perform electrical work in much of the St.
              Louis area.
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
                  Choosing a Licensed Contractor
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  Choosing any sort of contractor can be an arduous process. As a
                  consumer, one way you can determine the credibility of any
                  contractor is to verify whether they have the requisite license
                  for your location.
                </p>
                <p className="text-dark-600 leading-relaxed">
                  We are proud to maintain all appropriate licenses and bonding to
                  perform electrical work in the areas listed below.
                </p>
              </div>

              {/* Service Areas Grid */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-6">
                  Areas We Serve
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {Object.entries(serviceAreas).map(([region, areas]) => (
                    <div
                      key={region}
                      className="bg-dark-50 rounded-xl p-6"
                    >
                      <h3 className="font-semibold text-dark-900 mb-4 flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary-500" />
                        {region}
                      </h3>
                      <ul className="space-y-2">
                        {areas.map((area) => (
                          <li
                            key={area}
                            className="text-dark-600 text-sm flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full shrink-0" />
                            {area}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professionalism */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  Our Commitment to Professionalism
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  At Fielder Electrical Services, we believe in operating at the
                  highest levels of professionalism. We are licensed, bonded, and
                  insured, so you can rest assured that your project is in good
                  hands.
                </p>
                <p className="text-dark-600 leading-relaxed">
                  We are accountable not only to our own high standards, but to
                  the specifications set forth in the governing National Electric
                  Code for each county or municipality.
                </p>
              </div>

              {/* Additional Licensing */}
              <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
                <h3 className="font-semibold text-dark-900 text-lg mb-3">
                  Need Service Outside These Areas?
                </h3>
                <p className="text-dark-600 mb-4">
                  We are block licensed and willing to obtain further licenses as
                  needed to best serve our customers. Please inquire with our
                  office directly for more information.
                </p>
                <a
                  href="tel:314-773-4955"
                  className="text-primary-600 font-medium hover:underline"
                >
                  Call (314) 773-4955 to inquire →
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-dark-50 rounded-xl p-6">
                <h3 className="font-semibold text-dark-900 text-lg mb-4">
                  Our Credentials
                </h3>
                <ul className="space-y-3">
                  {[
                    'Licensed Master Electrician',
                    'Fully Bonded',
                    'Fully Insured',
                    'A+ BBB Rating',
                    'OSHA Certified',
                    '37+ Years Experience',
                  ].map((credential) => (
                    <li
                      key={credential}
                      className="flex items-center gap-2 text-dark-700"
                    >
                      <CheckCircle className="h-5 w-5 text-primary-500 shrink-0" />
                      {credential}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-dark-900 rounded-xl p-6 text-white">
                <Shield className="h-10 w-10 text-primary-400 mb-4" />
                <h3 className="font-semibold text-lg mb-2">
                  Licensed & Insured
                </h3>
                <p className="text-dark-300 mb-4">
                  Your protection is our priority. All work is performed by
                  licensed, bonded, and insured professionals.
                </p>
              </div>

              <div className="bg-primary-500 rounded-xl p-6 text-white">
                <h3 className="font-semibold text-lg mb-2">
                  Schedule an Estimate
                </h3>
                <p className="text-primary-100 mb-4">
                  Contact us to schedule a free estimate for your electrical
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
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Ready to Start Your Project?</h2>
          <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for more information about our services in your area
            or to schedule a free estimate.
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

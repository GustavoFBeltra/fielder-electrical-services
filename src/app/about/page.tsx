import { Metadata } from 'next'
import Link from 'next/link'
import {
  CheckCircle,
  Users,
  Award,
  Shield,
  Clock,
  MapPin,
  Phone,
  Heart,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Fielder Electrical Services',
  description:
    'Learn about Fielder Electrical Services - a family owned and operated electrical company serving the St. Louis area since 1987.',
}

const values = [
  {
    icon: Heart,
    title: 'Family Values',
    description:
      'We are a family owned and operated Christian business, treating every customer like family.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'Under the directive of a licensed Master Electrician, all work meets the highest standards.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description:
      'The majority of our team has been with the company for decades, bringing unmatched expertise.',
  },
  {
    icon: Shield,
    title: 'Trust & Integrity',
    description:
      'Licensed, bonded, and insured with an A+ BBB rating. We stand behind our work.',
  },
]

const credentials = [
  'Licensed Master Electrician',
  'Fully Bonded & Insured',
  'A+ BBB Rating',
  'Member of IBEW',
  'OSHA Certified',
  'Local Business Since 1987',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">About Fielder Electrical Services</h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              Since 1987, we&apos;ve been meeting the electrical needs of
              residents and businesses throughout the St. Louis area. Start with
              a company you can count on.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-2 text-dark-900 mb-6">Our Story</h2>
              <div className="prose prose-lg text-dark-600 space-y-6">
                <p>
                  Fielder Electrical Services, Inc. has been meeting the needs of
                  residents & businesses in the St. Louis area since 1987.
                  Over 30+ years of satisfied customers trust us with their
                  electrical needs.
                </p>
                <p>
                  We provide electrical services for both Residential, Commercial
                  and Industrial clients. Our services include replacing outlets
                  or light fixtures to electrical service panel and meter upgrades
                  or remodels.
                </p>
                <p>
                  We are a family owned and operated Christian business. Under the
                  directive of a licensed Master Electrician, all work is
                  completed by our professional electricians. We don&apos;t
                  subcontract work to other parties.
                </p>
                <p>
                  In fact, the majority of our team has been with the company for
                  decades! Additionally, our work is completed with equipment we
                  own - a money saver for our customers.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-dark-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-8 w-8 text-primary-500" />
                  <h3 className="heading-3 text-dark-900">Local Company</h3>
                </div>
                <p className="text-dark-600 mb-6">
                  Our office is in the Hill neighborhood of St. Louis City. We are
                  a local company. All of us live and work in the same areas as
                  our customers.
                </p>
                <p className="text-dark-600 mb-8">
                  Actually, our service area is quite large and includes most of
                  the St. Louis and surrounding communities.
                </p>

                <div className="border-t border-dark-200 pt-6">
                  <h4 className="font-semibold text-dark-900 mb-4">
                    Our Credentials
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {credentials.map((credential) => (
                      <div
                        key={credential}
                        className="flex items-center gap-2 text-dark-700"
                      >
                        <CheckCircle className="h-5 w-5 text-primary-500 shrink-0" />
                        <span className="text-sm">{credential}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-dark-900 mb-4">Our Values</h2>
            <p className="text-dark-600 text-lg max-w-2xl mx-auto">
              What sets Fielder Electrical Services apart from other contractors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-dark-100"
              >
                <div className="bg-primary-100 text-primary-600 p-4 rounded-xl w-fit mx-auto mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-dark-900 text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-dark-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-dark-900 mb-8 text-center">
              Why Fielder Electric?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary-100 text-primary-600 p-2 rounded-lg h-fit shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-900 mb-2">
                      Over 37 Years of Experience
                    </h3>
                    <p className="text-dark-600">
                      With decades of experience, we&apos;ve seen it all and can
                      handle any electrical challenge.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary-100 text-primary-600 p-2 rounded-lg h-fit shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-900 mb-2">
                      No Subcontractors
                    </h3>
                    <p className="text-dark-600">
                      All work is done by our own trained electricians - never
                      subcontracted out.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary-100 text-primary-600 p-2 rounded-lg h-fit shrink-0">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-900 mb-2">
                      Fully Licensed & Insured
                    </h3>
                    <p className="text-dark-600">
                      We maintain all professional licenses required to perform
                      electrical work in the St. Louis area.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary-100 text-primary-600 p-2 rounded-lg h-fit shrink-0">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-900 mb-2">
                      A+ BBB Rating
                    </h3>
                    <p className="text-dark-600">
                      Our commitment to quality and customer service has earned us
                      an excellent rating with the Better Business Bureau.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary-100 text-primary-600 p-2 rounded-lg h-fit shrink-0">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-900 mb-2">
                      Family Owned Since 1987
                    </h3>
                    <p className="text-dark-600">
                      As a family business, we treat every customer&apos;s home or
                      business as if it were our own.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary-100 text-primary-600 p-2 rounded-lg h-fit shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-900 mb-2">
                      Locally Based
                    </h3>
                    <p className="text-dark-600">
                      Located in St. Louis, we live and work in the same
                      communities we serve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">
            We Would Appreciate the Opportunity
          </h2>
          <p className="text-xl text-dark-300 mb-8 max-w-2xl mx-auto">
            Contact our office to schedule an estimate or walk-thru for your next
            project. Get started today by talking to any of our great office
            staff!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:314-773-4955" className="btn-primary text-lg">
              <Phone className="h-5 w-5 mr-2" />
              Call (314) 773-4955
            </a>
            <Link
              href="/contact"
              className="btn border-2 border-white text-white hover:bg-white hover:text-dark-900 text-lg"
            >
              Contact Us Online
            </Link>
          </div>
          <p className="text-dark-400 mt-6">
            Office hours: Monday - Friday, 8am - 5pm
          </p>
        </div>
      </section>
    </>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, AlertTriangle, Gauge } from 'lucide-react'
import ImageGallery from '@/components/ui/ImageGallery'

const images = [
  '/images/electrical-panels/100-to-200-amp-electric-panel-upgrade-1024x1024-1.webp',
  '/images/electrical-panels/Electrical-Panel-Replacement-looped.webp',
  '/images/electrical-panels/Fuse-box-replaced-with-electrical-panel-1024x1024-1.webp',
  '/images/electrical-panels/Replace-Electric-Panel-1024x1024-2.webp',
]

export const metadata: Metadata = {
  title: 'Electrical Panel Upgrades | Fielder Electrical Services',
  description:
    'Professional electrical panel upgrades and replacements in St. Louis. Fuse box replacement, panel upgrades, and safety inspections.',
}

const safetyIssues = [
  'Corrosion',
  'Rust',
  'Burned lug',
  'Double lugging',
  'Burned bus bar',
  'Arcing in panel',
  'Overfusing',
]

const dangerousPanels = [
  'Federal Pacific',
  'Zinsco',
  'Pushmatic',
]

const spaceNeeds = [
  'Dedicated lines for appliances (dishwasher, range, dryer, refrigerator, microwave)',
  'Heating and air conditioning systems',
  'Lighting expansion',
  'Room additions',
  'Outdoor needs (hot tub, landscape lighting)',
  'Finishing basement or attic areas',
  'Electronics systems',
]

export default function ElectricalPanelsPage() {
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
              <span>Electrical Panels</span>
            </div>
            <h1 className="heading-1 mb-6">Electrical Panels</h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              The electric panel directs the flow of electricity throughout your
              home and is the most important asset in your electrical system. We
              can replace fuse boxes and upgrade existing panels.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Why Upgrade */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  Why Upgrade Your Electrical Panel?
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  The two primary motivations to change or upgrade your old fuse
                  box or existing electrical breaker panel are safety and space.
                  These could be independent issues, or one could be causing
                  another.
                </p>
                <p className="text-dark-600 leading-relaxed">
                  Our skilled electricians can wire all of your electrical needs,
                  from replacing a fuse box with an electrical panel to upgrading
                  an existing main breaker service.
                </p>
              </div>

              {/* Safety Section */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  Electric Panel Safety
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  A quality electric panel forms the basis for a safe electrical
                  system. If there are issues in the panel, it can merit safety
                  concerns.
                </p>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-8 w-8 text-red-500 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-900 text-lg mb-2">
                        Dangerous Panel Brands
                      </h3>
                      <p className="text-dark-600 mb-4">
                        If you have a Federal Pacific or Zinsco electrical panel
                        or traditional fuse boxes, you have a potentially
                        dangerous situation in your home.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {dangerousPanels.map((panel) => (
                          <span
                            key={panel}
                            className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {panel}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="font-semibold text-dark-900 text-lg mb-4">
                  Safety Issues That May Indicate Need for Replacement:
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {safetyIssues.map((issue) => (
                    <div
                      key={issue}
                      className="flex items-center gap-2 text-dark-700"
                    >
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      {issue}
                    </div>
                  ))}
                </div>
              </div>

              {/* Space Section */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  Space in the Electric Panel
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  Modern homes have increased electrical demands. Existing or
                  future needs that could merit an electric panel upgrade include:
                </p>
                <ul className="space-y-3">
                  {spaceNeeds.map((need) => (
                    <li
                      key={need}
                      className="flex items-start gap-3 text-dark-700"
                    >
                      <CheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                      {need}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-dark-50 rounded-xl p-6">
                <h3 className="font-semibold text-dark-900 text-lg mb-4">
                  Our Panel Services
                </h3>
                <ul className="space-y-3">
                  {[
                    'Panel safety inspection',
                    'Fuse box replacement',
                    '100 to 200 amp upgrades',
                    'Main breaker replacement',
                    'Sub-panel installation',
                    'Circuit additions',
                    'Code compliance updates',
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

              <div className="bg-dark-900 rounded-xl p-6 text-white">
                <h3 className="font-semibold text-lg mb-4">Example Project</h3>
                <p className="text-dark-300 mb-4">
                  Our electrician replaced a 100 amp Federal Pacific electrical
                  panel with a 200 amp Cutler Hammer electrical panel for improved
                  safety and capacity.
                </p>
              </div>

              <div className="bg-primary-500 rounded-xl p-6 text-white">
                <Gauge className="h-10 w-10 mb-4" />
                <h3 className="font-semibold text-lg mb-2">
                  Concerned About Your Panel?
                </h3>
                <p className="text-primary-100 mb-4">
                  Contact us for a free estimate to evaluate your electrical
                  panel.
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

      {/* Gallery */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <h2 className="heading-2 text-dark-900 mb-4 text-center">Our Work</h2>
          <p className="text-dark-600 text-lg mb-10 text-center max-w-2xl mx-auto">
            Browse photos of our electrical panel projects.
          </p>
          <ImageGallery images={images} alt="Electrical panel work" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">
            Questions About Your Electric Panel?
          </h2>
          <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
            If you have questions or are concerned about the safety of your
            electric panel, contact our office to schedule an estimate.
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

import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, AlertTriangle, CloudLightning } from 'lucide-react'
import ImageGallery from '@/components/ui/ImageGallery'

const images = [
  '/images/storm-damage/2-Family-Meters-Torn.webp',
  '/images/storm-damage/Bent-mast.webp',
  '/images/storm-damage/Broken-Ameren-Pole.webp',
  '/images/storm-damage/Detached-service.webp',
  '/images/storm-damage/Guy-Wires-for-Mast-824x1024-1.webp',
  '/images/storm-damage/Ice-Storm-Damage-to-Electrical-Service.webp',
  '/images/storm-damage/Lightning-Storm-Damage-to-Electric-1.webp',
  '/images/storm-damage/Storm-Damage-to-Meter-01-826x1024-1.webp',
  '/images/storm-damage/Storm-Damage-to-Meter-02-826x1024-1.webp',
  '/images/storm-damage/Utility-vs-Home-Owner-Responsibility.webp',
  '/images/storm-damage/Working-on-Exterior-Service-after-Storm-Damage.webp',
]

export const metadata: Metadata = {
  title: 'Storm Damage Electrical Repairs | Fielder Electrical Services',
  description:
    'Professional storm damage electrical repairs in St. Louis. Emergency repairs, mast replacement, and insurance work.',
}

const homeownerTips = [
  'Report any outages to Ameren UE or your utility provider right away. Same goes for a downed power line - don\'t touch it!',
  'Look for storm damage to your home, including your electrical system. This includes the interior and exterior service.',
  'Check your fuse or breaker panel. If you see a tripped breaker, flip it all the way to the "on" position, then to the "off" position. Do this three times to ensure the circuit is truly reset.',
  'If the breaker will not hold in the "on" position, call us!',
  'If you experience a complete outage, leave a light turned on so you know right away when power is restored.',
  'Check your outside electrical service for damage. Depending on the extent of the storm damage, you may need a Licensed Electrician to complete the repairs.',
]

export default function StormDamagePage() {
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
              <span>Storm Damage</span>
            </div>
            <h1 className="heading-1 mb-6">Storm Damage Electrical Repairs</h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              The St. Louis area experiences storms year round, some of which can
              cause storm damage to your electrical service. We&apos;re here to
              help repair the damage.
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
                  Storm Damage to Electrical Services
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  Over half of the storms in our area occur between May & August.
                  Most of the storm damage we deal with as electricians relates to
                  the exterior meter service. Downed trees or high wind can cause
                  damage to both homeowner and utility equipment.
                </p>
              </div>

              {/* Responsibility */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  Understanding Your Responsibility
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  When storm damage occurs, it&apos;s important to understand what
                  the utility company is responsible for and what falls on the
                  homeowner.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h3 className="font-semibold text-dark-900 mb-3">
                      Utility&apos;s Responsibility
                    </h3>
                    <ul className="space-y-2 text-dark-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        Power lines to your home
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        Transformer
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        Meter itself
                      </li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <h3 className="font-semibold text-dark-900 mb-3">
                      Homeowner&apos;s Responsibility
                    </h3>
                    <ul className="space-y-2 text-dark-600">
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500" />
                        Meter base
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500" />
                        Mast & weatherhead
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500" />
                        Entrance & riser cables
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500" />
                        Grounding system
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* What to Do */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  What Should a Homeowner Do After a Storm?
                </h2>
                <div className="space-y-4">
                  {homeownerTips.map((tip, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-dark-50 rounded-xl p-4"
                    >
                      <span className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold shrink-0">
                        {index + 1}
                      </span>
                      <p className="text-dark-700">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* BBB Advice */}
              <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
                <h3 className="font-semibold text-dark-900 text-lg mb-3">
                  Advice for Homeowners
                </h3>
                <p className="text-dark-600 mb-4">
                  If your home is damaged by a storm, be smart! The St. Louis BBB
                  offers tips for hiring a trustworthy contractor. We maintain an
                  A+ rating with the BBB and encourage customers to think
                  critically when hiring someone.
                </p>
                <ul className="space-y-2 text-dark-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary-500" />
                    Ensure you use a licensed contractor
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary-500" />
                    Find out whether permits are needed
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary-500" />
                    Verify insurance and bonding
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-dark-50 rounded-xl p-6">
                <h3 className="font-semibold text-dark-900 text-lg mb-4">
                  Storm Damage Services
                </h3>
                <ul className="space-y-3">
                  {[
                    'Mast replacement',
                    'Weatherhead repair',
                    'Entrance cable replacement',
                    'Riser cable repair',
                    'Meter base replacement',
                    'Guy wire installation',
                    'Emergency repairs',
                    'Insurance documentation',
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

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <AlertTriangle className="h-8 w-8 text-red-500 mb-3" />
                <h3 className="font-semibold text-dark-900 text-lg mb-2">
                  Storm Damage?
                </h3>
                <p className="text-dark-600 mb-4">
                  If you see damage to your electrical service following a storm,
                  call us right away!
                </p>
              </div>

              <div className="bg-primary-500 rounded-xl p-6 text-white">
                <CloudLightning className="h-10 w-10 mb-4" />
                <h3 className="font-semibold text-lg mb-2">
                  Need Emergency Repairs?
                </h3>
                <p className="text-primary-100 mb-4">
                  Contact us immediately if you have storm damage to your
                  electrical service.
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
            Browse photos of our storm damage repair projects.
          </p>
          <ImageGallery images={images} alt="Storm damage repair work" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Storm Damage? We Can Help!</h2>
          <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today if you&apos;ve experienced storm damage to your
            electrical service. Our licensed electricians are ready to help.
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
              Request Service Online
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

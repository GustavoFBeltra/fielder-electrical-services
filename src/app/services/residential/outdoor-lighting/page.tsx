import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, Sun, Shield, Trees, Lamp } from 'lucide-react'
import ImageGallery from '@/components/ui/ImageGallery'

const images = [
  '/images/outdoor-lighting/Accent-Stairway-Lighting-02-819x1024-1.webp',
  '/images/outdoor-lighting/Accent-Stairway-Lighting-819x1024-1.webp',
  '/images/outdoor-lighting/Deck-Lighting-1024x578-1.webp',
  '/images/outdoor-lighting/Exterior-Lighting-1024x576-1.webp',
  '/images/outdoor-lighting/Flood-Light-on-Photoeye.webp',
  '/images/outdoor-lighting/Landscape-Lighting.webp',
  '/images/outdoor-lighting/Landscape-Lighting-02.webp',
  '/images/outdoor-lighting/Landscape-Lighting-03.webp',
  '/images/outdoor-lighting/LED-Double-Flood.webp',
  '/images/outdoor-lighting/Outdoor-Lighting-on-Deck.webp',
  '/images/outdoor-lighting/Pergola-Light-and-Fan.webp',
  '/images/outdoor-lighting/Post-Light-01.webp',
  '/images/outdoor-lighting/Post-Light-02.webp',
  '/images/outdoor-lighting/Rooftop-Deck-Outdoor-Lighting.webp',
  '/images/outdoor-lighting/Sconce-Accent-Lighting-819x1024-1.webp',
]

export const metadata: Metadata = {
  title: 'Outdoor Lighting Services | Fielder Electrical Services',
  description:
    'Professional outdoor lighting installation in St. Louis. Security lighting, landscape lighting, deck lighting, and more.',
}

const lightingTypes = [
  {
    title: 'Security Lighting',
    icon: Shield,
    description:
      'A well-lit home is a deterrent for unwelcome visitors. Security lights can be controlled by switches, timers, motion sensors, or photo sensors.',
  },
  {
    title: 'Landscape Lighting',
    icon: Trees,
    description:
      'Highlight architectural plants and trees while maintaining ambient light. We do uplighting, downlighting, and everything in between.',
  },
  {
    title: 'Post Lighting',
    icon: Lamp,
    description:
      'Illuminate pathways, driveways, and garden areas. Post lights eliminate dark corners and add curb appeal.',
  },
  {
    title: 'Accent Lighting',
    icon: Sun,
    description:
      'Highlight important features of your home including landscape elements, stairways, and architectural details.',
  },
]

export default function OutdoorLightingPage() {
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
              <span>Outdoor Lighting</span>
            </div>
            <h1 className="heading-1 mb-6">Outdoor Lighting</h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              Fielder Electrical Services can wire all your outdoor lighting
              needs. From simple motion-activated spotlights to elaborate lighting
              design, we can help create the outdoor oasis of your dreams.
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
                  Transform Your Outdoor Space
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  Outdoor lighting can be a huge asset to any home or business.
                  The electricians of Fielder Electrical Services can do it all -
                  from the simple light to more complex lighting designs.
                </p>
                <p className="text-dark-600 leading-relaxed">
                  Whether you want to illuminate your outside oasis or provide
                  convenience lighting in your most travelled pathways, we can
                  wire that!
                </p>
              </div>

              {/* Lighting Types */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-6">
                  Types of Outdoor Lighting
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {lightingTypes.map((type) => (
                    <div
                      key={type.title}
                      className="bg-dark-50 rounded-xl p-6"
                    >
                      <type.icon className="h-8 w-8 text-primary-500 mb-3" />
                      <h3 className="font-semibold text-dark-900 mb-2">
                        {type.title}
                      </h3>
                      <p className="text-dark-600 text-sm">{type.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deck & Pergola */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  Deck & Pergola Lighting
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  Whether it&apos;s accent lighting or something bigger, we can
                  wire the outdoor lighting on your deck. We&apos;ve installed
                  accent lighting around hand rails, wired GFI outlets for outdoor
                  entertaining, and more.
                </p>
                <p className="text-dark-600 leading-relaxed">
                  We have wired lighting and other electrical needs not only in
                  pergolas, but also for gazebos and other outdoor structures.
                </p>
              </div>

              {/* Camera Installation */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  Security Camera Wiring
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed">
                  In addition to security lighting, we can wire for camera
                  installations (cameras provided and programmed by customer).
                  Outdoor cameras add a measure of security while being
                  functionally convenient. They are most commonly located near
                  entrances or parking areas.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-dark-50 rounded-xl p-6">
                <h3 className="font-semibold text-dark-900 text-lg mb-4">
                  Outdoor Services
                </h3>
                <ul className="space-y-3">
                  {[
                    'Security lighting',
                    'Motion sensor lights',
                    'Landscape lighting',
                    'Pathway lights',
                    'Post lighting',
                    'Deck lighting',
                    'Pergola & gazebo wiring',
                    'Outdoor GFI outlets',
                    'Camera wiring',
                    'Dusk-to-dawn lighting',
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
                <Sun className="h-10 w-10 mb-4" />
                <h3 className="font-semibold text-lg mb-2">
                  Illuminate Your Outdoors
                </h3>
                <p className="text-primary-100 mb-4">
                  Contact us for a free estimate on your outdoor lighting project.
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
                <h3 className="font-semibold text-lg mb-2">Featured Project</h3>
                <p className="text-dark-300 mb-4">
                  A rooftop deck in Lafayette Square features accent lighting
                  around the hand rail, plus GFI outlets for entertainment
                  equipment - all wired by Fielder Electrical Services.
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
            Browse photos of our outdoor lighting projects.
          </p>
          <ImageGallery images={images} alt="Outdoor lighting work" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Ready to Transform Your Outdoor Space?</h2>
          <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your outdoor lighting project.
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

import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, Lightbulb, Plug, ChefHat } from 'lucide-react'
import ImageGallery from '@/components/ui/ImageGallery'

export const metadata: Metadata = {
  title: 'Kitchen Electrical Services | Fielder Electrical Services',
  description:
    'Professional kitchen electrical wiring in St. Louis. Appliance circuits, under cabinet lighting, recessed lighting, and complete kitchen remodels.',
}

const images = [
  '/images/kitchen/AdobeStock_249139347_Preview.jpeg',
  '/images/kitchen/AdobeStock_305524509.jpeg',
  '/images/kitchen/Butler-Pantry-Ice-Maker-Wine-chiller-1.webp',
  '/images/kitchen/Integrated-05-1024x819-1.webp',
  '/images/kitchen/Integrated-Kitchen-02-1024x819-1.webp',
  '/images/kitchen/Integrated-Kitchen-03-1024x818-1.webp',
  '/images/kitchen/Integrated-Kitchen-04-1024x819-1.webp',
  '/images/kitchen/Kitchen-Lighting-01-1-1024x818-1.webp',
  '/images/kitchen/Kitchen-Lighting-02-1-1024x819-1.webp',
  '/images/kitchen/Kitchen-Lighting-03-1024x819-1.webp',
  '/images/kitchen/New-Appliances.webp',
]

const kitchenServices = [
  'Dedicated appliance circuits',
  'Under cabinet LED lighting',
  'Recessed lighting installation',
  'Pendant lighting',
  'Island outlet installation',
  'Dishwasher wiring',
  'Microwave dedicated circuits',
  'Range hood wiring',
  'Electric range connections',
  'Wine chiller circuits',
  'Ice maker connections',
  'GFCI outlet upgrades',
]

const lightingTypes = [
  {
    title: 'Ambient Lighting',
    description:
      'Recessed lights, chandeliers, or track lighting provide overall illumination for your kitchen.',
  },
  {
    title: 'Task Lighting',
    description:
      'Pendant lights or under cabinet lights are ideal for food prep areas where focused light is needed.',
  },
  {
    title: 'Accent Lighting',
    description:
      'Under cabinet and inside cabinet lighting adds visual interest and highlights your kitchen features.',
  },
]

export default function KitchensPage() {
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
              <span>Kitchens</span>
            </div>
            <h1 className="heading-1 mb-6">Kitchen Electrical Services</h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              The kitchen is commonly the central hub for gathering in the home.
              From integrated kitchens to complete remodels, we provide expert
              electrical wiring for every aspect of your kitchen.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Integrated Kitchen */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  The Integrated Kitchen
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  The busy nature of contemporary life demands that kitchens serve
                  as a living space as well as a place of meal preparation. The
                  functional kitchen of today has a designated cooking space
                  integrated with casual dining and is often open to adjacent
                  rooms.
                </p>
                <p className="text-dark-600 leading-relaxed">
                  The cooking area is open to dining areas and can include
                  entertainment features such as a television. We have extensive
                  experience wiring these modern, integrated kitchen designs.
                </p>
              </div>

              {/* Updated Kitchen */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  The Updated Kitchen
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  Realtors will tell you an updated kitchen is a major selling
                  point of a home. Factors such as size, location, and
                  functionality impact a home&apos;s resale value.
                </p>
                <p className="text-dark-600 leading-relaxed">
                  The National Association of Realtors demonstrates that the top
                  home improvement project resulting in a significant return on
                  investment is a kitchen remodel. Let us help you increase your
                  home&apos;s value with proper electrical work.
                </p>
              </div>

              {/* Appliances */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">
                  Kitchen Appliances
                </h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  Approximately 80% of kitchen upgrades feature new appliances.
                  The most frequently added appliances are dishwashers and
                  microwaves, both of which require their own dedicated electrical
                  circuits.
                </p>
                <p className="text-dark-600 leading-relaxed mb-6">
                  We have wired new separate cooktops, secondary ovens, wine
                  chillers, ice makers, and more. Depending on the needs of your
                  household, the addition of new circuits may require an
                  electrical service upgrade.
                </p>
              </div>

              {/* Lighting */}
              <div>
                <h2 className="heading-2 text-dark-900 mb-4">Kitchen Lighting</h2>
                <p className="text-dark-600 text-lg leading-relaxed mb-6">
                  Lighting is an integral part of all kitchens. More than 50% of
                  all renovations include three different types of lighting:
                </p>
                <div className="grid sm:grid-cols-3 gap-6">
                  {lightingTypes.map((type) => (
                    <div
                      key={type.title}
                      className="bg-dark-50 rounded-xl p-6"
                    >
                      <Lightbulb className="h-8 w-8 text-primary-500 mb-3" />
                      <h3 className="font-semibold text-dark-900 mb-2">
                        {type.title}
                      </h3>
                      <p className="text-dark-600 text-sm">{type.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-dark-50 rounded-xl p-6">
                <h3 className="font-semibold text-dark-900 text-lg mb-4">
                  Kitchen Services We Provide
                </h3>
                <ul className="space-y-3">
                  {kitchenServices.map((service) => (
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
                <ChefHat className="h-10 w-10 mb-4" />
                <h3 className="font-semibold text-lg mb-2">
                  Ready to Update Your Kitchen?
                </h3>
                <p className="text-primary-100 mb-4">
                  Contact us for a free estimate on your kitchen electrical
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

      {/* Gallery */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <h2 className="heading-2 text-dark-900 mb-4 text-center">Our Kitchen Projects</h2>
          <p className="text-dark-600 text-lg mb-10 text-center max-w-2xl mx-auto">
            Browse photos of our kitchen electrical work.
          </p>
          <ImageGallery images={images} alt="Kitchen electrical work" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Get Started on Your Kitchen Project</h2>
          <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
            Whether you&apos;re planning a complete kitchen remodel or just need
            a few updates, our licensed electricians are here to help.
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

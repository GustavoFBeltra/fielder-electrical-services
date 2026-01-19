'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  Home,
  Building2,
  Factory,
  ChefHat,
  Bath,
  Car,
  Cable,
  Warehouse,
  Wrench,
  Phone,
  CheckCircle,
  Star,
  Users,
  Award,
  Clock,
  ArrowRight,
  Zap,
  Shield,
  ThumbsUp,
} from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const mainServices = [
  {
    title: 'Residential',
    description:
      'Fielder Electrical Services, Inc. is one of the top residential electrical contractors in the St. Louis area, including new custom homes to rehabs and remodels.',
    icon: Home,
    href: '/services/residential',
  },
  {
    title: 'Commercial',
    description:
      'We have wired everything from churches to restaurants to medical offices and much more in between. Contact us today for a free estimate.',
    icon: Building2,
    href: '/services/commercial',
  },
  {
    title: 'Industrial',
    description:
      'We have the skills, knowledge and the equipment to handle new industrial construction, warehouse lighting and large machinery wiring.',
    icon: Factory,
    href: '/services/industrial',
  },
]

const specialtyServices = [
  { name: 'Kitchens', icon: ChefHat, href: '/services/residential/kitchens' },
  { name: 'Bathrooms', icon: Bath, href: '/services/residential/bathrooms' },
  { name: 'Basements', icon: Warehouse, href: '/services/residential/basements' },
  { name: 'Garages', icon: Wrench, href: '/services/residential/garage' },
  { name: 'EV Charging', icon: Car, href: '/services/residential/ev-charging' },
  { name: 'Knob & Tube', icon: Cable, href: '/services/residential/knob-and-tube' },
]

const testimonials = [
  {
    quote:
      'Fielder did our electrical work in our 100 year old Webster Groves home. They were friendly, efficient, the service was good, and in multiple jobs I\'ve had done, I always found the price very reasonable.',
    author: 'Susan B.',
    location: 'Webster Groves',
  },
  {
    quote:
      'I\'ve been struggling with some inadequate wiring in my garage for over 20 years. Fielder Electric came out and installed a new switch. My daughter has used Fielder Electric to remove some old knob and tube wiring and replace with new wiring. They did a superb job.',
    author: 'Dennis L.',
    location: 'St. Louis',
  },
  {
    quote:
      'I have been very pleased with the service I received from Fielder Electric. The work was completed on time and with excellent craftsmanship. I will definitely be calling you for my next electrical project!',
    author: 'Ben Z.',
    location: 'St. Louis',
  },
  {
    quote:
      'Matt is a pro and very knowledgeable with some great suggestions. He promised and delivered on time.',
    author: 'Christy B.',
    location: 'St. Louis',
  },
]

const stats = [
  { value: 37, suffix: '+', label: 'Years of Service', icon: Clock },
  { value: 10000, suffix: '+', label: 'Projects Completed', icon: CheckCircle },
  { value: 'A+', label: 'BBB Rating', icon: Award, isText: true },
  { value: 20, suffix: '+', label: 'Service Areas', icon: Users },
]

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Family Owned & Operated',
    description:
      'We are a family owned and operated Christian business with decades of experience serving the community.',
  },
  {
    icon: Award,
    title: 'Licensed Master Electrician',
    description:
      'Under the directive of a licensed Master Electrician, all work is completed by our professional electricians. We don\'t subcontract work.',
  },
  {
    icon: ThumbsUp,
    title: 'Experienced Team',
    description:
      'The majority of our team has been with the company for decades. We own all our equipment - a money saver for customers.',
  },
  {
    icon: Zap,
    title: 'Local Company',
    description:
      'Our office is in the Hill neighborhood of St. Louis City. All of us live and work in the same areas as our customers.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50/50 to-transparent" />

        {/* Animated background shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

        <div className="container-custom relative py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedSection animation="fade-down" delay={0}>
                <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-500 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary-100">
                  <Star className="h-4 w-4 fill-primary-500" />
                  Trusted St. Louis Electricians Since 1987
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={100}>
                <h1 className="heading-1 text-dark-900 mb-6">
                  Professional Electrical Services You Can{' '}
                  <span className="text-primary-500 relative">
                    Count On
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 200 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 10C50 4 150 4 198 10"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className="text-primary-300"
                      />
                    </svg>
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <p className="text-xl text-dark-600 mb-8 leading-relaxed">
                  Family owned and operated, Fielder Electrical Services has been
                  meeting the needs of residents and businesses in the St. Louis area
                  for over 37 years. Licensed, bonded, and insured.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:314-773-4955" className="btn-primary text-lg group">
                    <Phone className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                    Call (314) 773-4955
                  </a>
                  <Link href="/contact" className="btn-outline text-lg group">
                    Request a Free Quote
                    <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="scale" delay={400} className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-500/10 rounded-full blur-3xl scale-150" />
                <Image
                  src="/logo.png"
                  alt="Fielder Electrical Services"
                  width={800}
                  height={240}
                  className="w-auto h-[500px] relative z-10 animate-float"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-dark-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-transparent to-primary-900/20" />
          <div className="container-custom py-10 relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <AnimatedSection
                  key={stat.label}
                  animation="fade-up"
                  delay={index * 100}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <stat.icon className="h-6 w-6 text-primary-400" />
                    <span className="text-3xl md:text-4xl font-bold text-white">
                      {stat.isText ? (
                        stat.value
                      ) : (
                        <AnimatedCounter
                          end={stat.value as number}
                          suffix={stat.suffix || ''}
                          duration={2000}
                        />
                      )}
                    </span>
                  </div>
                  <p className="text-dark-400 text-sm">{stat.label}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="heading-2 text-dark-900 mb-4">Our Services</h2>
            <p className="text-dark-600 text-lg max-w-2xl mx-auto">
              From residential homes to commercial buildings and industrial
              facilities, we provide comprehensive electrical services across the
              St. Louis area.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <AnimatedSection
                key={service.title}
                animation="fade-up"
                delay={index * 150}
              >
                <Link
                  href={service.href}
                  className="card group p-8 border border-dark-100 hover:border-primary-200 block h-full"
                >
                  <div className="bg-primary-50 text-primary-500 p-4 rounded-xl w-fit mb-6 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="heading-3 text-dark-900 mb-4">{service.title}</h3>
                  <p className="text-dark-600 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary-500 font-semibold mt-6 group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="heading-2 text-dark-900 mb-4">
              Specialty Services
            </h2>
            <p className="text-dark-600 text-lg">
              Expert solutions for every area of your home
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specialtyServices.map((service, index) => (
              <AnimatedSection
                key={service.name}
                animation="scale"
                delay={index * 75}
              >
                <Link
                  href={service.href}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-dark-100 block group"
                >
                  <div className="bg-primary-50 text-primary-500 p-3 rounded-lg w-fit mx-auto mb-4 transition-all duration-300 group-hover:bg-primary-500 group-hover:text-white group-hover:scale-110">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <span className="font-semibold text-dark-800 group-hover:text-primary-500 transition-colors">
                    {service.name}
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Fielder Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedSection animation="fade-right">
                <h2 className="heading-2 text-dark-900 mb-6">
                  Why Choose Fielder Electric?
                </h2>
                <p className="text-dark-600 text-lg mb-10 leading-relaxed">
                  Fielder Electrical Services, Inc. has been meeting the needs of
                  residents & businesses in the St. Louis area since 1987. Start
                  with a company you can count on!
                </p>
              </AnimatedSection>

              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <AnimatedSection
                    key={item.title}
                    animation="fade-right"
                    delay={index * 100}
                  >
                    <div className="flex gap-4 group">
                      <div className="bg-primary-50 text-primary-500 p-3 rounded-xl h-fit transition-all duration-300 group-hover:bg-primary-500 group-hover:text-white group-hover:scale-110">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark-900 mb-1 text-lg">
                          {item.title}
                        </h3>
                        <p className="text-dark-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <AnimatedSection animation="fade-left" delay={200}>
              <div className="bg-dark-900 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-transparent" />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

                <div className="relative">
                  <h3 className="heading-3 mb-6">Get Started Today</h3>
                  <p className="text-dark-300 mb-8 leading-relaxed">
                    We would appreciate the opportunity to meet all your electrical
                    needs. Contact our office to schedule an estimate or walk-thru
                    for your next project.
                  </p>

                  <div className="space-y-4 mb-8">
                    <a
                      href="tel:314-773-4955"
                      className="flex items-center gap-3 text-xl hover:text-primary-400 transition-colors group/phone"
                    >
                      <div className="bg-primary-500/20 p-2 rounded-lg group-hover/phone:bg-primary-500 transition-colors">
                        <Phone className="h-5 w-5 text-primary-400 group-hover/phone:text-white" />
                      </div>
                      (314) 773-4955
                    </a>
                    <p className="text-dark-400 text-sm pl-12">
                      Office hours: Monday - Friday, 8am - 5pm
                    </p>
                  </div>

                  <Link href="/contact" className="btn-primary w-full group/btn">
                    Request a Free Estimate
                    <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="heading-2 text-dark-900 mb-4">
              What Our Customers Are Saying
            </h2>
            <p className="text-dark-600 text-lg">
              Over 30+ years of satisfied customers in the St. Louis area
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-dark-100 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-primary-500 text-primary-500 transition-transform group-hover:scale-110"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-dark-700 leading-relaxed mb-6 italic text-lg">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-50 text-primary-500 p-2 rounded-full group-hover:bg-primary-500 group-hover:text-white transition-colors">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark-900">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-dark-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

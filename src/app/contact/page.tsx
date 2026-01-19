'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send to a backend
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Contact Us</h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              We would appreciate the opportunity to meet all your electrical
              needs. Contact our office to schedule an estimate or walk-thru for
              your next project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-2 text-dark-900 mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-dark-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-dark-600 mb-4">
                    Your message has been received. We&apos;ll get back to you
                    shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormState({ name: '', email: '', phone: '', message: '' })
                    }}
                    className="text-primary-600 font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-dark-700 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-dark-700 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-dark-700 mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        placeholder="(314) 555-1234"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-dark-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-dark-50 rounded-xl p-8">
                <h3 className="heading-3 text-dark-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 text-primary-600 p-3 rounded-lg shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-900 mb-1">Address</h4>
                      <p className="text-dark-600">
                        1827 S. Kingshighway Blvd.
                        <br />
                        St. Louis, Missouri 63110
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 text-primary-600 p-3 rounded-lg shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-900 mb-1">Phone</h4>
                      <a
                        href="tel:314-773-4955"
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        (314) 773-4955
                      </a>
                      <p className="text-dark-500 text-sm mt-1">
                        Fax: (314) 773-5185
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 text-primary-600 p-3 rounded-lg shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-900 mb-1">Email</h4>
                      <a
                        href="mailto:info@fielderstl.com"
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        info@fielderstl.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 text-primary-600 p-3 rounded-lg shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-900 mb-1">
                        Office Hours
                      </h4>
                      <p className="text-dark-600">
                        Monday - Friday
                        <br />
                        8:00 AM - 5:00 PM
                      </p>
                      <p className="text-dark-500 text-sm mt-1">Closed Holidays</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-dark-100 rounded-xl overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.0669772!2d-90.26525692359797!3d38.60988997175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b4a6e1c1c1c1%3A0x1c1c1c1c1c1c1c1c!2s1827%20S%20Kingshighway%20Blvd%2C%20St.%20Louis%2C%20MO%2063110!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fielder Electrical Services Location"
                />
              </div>

              <div className="bg-primary-500 rounded-xl p-6 text-white">
                <h3 className="font-semibold text-lg mb-2">
                  Need an Estimate?
                </h3>
                <p className="text-primary-100 mb-4">
                  If you are scheduled for an estimate, we require a
                  decision-maker to be on-site to discuss the project scope.
                </p>
                <Link
                  href="/service-areas"
                  className="text-white font-medium hover:underline"
                >
                  View our service areas →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

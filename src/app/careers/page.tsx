'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Send, CheckCircle, Briefcase } from 'lucide-react'

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Join Our Team</h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              Fielder Electrical Services is always looking for skilled
              electricians to join our team. We&apos;ve been serving the St.
              Louis area since 1987.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Application Form */}
            <div className="lg:col-span-2">
              <h2 className="heading-2 text-dark-900 mb-6">
                Employment Application
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-dark-900 mb-2">
                    Application Received!
                  </h3>
                  <p className="text-dark-600 mb-4">
                    Thank you for your interest in joining Fielder Electrical
                    Services. We&apos;ll review your application and contact you
                    if there&apos;s a fit.
                  </p>
                  <Link href="/" className="text-primary-600 font-medium hover:underline">
                    Return to Home
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="bg-dark-50 rounded-xl p-6">
                    <h3 className="font-semibold text-dark-900 mb-4">
                      Personal Information
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-dark-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-dark-700 mb-2">
                          Address *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                          placeholder="Street address, city, state, zip"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-700 mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                          placeholder="(314) 555-1234"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Position */}
                  <div className="bg-dark-50 rounded-xl p-6">
                    <h3 className="font-semibold text-dark-900 mb-4">
                      Position Information
                    </h3>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">
                        Position Applying For *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none bg-white"
                      >
                        <option value="">Select a position</option>
                        <option value="journeyman">Journeyman Electrician</option>
                        <option value="apprentice">Electrical Apprentice</option>
                      </select>
                    </div>
                  </div>

                  {/* Qualifications */}
                  <div className="bg-dark-50 rounded-xl p-6">
                    <h3 className="font-semibold text-dark-900 mb-4">
                      Qualifications
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          label: 'Can you drive a commercial vehicle?',
                          name: 'commercial_vehicle',
                        },
                        {
                          label: 'Do you have a commercial driver\'s license?',
                          name: 'cdl',
                        },
                        {
                          label: 'Can you pass a background check?',
                          name: 'background',
                        },
                        {
                          label: 'Can you pass a drug/alcohol test?',
                          name: 'drug_test',
                        },
                        { label: 'Can you lift 50lbs or more?', name: 'lift' },
                        {
                          label: 'Do you have OSHA certification?',
                          name: 'osha',
                        },
                        {
                          label: 'Do you have formal electrical education?',
                          name: 'education',
                        },
                        { label: 'Do you have a Journeyman card?', name: 'journeyman' },
                      ].map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center justify-between"
                        >
                          <span className="text-dark-700">{item.label}</span>
                          <div className="flex gap-4">
                            <label className="flex items-center gap-2">
                              <input
                                type="radio"
                                name={item.name}
                                value="yes"
                                className="text-primary-500 focus:ring-primary-500"
                              />
                              <span className="text-sm text-dark-600">Yes</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input
                                type="radio"
                                name={item.name}
                                value="no"
                                className="text-primary-500 focus:ring-primary-500"
                              />
                              <span className="text-sm text-dark-600">No</span>
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="bg-dark-50 rounded-xl p-6">
                    <h3 className="font-semibold text-dark-900 mb-4">
                      Experience
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-dark-700 mb-2">
                          Have you worked with three-phase power, 120/208 power,
                          240 Delta Power and 277/480 power?
                        </label>
                        <textarea
                          rows={3}
                          className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none"
                          placeholder="Please provide details..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-700 mb-2">
                          Describe your work personality in 3 words
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                          placeholder="e.g., friendly, hardworking, reliable"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-700 mb-2">
                          Additional Information
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none"
                          placeholder="Any additional information you'd like to share..."
                        />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn-primary">
                    <Send className="h-5 w-5 mr-2" />
                    Submit Application
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-dark-50 rounded-xl p-6">
                <Briefcase className="h-10 w-10 text-primary-500 mb-4" />
                <h3 className="font-semibold text-dark-900 text-lg mb-4">
                  Why Work With Us?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Family-owned company since 1987',
                    'Stable, long-term employment',
                    'Experienced team of professionals',
                    'Diverse project types',
                    'St. Louis area based',
                    'All equipment provided',
                  ].map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-dark-700"
                    >
                      <CheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary-500 rounded-xl p-6 text-white">
                <h3 className="font-semibold text-lg mb-2">Questions?</h3>
                <p className="text-primary-100 mb-4">
                  Contact our office if you have any questions about employment
                  opportunities.
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
    </>
  )
}

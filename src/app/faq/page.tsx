'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, ChevronDown, HelpCircle } from 'lucide-react'
import clsx from 'clsx'

const faqs = [
  {
    question: 'How do I reset a tripped breaker?',
    answer:
      'If you\'ve lost power to a portion of your home, head to your electrical panel and find the breaker labeled for that space. If your breakers aren\'t labeled, examine the breakers and find one with a switch resting halfway between the ON and OFF zones. Once located, flip the breaker switch to the OFF position, then to the ON position. Flip three (3) times consecutively (OFF, ON, OFF, ON, OFF, ON) to manually reset the breaker. If this doesn\'t solve the problem, you may have a more serious issue than an overloaded circuit and should call an electrician for troubleshooting.',
  },
  {
    question: 'Why do I only have partial power in my home?',
    answer:
      'If you find there are no tripped breakers or GFCIs, this may be due to a "leg down." The electrical utility company will typically have three (3) lines coming into your home and if one of those legs becomes loose or disconnected, it can have the effect of partial outage in your home. The utility can come out and assess the issue and if it is a problem on their end, they may take care of that without charge.',
  },
  {
    question: 'Why has this light stopped working?',
    answer:
      'Start with the simplest solution first – if the fixture is plugged into a receptacle, and it is a GFCI outlet, test and reset it. Second, try a new bulb in the light fixture. Even new bulbs are sometimes damaged, so try two. If that doesn\'t work, ensure that the breaker for that circuit is in the ON position. If none of that works, you may have a dead receptacle, broken fixture, or more serious electrical issues at hand.',
  },
  {
    question: 'How do I reset or test a GFCI receptacle?',
    answer:
      'GFCI stands for Ground Fault Circuit Interrupter. These outlets look slightly different than other outlets; there are two small buttons ("TEST" and "RESET") on the face. You\'ll typically find them in kitchens, bathrooms, garages, and on the outside of the house – all areas where water may be present. If a GFCI outlet isn\'t working, it is likely doing its job and protecting you from electrical shock. Push the RESET button - it should make an audible click. To test: push the TEST button, then plug in a device. If the device doesn\'t work when in TEST mode, your GFCI is working correctly.',
  },
  {
    question: 'Do I need to be home during a scheduled visit?',
    answer:
      'If you are scheduled for an estimate, we require a decision-maker to be on-site to discuss the project scope. We can perform most scheduled work without someone on-site, as long as entry is provided with a code or key in advance.',
  },
  {
    question: 'Is my electrical panel a fire hazard?',
    answer:
      'If you have a Federal Pacific or Zinsco electrical panel or traditional fuse boxes, you have a potentially dangerous situation in your home. Please contact (314) 773-4955 for a free estimate.',
  },
  {
    question: 'What is a "short circuit?"',
    answer:
      'A short circuit (often called a "short") occurs when the wire carrying the electrical current (the "hot wire," usually black in color) has contact with the grounded conductor (the "neutral," usually white in color) or the equipment ground (the "bare copper," usually green). When a short happens, it generates an overabundance of heat. If left unchecked, it can create sparks resulting in an electrical fire. In the event of a short, your electrical panel will cut the power to the circuit.',
  },
  {
    question: 'Are a fuse and a circuit breaker different?',
    answer:
      'They perform the same function but in different ways. Both fuses and breakers end the flow of electricity to prevent a problem. Circuit breakers can be reset each time you trip them, but fuses must be replaced. For this specific reason, circuit breakers are more often used, but you can still find fuse boxes in many older homes.',
  },
  {
    question:
      'My refrigerator isn\'t working. I checked the circuit breaker, but it wasn\'t tripped. What\'s the problem?',
    answer:
      'If you have an older home (1981 or prior), chances are you have two circuits for your kitchen which give power to your appliances. If one hasn\'t tripped, the other most likely has. But if you\'ve checked both, there may be a wiring issue, and you should contact your electrician. If your home was built after 1981, it\'s more likely that one of the GFCI outlets has tripped. Scan your outlets for any "RESET" button that\'s no longer depressed.',
  },
  {
    question:
      'When I use my microwave, the lights dim, and sometimes the breaker trips. Why?',
    answer:
      'This probably means your microwave is mounted under your cabinets, above your stove. These draw around 1100-1800 watts and are added after the home was built. A 15 amp circuit has a maximum allowable load of 1480 watts, so the breaker will trip once it passes about 1800 watts. When you have the room lights on as well, you\'re getting close to tripping the circuit breaker, which is why your lights are dimming. To fix this issue, try adding a new 20 amp, 120-volt circuit specifically for your microwave.',
  },
  {
    question:
      'Is it normal for my lights to dim occasionally and then return to normal?',
    answer:
      'Yes and no. You could be experiencing what\'s known as a "brown out." These usually happen during the summer thanks to air conditioners running continuously. All the extra energy consumption puts stress on the power grids, causing less electricity to be available for your home. It could also be a loose neutral connection to the main power line or your electrical panel. Call your power company first; if they don\'t see an issue, contact your electrician.',
  },
  {
    question:
      'I replaced my fluorescent bulbs. Why are they still flickering?',
    answer:
      'Your issue could be due to several things: 1) Are all the prongs lined up? Fluorescent bulbs have two prongs at each end. If one doesn\'t line up correctly, the bulb will fail to light properly. 2) Are you sure you replaced all the bulbs? Some fixtures will not turn on or may flicker if you only replace one light. 3) Is your ballast burned out? That\'s the black box inside the fixture that converts the 120-volt supply. If burned out, it could be the source of your lack of proper lighting.',
  },
  {
    question: 'I\'ve noticed a dimmer that feels warm. Is this normal?',
    answer:
      'Generally, yes. A dimmer is a small-scale transformer that increases or decreases the voltage to the lights. As it lowers the voltage, heat is generated and can make the dimmer plate warm. There\'s no reason for concern unless you start smelling burning plastic, hear buzzing, or the lights start to flicker.',
  },
  {
    question: 'Why doesn\'t a specific outlet work?',
    answer:
      'Is it an outlet controlled by a switch? Try plugging something into it like a floor lamp and start toggling the wall switches in the room. If this doesn\'t work, check if other outlets are out as well - this could be a sign of a tripped circuit and the breaker just needs to be reset. If resetting the breaker doesn\'t work, contact (314) 773-4955 for a service call appointment to assess the outlet.',
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              Find answers to common electrical questions. If you don&apos;t see
              your question answered here, feel free to contact us.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-dark-200 rounded-xl overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-dark-50 transition-colors"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <span className="font-semibold text-dark-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={clsx(
                        'h-5 w-5 text-dark-500 shrink-0 transition-transform',
                        openIndex === index && 'rotate-180'
                      )}
                    />
                  </button>
                  <div
                    className={clsx(
                      'overflow-hidden transition-all duration-300',
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    )}
                  >
                    <div className="p-6 pt-0 text-dark-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom text-center">
          <HelpCircle className="h-16 w-16 text-primary-500 mx-auto mb-6" />
          <h2 className="heading-2 text-dark-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-dark-600 text-lg mb-8 max-w-2xl mx-auto">
            Our team is here to help. Contact us with any electrical questions
            or to schedule a service call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:314-773-4955" className="btn-primary">
              <Phone className="h-5 w-5 mr-2" />
              Call (314) 773-4955
            </a>
            <Link href="/contact" className="btn-secondary">
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

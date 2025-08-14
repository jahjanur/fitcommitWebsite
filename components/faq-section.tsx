"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'

const faqs = [
  {
    question: "How accurate is FitCommit's body fat estimate?",
    answer: "FitCommit uses computer vision on three photos to estimate body fat percentage. In our testing the results track closely with gold standard methods when the photo guide is followed."
  },
  {
    question: "What photos do I need to take?",
    answer: "Front, side, and back. Men shirt off. Women sports bra or fitted tank. Wear shorts above mid thigh. Stand tall with arms slightly away from your sides."
  },
  {
    question: "Is my data private and secure?",
    answer: "Yes. Your photos and results are encrypted in transit and at rest. You control what you keep or delete in the app. We do not sell or share your data."
  },
  {
    question: "How long does the analysis take?",
    answer: "About 10 seconds on a modern phone."
  },
  {
    question: "Can I track my progress over time?",
    answer: "Yes. Every scan saves to a private timeline with charts and a before after comparison slider."
  },
  {
    question: "How often should I scan?",
    answer: "Once or twice per week is ideal. Scan at the same time of day in similar lighting for consistent results."
  },
  {
    question: "What if I get different results?",
    answer: "Small swings can happen with different poses or lighting. Follow the photo guide and focus on the trend over time."
  },
  {
    question: "Do I need any special equipment?",
    answer: "No. Your phone camera is all you need."
  },
  {
    question: "How do AI projections work?",
    answer: "Projections reflect your plan and your consistency. Check in to your sessions and the future image advances. Miss sessions and the projection eases back toward your most recent photo."
  },
  {
    question: "Can FitCommit help with my fitness goals?",
    answer: "Use your estimate to set a clear starting point. Track progress, share updates with a coach, and stay focused on the actions that move your number."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-bg">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Everything you need to know about FitCommit. Can't find what you're looking for? 
            <a href="mailto:support@fitcommit.com" className="text-accent hover:underline ml-1">
              Contact our support team
            </a>
            .
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-surface border border-border rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ borderColor: 'var(--accent)' }}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-accent/5 transition-colors duration-200"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-text pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-accent" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted" />
                  )}
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Final Download CTA */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-accent/5 to-accent-2/5 border border-border rounded-2xl p-8 lg:p-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content */}
                <div className="text-center lg:text-left space-y-6">
                  <h2 
                    className="text-3xl lg:text-4xl font-bold text-text tracking-tight"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    Ready to start?
                  </h2>
                  <p className="text-lg text-muted">
                    Download FitCommit and get your first scan in minutes.
                  </p>
                  
                  {/* Store Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <motion.a
                      href="https://testflight.apple.com/join/7JEmuzQx"
                      className="inline-flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Download on the App Store"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/AppStoreIcon.png"
                        alt="Download on the App Store"
                        width={140}
                        height={47}
                        className="h-12 w-auto"
                      />
                    </motion.a>
                    
                    <motion.a
                      href="https://testflight.apple.com/join/7JEmuzQx"
                      className="inline-flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Get it on Google Play"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/GooglePlayIcon.png"
                        alt="Get it on Google Play"
                        width={140}
                        height={47}
                        className="h-12 w-auto"
                      />
                    </motion.a>
                  </div>
                  
                  {/* Fine Print */}
                  <p className="text-sm text-muted">
                    No hardware required • Private by design
                  </p>
                </div>
                
                {/* Phone Mockup */}
                <div className="flex justify-center lg:justify-end">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/images/PhoneMockup.webp"
                      alt="FitCommit app on phone"
                      width={400}
                      height={800}
                      className="w-auto h-auto max-h-[600px] lg:max-h-[720px]"
                      loading="lazy"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
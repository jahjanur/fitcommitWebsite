

"use client"

import { Navigation } from '@/components/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function TermsOfService() {
  const { theme } = useTheme()
  
  return (
    <div className="min-h-screen bg-bg">
      <Navigation />
      {/* Main Content with Top Margin */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12">
        <div>
          {/* Content */}
          <div className="prose prose-sm sm:prose-base max-w-none">
            <div className="space-y-6">
              <section>
                <p className="text-muted leading-relaxed mb-6">
                  Welcome to FitCommit! Please read these Terms of Service ("Terms") carefully before using our website, mobile application, or any of the services provided by FitCommit Ltd. ("FitCommit", "we", "our", or "us"). These Terms govern your access to and use of the FitCommit platform, including all associated services, tools, features, and content (collectively, the "Services").
                </p>
                <p className="text-muted leading-relaxed">
                  By accessing or using our Services, you agree to be bound by these Terms. If you do not agree with these Terms, do not use our Services.
                </p>
              </section>

              <section>
                <h2 id="eligibility" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                  1. Eligibility
                </h2>
                <p className="text-muted leading-relaxed">
                  You must be at least 13 years old to use our Services. By using FitCommit, you affirm that you are either over the age of 13 or have permission from a parent or legal guardian who agrees to these Terms on your behalf.
                </p>
              </section>

              <section>
                <h2 id="services-overview" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                  2. Services Overview
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  FitCommit is a fitness accountability and body visualization platform designed to help users:
                </p>
                <ul className="text-muted leading-relaxed space-y-2 ml-6">
                  <li>Estimate their body fat percentage using AI analysis based on a current body photo.</li>
                  <li>Track visual body progress over time as they follow a fitness or nutritional plan.</li>
                  <li>Receive (in future versions) personalized insights such as diet recommendations and fitness progression suggestions.</li>
                </ul>
                <p className="text-muted leading-relaxed mt-4">
                  Our Services are intended for motivational and informational purposes only. FitCommit does not currently generate before-and-after transformation photos.
                </p>
              </section>

              <section>
                <h2 id="user-accounts" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                  3. User Accounts
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  To use key features of the Services, you must create an account. You agree to:
                </p>
                <ul className="text-muted leading-relaxed space-y-2 ml-6">
                  <li>Provide accurate and truthful information during registration.</li>
                  <li>Maintain the confidentiality of your account credentials.</li>
                  <li>Notify us promptly of any unauthorized use of your account.</li>
                </ul>
                <p className="text-muted leading-relaxed mt-4">
                  You are responsible for all activity that occurs under your account.
                </p>
              </section>

              <section>
                <h2 id="user-responsibilities" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                  4. User Responsibilities
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  You agree to use the Services in accordance with all applicable laws and regulations and to refrain from:
                </p>
                <ul className="text-muted leading-relaxed space-y-2 ml-6">
                  <li>Uploading or submitting false, misleading, or unlawful content.</li>
                  <li>Using the Services to exploit, harass, or harm others.</li>
                  <li>Uploading images of minors without verified legal consent.</li>
                  <li>Attempting to reverse-engineer or misuse our AI systems or data storage infrastructure.</li>
                </ul>
              </section>

              <section>
                <h2 id="privacy" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                  5. Privacy
                </h2>
                <p className="text-muted leading-relaxed">
                  We are committed to protecting your privacy. Our Privacy Policy explains how we collect, use, store, and share your personal data. By using the Services, you consent to our data practices as outlined in the Privacy Policy, including processing of personal and biometric data under applicable U.S. and Canadian law (e.g., DPDPA, PIPEDA).
                </p>
              </section>

              <section>
                <h2 id="ai-powered-visualization" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                  6. AI-Powered Visualization
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  FitCommit uses artificial intelligence models to analyze user-submitted images for the purpose of estimating body fat percentage and tracking physical progress. These visualizations are intended for motivational and informational purposes only, and do not represent medical diagnoses or certified health assessments.
                </p>
                <p className="text-muted leading-relaxed">
                  By uploading your image(s), you grant FitCommit a limited, non-exclusive, revocable license to use, store, and process the image solely to generate visual outputs for your use.
                </p>
              </section>

              <section>
                <h2 id="payments-subscriptions" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                  7. Payments and Subscriptions
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  Certain features of FitCommit may require a subscription or one-time fee. You agree to:
                </p>
                <ul className="text-muted leading-relaxed space-y-2 ml-6">
                  <li>Pay all applicable fees and taxes associated with your selected plan.</li>
                  <li>Use a valid payment method.</li>
                  <li>Understand that all payments are processed through secure third-party providers (e.g., Stripe, Apple Pay, Google Pay), and FitCommit does not store your full payment credentials.</li>
                </ul>
                <p className="text-muted leading-relaxed mt-4">
                  Your subscription may auto-renew depending on your plan; you can manage or cancel this through your account settings or app store provider.
                </p>
              </section>

              <section>
                <h2 id="intellectual-property" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                  8. Intellectual Property
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  All content, features, tools, branding, software, and intellectual property related to FitCommit are the property of FitCommit Ltd. or its licensors. You may not copy, reproduce, modify, or distribute any part of the Services without our express written permission.
                </p>
                <p className="text-muted leading-relaxed">
                  We grant you a limited, non-exclusive, non-transferable license to use the Services for personal, non-commercial purposes only.
                </p>
              </section>

              <section>
                <h2 id="service-availability" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                  9. Service Availability
                </h2>
                <p className="text-muted leading-relaxed">
                  We strive to provide a reliable and consistent service, but we do not guarantee uninterrupted availability. We may modify, suspend, or discontinue certain features or the entire Service at any time without notice or liability.
                </p>
              </section>

              <section>
                <h2 id="medical-disclaimer" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                  10. Medical Disclaimer
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  FitCommit does not provide medical advice. All data visualizations, estimated metrics, and insights are for informational and motivational purposes only and are not a substitute for professional health care or medical consultation.
                </p>
                <p className="text-muted leading-relaxed">
                  Always consult a licensed healthcare provider before beginning any fitness, weight loss, or nutritional program.
                </p>
              </section>

              <section>
                <h2 id="limitation-liability" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                  11. Limitation of Liability
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  To the fullest extent permitted by law, FitCommit and its affiliates, officers, employees, and partners shall not be liable for:
                </p>
                <ul className="text-muted leading-relaxed space-y-2 ml-6">
                  <li>Any indirect, incidental, or consequential damages.</li>
                  <li>Any loss of data, revenue, or profits.</li>
                  <li>Any injuries or damages resulting from reliance on visual estimations or third-party services.</li>
                </ul>
                <p className="text-muted leading-relaxed mt-4">
                  Your sole and exclusive remedy for dissatisfaction with the Services is to stop using them.
                </p>
              </section>

              <section>
                <h2 id="indemnification" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                  12. Indemnification
                </h2>
                <p className="text-muted leading-relaxed">
                  You agree to indemnify and hold harmless FitCommit, its affiliates, and their officers, employees, and agents from and against any claims, liabilities, damages, losses, or expenses (including legal fees) arising from your use of the Services or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 id="termination" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                  13. Termination
                </h2>
                <p className="text-muted leading-relaxed">
                  We reserve the right to suspend or terminate your account or access to the Services at our sole discretion, without prior notice, for conduct that violates these Terms or is harmful to other users, third parties, or FitCommit itself.
                </p>
              </section>

              <section>
                <h2 id="modifications" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                  14. Modifications
                </h2>
                <p className="text-muted leading-relaxed">
                  We may update these Terms at any time. When we do, we will revise the "Last Updated" date and provide notice if required by applicable law. Continued use of the Services after the update constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 id="governing-law" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                  15. Governing Law
                </h2>
                <p className="text-muted leading-relaxed">
                  These Terms are governed by the laws of the State of Delaware, United States. Any legal action or dispute shall be resolved in the courts located in Dover, Delaware, unless otherwise required by applicable jurisdictional law.
                </p>
              </section>

              <section>
                <h2 id="contact-us" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                  16. Contact Us
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  If you have any questions or concerns about these Terms, please contact us:
                </p>
                <div className="text-muted leading-relaxed space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:hello@fitcommit.ai" className="text-accent hover:text-accent/80">hello@fitcommit.ai</a></p>
                  <div>
                    <p><strong>Mailing Address:</strong></p>
                    <p className="ml-4">
                      FitCommit Ltd.<br />
                      611 South Dupont Highway, Suite 102<br />
                      Dover, Delaware 19901<br />
                      USA
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-surface border-t border-border py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="block md:hidden">
            {/* Logo and Description */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <Image
                  src={theme === 'dark' ? "/images/FitCommitLogoWebsiteLightLogo.svg" : "/images/FitCommitLogoWebsite.svg"}
                  alt="FitCommit Logo"
                  width={120}
                  height={120}
                  className="w-30 h-30 object-contain"
                />
              </div>
              <p className="text-muted text-sm mb-6 " style={{ marginTop: '-10px' }}>
                See your commitment. AI body fat percent from 3 photos. Your After Photo updates as you do.
              </p>
              
              {/* Legal Links - Mobile */}
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Link href="/privacy" className="text-muted hover:text-accent transition-colors duration-200 text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-muted hover:text-accent transition-colors duration-200 text-sm">
                  Terms of Service
                </Link>
                <Link href="/mental-health" className="text-muted hover:text-accent transition-colors duration-200 text-sm">
                  Mental Health
                </Link>
              </div>
            </div>

            {/* Mobile Links Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-text mb-3 text-sm">Product</h3>
                <ul className="space-y-2">
                  <li><a href="/#features" className="text-muted hover:text-accent transition-colors duration-200 text-sm">Features</a></li>
                  <li><a href="/#results" className="text-muted hover:text-accent transition-colors duration-200 text-sm">Results</a></li>
                  <li><a href="/#download" className="text-muted hover:text-accent transition-colors duration-200 text-sm">Download</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-3 text-sm">Company</h3>
                <ul className="space-y-2">
                  <li><a href="/#team" className="text-muted hover:text-accent transition-colors duration-200 text-sm">Team</a></li>
                  <li><a href="/#faq" className="text-muted hover:text-accent transition-colors duration-200 text-sm">FAQ</a></li>
                  <li><a href="mailto:support@fitcommit.com" className="text-muted hover:text-accent transition-colors duration-200 text-sm">Support</a></li>
                  <li><a href="mailto:hello@fitcommit.com" className="text-muted hover:text-accent transition-colors duration-200 text-sm">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center -mb-0 -mt-20">
                <Image
                  src={theme === 'dark' ? "/images/FitCommitLogoWebsiteLightLogo.svg" : "/images/FitCommitLogoWebsite.svg"}
                  alt="FitCommit Logo"
                  width={192}
                  height={192}
                  className="w-48 h-48 object-contain"
                />
              </div>
              <p className="text-muted mb-4 max-w-md">
                See your commitment. AI body fat percent from 3 photos. Your After Photo updates as you do.
              </p>
              <div className="flex space-x-4">
                <Link href="/privacy" className="text-muted hover:text-accent transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-muted hover:text-accent transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/mental-health" className="text-muted hover:text-accent transition-colors duration-200">
                  Mental Health
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-text mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="/#features" className="text-muted hover:text-accent transition-colors duration-200">Features</a></li>
                <li><a href="/#results" className="text-muted hover:text-accent transition-colors duration-200">Results</a></li>
                <li><a href="/#download" className="text-muted hover:text-accent transition-colors duration-200">Download</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-text mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="/#team" className="text-muted hover:text-accent transition-colors duration-200">Team</a></li>
                <li><a href="/#faq" className="text-muted hover:text-accent transition-colors duration-200">FAQ</a></li>
                <li><a href="mailto:support@fitcommit.com" className="text-muted hover:text-accent transition-colors duration-200">Support</a></li>
                <li><a href="mailto:hello@fitcommit.com" className="text-muted hover:text-accent transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted text-sm text-center sm:text-left">
              Made with ❤️ <a href="https://epage.digital" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-200">EPAGE DIGITAL</a>
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-muted hover:text-accent transition-colors duration-200 text-sm">
                Twitter
              </a>
              <a href="#" className="text-muted hover:text-accent transition-colors duration-200 text-sm">
                LinkedIn
              </a>
              <a href="#" className="text-muted hover:text-accent transition-colors duration-200 text-sm">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

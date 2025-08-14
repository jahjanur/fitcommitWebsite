"use client"

import { Navigation } from '@/components/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function PrivacyPolicy() {
  const { theme } = useTheme()
  
  return (
    <div className="min-h-screen bg-bg">
      <Navigation />
      {/* Main Content with Top Margin */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12">
        <div className="prose prose-sm sm:prose-base max-w-none">
          <div className="space-y-6">
            <section>
              <h2 id="effective-date" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                Effective Date
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                This policy is effective as of March 18, 2025.
              </p>
              <p className="text-muted leading-relaxed">
                By using our website and services, you agree to the terms of this privacy policy.
              </p>
            </section>

            <section>
              <h2 id="introduction-scope" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                Introduction and Scope
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Welcome to FitCommit's Privacy Policy. This policy outlines how we collect, use, share, and protect your personal information when you use our website and services. We are committed to transparency and compliance with all applicable privacy laws in the United States and Canada.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                This policy applies to all users of our website and services, including those in the United States and Canada. For Canadian users, this policy is designed to comply with the Personal Information Protection and Electronic Documents Act (PIPEDA) <a href="https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/" className="text-accent hover:text-accent/80">Summary of privacy laws in Canada Office of the Privacy Commissioner</a>. For users in the United States, particularly those in states with specific privacy laws like California, we ensure compliance with those regulations as well, including the Delaware Personal Data Privacy Act (DPDPA) <a href="https://www.whitecase.com/insight-alert/delaware-enacts-comprehensive-data-privacy-law" className="text-accent hover:text-accent/80">Delaware Enacts Comprehensive Data Privacy Law White & Case LLP</a>.
              </p>
            </section>

            <section>
              <h2 id="information-collected" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                Information Collected
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                We collect various types of personal information from our users:
              </p>
              <ul className="text-muted leading-relaxed space-y-2 ml-6">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and home address.</li>
                <li><strong>Account Information:</strong> Username, password, and account preferences.</li>
                <li><strong>Fitness & Health Data:</strong> Height, weight, body fat percentage, gender, workout program, nutrition targets, and body weight changes.</li>
                <li><strong>Other Data:</strong> User photos (before photos for AI-projected after photos), trainer information, and payment information (processed by third-party providers).</li>
                <li><strong>Usage Information:</strong> IP address, browser type, device information, and other data collected through cookies and tracking technologies.</li>
              </ul>
            </section>

            <section>
              <h2 id="use-information" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                Use of Information
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="text-muted leading-relaxed space-y-2 ml-6">
                <li>To provide and improve our services.</li>
                <li>To generate AI-projected after photos.</li>
                <li>To personalize user experiences.</li>
                <li>To communicate updates and promotions.</li>
                <li>To ensure the security of our platform.</li>
                <li>To analyze usage and improve our offerings.</li>
              </ul>
            </section>

            <section>
              <h2 id="sharing-information" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                Sharing of Information
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                We do not sell your personal information. However, we may share it with:
              </p>
              <ul className="text-muted leading-relaxed space-y-2 ml-6">
                <li><strong>Service Providers:</strong> Such as Google Cloud for storage and 3rd party GenAI image models for generating after photos. These providers are contractually obligated to protect your data, and we ensure compliance with cross-border data transfer requirements.</li>
                <li><strong>Legal Compliance:</strong> To comply with laws, regulations, or legal processes.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, sale, or acquisition.</li>
              </ul>
            </section>

            <section>
              <h2 id="data-security" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                Data Security
              </h2>
              <p className="text-muted leading-relaxed">
                We employ industry-standard security measures to protect your personal information, including encryption, access controls, and regular security assessments. While no system is completely secure, we are committed to safeguarding your data and conducting data protection assessments as required by applicable laws.
              </p>
            </section>

            <section>
              <h2 id="user-rights" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                User Rights
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="text-muted leading-relaxed space-y-2 ml-6">
                <li><strong>Access:</strong> Request to see what information we have about you.</li>
                <li><strong>Update:</strong> Correct any inaccuracies in your information.</li>
                <li><strong>Delete:</strong> Request the deletion of your personal information.</li>
                <li><strong>Portability:</strong> Receive a copy of your personal information in a portable format.</li>
                <li><strong>Opt-Out:</strong> Opt out of marketing communications, targeted advertising, and certain data processing activities, including profiling that produces legal or similarly significant effects.</li>
              </ul>
              <p className="text-muted leading-relaxed mt-4">
                To exercise these rights, please contact us at <a href="mailto:privacy@fitcommit.ai" className="text-accent hover:text-accent/80">privacy@fitcommit.ai</a>.
              </p>
              <p className="text-muted leading-relaxed">
                We will respond within a reasonable timeframe and ensure compliance with both US state laws like DPDPA and Canadian laws like PIPEDA.
              </p>
            </section>

            <section>
              <h2 id="cookies-tracking" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                Cookies and Tracking
              </h2>
              <p className="text-muted leading-relaxed">
                We use cookies and tracking technologies to enhance your experience and collect usage information. Cookies are used for analytics, advertising, and functionality purposes. You can manage your cookie preferences through your browser settings or by contacting us. For Canadian users, we ensure transparency about tracking technologies as required by PIPEDA <a href="https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/pipeda_brief/" className="text-accent hover:text-accent/80">Ten Tips for Privacy Policy Office of the Privacy Commissioner</a>.
              </p>
            </section>

            <section>
              <h2 id="cross-border-transfers" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                Cross-Border Data Transfers
              </h2>
              <p className="text-muted leading-relaxed">
                Your data may be transferred to and processed in countries other than your own for the purposes outlined in this policy. We ensure that such transfers are handled securely and in compliance with applicable laws. We have contractual agreements with our service providers, such as <a href="https://cloud.google.com/about/locations" className="text-accent hover:text-accent/80">Google Cloud Global Locations - Regions & Zones Google Cloud</a>, to protect your data, and we comply with PIPEDA requirements for cross-border transfers <a href="https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/pipeda_brief/" className="text-accent hover:text-accent/80">Guidelines for processing personal data across borders Office of the Privacy Commissioner</a>.
              </p>
            </section>

            <section>
              <h2 id="children-privacy" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                Children's Privacy
              </h2>
              <p className="text-muted leading-relaxed">
                Our services are intended for users aged 13 and older. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us to have it removed, in compliance with the US Children's Online Privacy Protection Act (COPPA) <a href="https://epic.org/privacy/kids/" className="text-accent hover:text-accent/80">U.S. Privacy Laws EPIC</a>.
              </p>
            </section>

            <section>
              <h2 id="marketing-communications" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                Marketing Communications
              </h2>
              <p className="text-muted leading-relaxed">
                We may send you marketing communications if you have opted in by providing your email or phone number. You can opt out of these communications at any time by following the instructions in the communication or by contacting us. For Canadian users, we ensure that consent for marketing communications can be withdrawn at any time, as required by PIPEDA.
              </p>
            </section>

            <section>
              <h2 id="policy-updates" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                Policy Updates
              </h2>
              <p className="text-muted leading-relaxed">
                We may update this privacy policy periodically. Any changes will be posted on this page with an updated "Effective Date." We encourage you to review this policy regularly, and we will notify users of significant changes as required by applicable laws.
              </p>
            </section>

            <section>
              <h2 id="contact-information" className="font-epilogue text-text font-bold text-lg sm:text-xl tracking-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                Contact Information
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                For any questions or concerns about this privacy policy or your personal information, please contact us at:
              </p>
              <div className="text-muted leading-relaxed space-y-2">
                <p><strong>Email:</strong> <a href="mailto:hello@fitcommit.ai" className="text-accent hover:text-accent/80">hello@fitcommit.ai</a></p>
                <p><strong>Address:</strong> 611 South Dupont Highway, Suite 102, Dover, Delaware 19901</p>
              </div>
            </section>
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

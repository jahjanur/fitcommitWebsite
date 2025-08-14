"use client"

import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { HowItWorks } from '@/components/how-it-works'
import { ResultsSection } from '@/components/results-section'
import { TeamSection } from '@/components/team-section'
import { FAQSection } from '@/components/faq-section'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function HomePage() {
  const { theme } = useTheme()
  
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <ResultsSection />
      <TeamSection />
      <FAQSection />
      
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
                  <li><a href="#features" className="text-muted hover:text-accent transition-colors duration-200 text-sm">Features</a></li>
                  <li><a href="#results" className="text-muted hover:text-accent transition-colors duration-200 text-sm">Results</a></li>
                  <li><a href="#download" className="text-muted hover:text-accent transition-colors duration-200 text-sm">Download</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-3 text-sm">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#team" className="text-muted hover:text-accent transition-colors duration-200 text-sm">Team</a></li>
                  <li><a href="#faq" className="text-muted hover:text-accent transition-colors duration-200 text-sm">FAQ</a></li>
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
                <li><a href="#features" className="text-muted hover:text-accent transition-colors duration-200">Features</a></li>
                <li><a href="#results" className="text-muted hover:text-accent transition-colors duration-200">Results</a></li>
                <li><a href="#download" className="text-muted hover:text-accent transition-colors duration-200">Download</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-text mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#team" className="text-muted hover:text-accent transition-colors duration-200">Team</a></li>
                <li><a href="#faq" className="text-muted hover:text-accent transition-colors duration-200">FAQ</a></li>
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
    </main>
  )
} 
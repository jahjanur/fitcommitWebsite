"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { ThemeToggle } from './theme-toggle'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '#features', label: 'Features' },
  { href: '#results', label: 'Results' },
  { href: '#team', label: 'Team' },
  { href: '#faq', label: 'FAQ' },
  { href: 'https://testflight.apple.com/join/7JEmuzQx', label: 'Download', isExternal: true },
]

export function Navigation() {
  const { theme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    // Check if we're on the home page
    const isHomePage = window.location.pathname === '/'
    
    if (isHomePage) {
      // If on home page, scroll to section
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // If on other pages, navigate to home page with hash
      window.location.href = `/${href}`
    }
    setIsMobileMenuOpen(false)
  }

  const handleNavClick = (item: any) => {
    if (item.isExternal) {
      window.open(item.href, '_blank', 'noopener,noreferrer')
    } else {
      scrollToSection(item.href)
    }
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 min-h-10 md:min-h-12 lg:min-h-14 py-1 md:py-1 ${
          isScrolled ? 'py-1' : 'py-2'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="flex items-center">
                <Image
                  src={theme === 'dark' ? "/images/FitCommitLogoWebsiteLightLogo.svg" : "/images/FitCommitLogoWebsite.svg"}
                  alt="FitCommit Logo"
                  width={64}
                  height={64}
                  className="h-32 w-32 sm:h-36 sm:w-36 md:h-24 md:w-24 lg:h-28 lg:w-28 shrink-0 object-contain"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item)}
                  className="text-muted hover:text-text transition-colors duration-200 font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden relative p-3 rounded-xl bg-surface/80 border border-border/50 hover:bg-accent/10 hover:border-accent/30 transition-all duration-300 backdrop-blur-sm"
                aria-label="Toggle mobile menu"
              >
                <div className="relative w-5 h-5">
                  <motion.div
                    className="absolute inset-0 flex flex-col justify-center items-center"
                    animate={isMobileMenuOpen ? "open" : "closed"}
                  >
                    <motion.span
                      className="w-5 h-0.5 bg-current rounded-full origin-center"
                      variants={{
                        closed: { rotate: 0, y: 0 },
                        open: { rotate: 45, y: 0 }
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      className="w-5 h-0.5 bg-current rounded-full origin-center mt-1"
                      variants={{
                        closed: { opacity: 1, scale: 1 },
                        open: { opacity: 0, scale: 0 }
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      className="w-5 h-0.5 bg-current rounded-full origin-center mt-1"
                      variants={{
                        closed: { rotate: 0, y: 0 },
                        open: { rotate: -45, y: -6 }
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Glass Background */}
        <div
          className={`absolute inset-0 -z-10 transition-all duration-300 ${
            isScrolled ? 'glass opacity-90' : 'bg-transparent'
          }`}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Container */}
            <motion.div
              className="absolute top-0 left-0 right-0 bg-surface border-b border-border/50 shadow-lg"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="px-6 py-8">
                {/* Menu Items */}
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.href}
                      onClick={() => handleNavClick(item)}
                      className={`group block w-full text-left py-4 px-6 text-text hover:text-accent rounded-2xl transition-all duration-300 font-medium text-lg relative overflow-hidden ${
                        item.label === 'Features' ? 'mt-11' : ''
                      }`}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                      whileHover={{ 
                        backgroundColor: "rgba(111, 61, 255, 0.08)",
                        x: 8
                      }}
                    >
                      {/* Background highlight on hover */}
                      <motion.div
                        className="absolute inset-0 bg-accent/5 rounded-2xl"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ originX: 0 }}
                      />
                      
                      {/* Content */}
                      <span className="relative z-10 flex items-center justify-between">
                        {item.label}
                        <motion.div
                          className="w-2 h-2 rounded-full bg-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                        />
                      </span>
                    </motion.button>
                  ))}
                </div>
                
                {/* Bottom Section */}
                <motion.div
                  className="mt-8 pt-6 border-t border-border/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <div className="text-center">
                    <p className="text-muted text-sm mb-4">
                      Ready to see your commitment?
                    </p>
                    <div className="flex justify-center space-x-3">
                      <motion.a
                        href="https://testflight.apple.com/join/7JEmuzQx"
                        className="px-4 py-2 bg-accent/10 text-accent rounded-xl text-sm font-medium hover:bg-accent/20 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download App
                      </motion.a>
                      <motion.button
                        className="px-4 py-2 bg-surface border border-border text-muted rounded-xl text-sm font-medium hover:bg-accent/10 hover:text-accent transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 
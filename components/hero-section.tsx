"use client"

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

// Particle features data
const particleFeatures = [
  "3 Photo Scan",
  "AI Analysis", 
  "Progress Tracking",
  "Body Fat %"
]

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  scale: number
  opacity: number
  feature: string
  element: HTMLDivElement | null
}

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Initialize particles with percentage-based positioning
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const rect = particlesRef.current.getBoundingClientRect();
    
    // Define positions for each specific feature
    const featurePositions = [
      { feature: "3 Photo Scan", xPercent: 46, yPercent: 30 },      // Center
      { feature: "AI Analysis", xPercent: 85, yPercent: 20 },       // Top right
      { feature: "Progress Tracking", xPercent: 40, yPercent: 75 }, // Bottom left
      { feature: "Body Fat %", xPercent: 90, yPercent: 40 },        // Bottom right
    ];
    
    const newParticles = featurePositions.map((pos, index) => ({
      id: index,
      x: (rect.width * pos.xPercent) / 100,
      y: (rect.height * pos.yPercent) / 100,
      vx: 0,
      vy: 0,
      scale: 0.8 + Math.random() * 0.4,
      opacity: 0.6 + Math.random() * 0.4,
      feature: pos.feature,
      element: null,
    }));
    
    setParticles(newParticles);
  }, [isMobile]);

  // Mouse movement for parallax (desktop only)
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isReducedMotion || isMobile) return
    
    const rect = heroRef.current?.getBoundingClientRect()
    if (!rect) return
    
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    
    setMousePos({ x, y })
  }, [isReducedMotion, isMobile])

  const scrollToHowItWorks = () => {
    const element = document.querySelector('#how-it-works')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8"
      onMouseMove={handleMouseMove}
    >
      {/* Organic Flowing Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base organic gradients */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle 800px at 20% 30%, color-mix(in oklab, var(--accent) 35%, transparent) 0%, transparent 50%),
              radial-gradient(circle 600px at 80% 20%, color-mix(in oklab, var(--accent-2) 30%, transparent) 0%, transparent 60%),
              radial-gradient(circle 700px at 40% 80%, color-mix(in oklab, var(--accent) 25%, transparent) 0%, transparent 55%),
              radial-gradient(circle 500px at 90% 70%, color-mix(in oklab, var(--accent-2) 20%, transparent) 0%, transparent 65%)
            `
          }}
          animate={isReducedMotion ? {} : {
            background: [
              `radial-gradient(circle 800px at 20% 30%, color-mix(in oklab, var(--accent) 35%, transparent) 0%, transparent 50%),
               radial-gradient(circle 600px at 80% 20%, color-mix(in oklab, var(--accent-2) 30%, transparent) 0%, transparent 60%),
               radial-gradient(circle 700px at 40% 80%, color-mix(in oklab, var(--accent) 25%, transparent) 0%, transparent 55%),
               radial-gradient(circle 500px at 90% 70%, color-mix(in oklab, var(--accent-2) 20%, transparent) 0%, transparent 65%)`,
              `radial-gradient(circle 900px at 25% 35%, color-mix(in oklab, var(--accent) 40%, transparent) 0%, transparent 45%),
               radial-gradient(circle 700px at 75% 25%, color-mix(in oklab, var(--accent-2) 35%, transparent) 0%, transparent 55%),
               radial-gradient(circle 800px at 35% 75%, color-mix(in oklab, var(--accent) 30%, transparent) 0%, transparent 50%),
               radial-gradient(circle 600px at 85% 65%, color-mix(in oklab, var(--accent-2) 25%, transparent) 0%, transparent 60%)`,
              `radial-gradient(circle 800px at 20% 30%, color-mix(in oklab, var(--accent) 35%, transparent) 0%, transparent 50%),
               radial-gradient(circle 600px at 80% 20%, color-mix(in oklab, var(--accent-2) 30%, transparent) 0%, transparent 60%),
               radial-gradient(circle 700px at 40% 80%, color-mix(in oklab, var(--accent) 25%, transparent) 0%, transparent 55%),
               radial-gradient(circle 500px at 90% 70%, color-mix(in oklab, var(--accent-2) 20%, transparent) 0%, transparent 65%)`
            ]
          }}
          transition={isReducedMotion ? {} : {
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating organic blobs */}
        {!isReducedMotion && (
          <>
            <motion.div 
              className="absolute rounded-full will-change-transform"
              style={{
                left: '10%',
                top: '20%',
                width: '300px',
                height: '300px',
                background: `radial-gradient(circle, color-mix(in oklab, var(--accent) 25%, transparent) 0%, color-mix(in oklab, var(--accent-2) 15%, transparent) 50%, transparent 100%)`,
                filter: 'blur(60px)',
                opacity: 0.6
              }}
              animate={{
                x: isMobile ? 0 : (mousePos.x - 0.5) * 40,
                y: isMobile ? 0 : (mousePos.y - 0.5) * 30,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute rounded-full will-change-transform"
              style={{
                left: '70%',
                top: '15%',
                width: '250px',
                height: '250px',
                background: `radial-gradient(circle, color-mix(in oklab, var(--accent-2) 30%, transparent) 0%, color-mix(in oklab, var(--accent) 20%, transparent) 60%, transparent 100%)`,
                filter: 'blur(50px)',
                opacity: 0.5
              }}
              animate={{
                x: isMobile ? 0 : (mousePos.x - 0.5) * -35,
                y: isMobile ? 0 : (mousePos.y - 0.5) * 25,
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute rounded-full will-change-transform"
              style={{
                left: '20%',
                top: '70%',
                width: '280px',
                height: '280px',
                background: `radial-gradient(circle, color-mix(in oklab, var(--accent) 20%, transparent) 0%, color-mix(in oklab, var(--accent-2) 25%, transparent) 70%, transparent 100%)`,
                filter: 'blur(55px)',
                opacity: 0.4
              }}
              animate={{
                x: isMobile ? 0 : (mousePos.x - 0.5) * 30,
                y: isMobile ? 0 : (mousePos.y - 0.5) * -40,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}
        
        {/* Soft ambient glow */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(ellipse 100% 60% at 50% 50%, 
              color-mix(in oklab, var(--accent) 15%, transparent) 0%, 
              transparent 70%)`
          }}
          animate={isReducedMotion ? {} : {
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={isReducedMotion ? {} : {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />
      </div>

      {/* Interactive Particles - Reverted to original */}
      <div 
        ref={particlesRef}
        className="absolute inset-0 overflow-hidden pointer-events-none lg:block hidden"
        aria-hidden="true"
      >
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute text-sm font-medium text-accent/60 bg-accent/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-accent/20 whitespace-nowrap"
            style={{
              x: particle.x,
              y: particle.y,
              scale: particle.scale,
              opacity: particle.opacity,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: particle.opacity, scale: particle.scale }}
            transition={{ duration: 0.3 }}
            whileHover={{ 
              opacity: 1, 
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
          >
            {particleFeatures[index]}
          </motion.div>
        ))}
      </div>

      {/* Content Layer */}
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-8 lg:pt-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-[clamp(28px,6vw,36px)] lg:text-[clamp(32px,4vw,48px)] xl:text-[clamp(40px,5vw,56px)] font-bold text-text leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              See your commitment
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              AI body fat percent from 3 photos. Your After Photo updates as you do.
            </motion.p>

            {/* Store Badges */}
            <motion.div
              className="flex flex-row gap-4 justify-center lg:justify-start items-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <motion.a
                href="https://testflight.apple.com/join/7JEmuzQx"
                className="hover:scale-105 transition-transform duration-200 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/AppStoreIcon.png"
                  alt="Download on the App Store"
                  width={140}
                  height={47}
                  className="w-auto h-auto"
                  priority
                />
              </motion.a>
              
              <motion.a
                href="https://testflight.apple.com/join/7JEmuzQx"
                className="hover:scale-105 transition-transform duration-200 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/GooglePlayIcon.png"
                  alt="Get it on Google Play"
                  width={140}
                  height={47}
                  className="w-auto h-auto"
                  priority
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Image - Right Side */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative w-full h-[700px] flex items-center justify-center">
              <motion.div
                className="relative z-20"
                whileHover={{ scale: 1.02 }}
                animate={isReducedMotion ? {} : { 
                  y: [0, -10, 0],
                  rotate: [0, 1, -1, 0]
                }}
                transition={isReducedMotion ? { duration: 0.3 } : { 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <Image
                  src="/images/HeroSectionImage.webp"
                  alt="FitCommit app interface showing body composition analysis"
                  width={1000}
                  height={800}
                  className="w-auto h-auto max-w-none object-contain"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Hero Image - Below Text */}
        <motion.div
          className="relative lg:hidden mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <div className="flex justify-center">
            <motion.div
              className="relative z-20"
              whileHover={{ scale: 1.02 }}
              animate={isReducedMotion ? {} : { 
                y: [0, -5, 0]
              }}
              transition={isReducedMotion ? { duration: 0.3 } : { 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <Image
                src="/images/HeroSectionImage.webp"
                alt="FitCommit app interface showing body composition analysis"
                width={2000}
                height={2400}
                className="w-auto h-auto max-w-[120vw] object-contain"
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          <motion.button
            onClick={scrollToHowItWorks}
            className="text-muted hover:text-accent transition-colors duration-200"
            animate={isReducedMotion ? {} : { y: [0, 8, 0] }}
            transition={isReducedMotion ? {} : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
            aria-label="Scroll to learn more"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 
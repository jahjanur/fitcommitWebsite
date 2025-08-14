"use client"

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, Brain, TrendingUp } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    id: 1,
    title: "Shoot 3 photos",
    description: "Front, side, back. We guide the angles. Simple lighting tips included.",
    icon: Camera
  },
  {
    id: 2,
    title: "AI analyzes",
    description: "Computer vision reads your shape and estimates body fat in seconds.",
    icon: Brain
  },
  {
    id: 3,
    title: "Your percent and projection",
    description: "See your body fat percent and a short preview that adapts to your plan and check ins.",
    icon: TrendingUp
  }
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const progressLineRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Desktop scroll-triggered animations
  useEffect(() => {
    if (!isDesktop) return
    const section = sectionRef.current
    const pin = pinRef.current
    const line = progressLineRef.current
    if (!section || !pin || !line) return

    const total = STEPS.length
    const st = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '+=200% top',
      scrub: 0.5,
      pin: pin,
      anticipatePin: 1,
      onUpdate: (self) => {
        const p = self.progress
        // Fill progress line
        line.style.transform = `scaleX(${p})`
        // Step index
        const idx = Math.min(total - 1, Math.max(0, Math.round(p * (total - 1)))) as number
        setActiveStep(idx)
      },
    })
    return () => st.kill()
  }, [isDesktop])

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="py-8 sm:py-10 lg:py-14 px-4 sm:px-6 lg:px-8"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto" ref={pinRef}>
        {/* Section Heading */}
        <motion.h2 
          id="how-it-works-heading" 
          className="font-epilogue text-text font-bold text-[clamp(24px,5vw,32px)] text-center mb-8 sm:mb-12 tracking-tight"
          style={{ letterSpacing: '-0.02em' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          How it works
        </motion.h2>

        {/* Desktop: Progress line and step markers */}
        <motion.div 
          className="hidden lg:block mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Progress line */}
            <div className="h-px bg-border/60" />
            <motion.div 
              ref={progressLineRef}
              className="absolute top-0 left-0 h-px bg-gradient-to-r from-accent to-accent-2 origin-left"
              style={{ width: '100%', transform: 'scaleX(0)' }}
            />
            
            {/* Step markers */}
            <div className="absolute inset-0 flex justify-between items-center -mt-2">
              {STEPS.map((step, index) => (
                <motion.div 
                  key={step.id} 
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className={`w-4 h-4 rounded-full border-2 border-surface transition-colors duration-300 ${
                      index <= activeStep ? 'bg-accent' : 'bg-border'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-xs font-mono text-muted mt-2 tracking-wider">
                    {String(step.id).padStart(2, '0')}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {STEPS.map((step, index) => (
            <StepCard 
              key={step.id} 
              step={step} 
              index={index} 
              isActive={index === activeStep}
              isDesktop={isDesktop}
            />
          ))}
        </div>

        {/* Footer line */}
        <motion.div 
          className="mt-8 sm:mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted font-medium">
            No hardware required.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function StepCard({ 
  step, 
  index, 
  isActive, 
  isDesktop 
}: { 
  step: typeof STEPS[0]; 
  index: number; 
  isActive: boolean;
  isDesktop: boolean;
}) {
  const IconComponent = step.icon

  return (
    <motion.div 
      className={`group backdrop-blur-sm border rounded-2xl shadow-sm p-6 sm:p-8 transition-all duration-500 ${
        isActive && isDesktop 
          ? 'bg-accent/5 border-accent/30 scale-105 shadow-lg' 
          : 'bg-surface/70 border-border'
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.3 + index * 0.1, 
        ease: "easeOut" 
      }}
      viewport={{ once: true }}
      whileHover={!isDesktop ? { 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      } : {}}
    >
      {/* Icon */}
      <motion.div 
        className={`flex items-center justify-center w-12 h-12 rounded-xl border mb-4 transition-all duration-300 ${
          isActive && isDesktop
            ? 'bg-accent/20 border-accent/40 scale-110'
            : 'bg-accent/10 border-accent/20'
        }`}
        whileHover={!isDesktop ? { 
          scale: 1.1,
          backgroundColor: "rgba(111, 61, 255, 0.15)",
          transition: { duration: 0.2 }
        } : {}}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
          viewport={{ once: true }}
        >
          <IconComponent 
            className={`w-6 h-6 transition-colors duration-300 ${
              isActive && isDesktop ? 'text-accent' : 'text-accent'
            }`} 
            aria-hidden="true"
          />
        </motion.div>
      </motion.div>

      {/* Step number */}
      <motion.div 
        className={`text-xs font-mono tracking-wider mb-2 transition-colors duration-300 ${
          isActive && isDesktop ? 'text-accent' : 'text-muted'
        }`}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
        viewport={{ once: true }}
      >
        {String(step.id).padStart(2, '0')}
      </motion.div>

      {/* Title */}
      <motion.h3 
        className={`font-epilogue font-semibold text-lg sm:text-xl mb-3 transition-colors duration-300 ${
          isActive && isDesktop ? 'text-accent' : 'text-text'
        }`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
        viewport={{ once: true }}
      >
        {step.title}
      </motion.h3>

      {/* Description */}
      <motion.p 
        className="text-muted text-base leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
        viewport={{ once: true }}
      >
        {step.description}
      </motion.p>
    </motion.div>
  )
}

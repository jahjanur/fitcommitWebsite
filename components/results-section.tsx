"use client"

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function ResultsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState<number>(50)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false)

  // Respect reduced motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max)

  const positionToValue = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return value
    const rect = el.getBoundingClientRect()
    const percent = ((clientX - rect.left) / rect.width) * 100
    return clamp(Math.round(percent), 0, 100)
  }, [value])

  // Pointer handlers
  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      if (!isDragging) return
      setValue(positionToValue(e.clientX))
    }
    const handleUp = () => setIsDragging(false)
    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerup', handleUp)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerup', handleUp)
    }
  }, [isDragging, positionToValue])

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true)
    setValue(positionToValue(e.clientX))
  }

  // Keyboard handlers
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      setValue(v => clamp(v - 2, 0, 100))
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      setValue(v => clamp(v + 2, 0, 100))
    } else if (e.key === 'Home') {
      e.preventDefault()
      setValue(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      setValue(100)
    }
  }

  return (
    <section id="results" className="py-16 px-4 sm:px-6 lg:px-8 bg-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={isReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={isReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="font-epilogue tracking-tight text-text font-bold text-3xl sm:text-4xl lg:text-5xl">
            Results you can see
          </h2>
          <p className="text-muted mt-2 text-sm sm:text-base">Drag to compare.</p>
        </motion.div>

        {/* Centered Tall Slider on desktop; full-width portrait on mobile */}
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Desktop-only supporting text */}
          <motion.div
            className="hidden lg:block"
            initial={isReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h3 className="font-epilogue tracking-tight text-text font-semibold text-2xl xl:text-3xl">Commitment made visible</h3>
            <p className="text-muted mt-3 leading-relaxed text-base">
              Drag to compare your most recent photo with a realistic AI After photo grounded in your plan and your check ins.
            </p>
            <ul className="mt-4 space-y-2 text-muted text-sm">
              <li className="flex items-start gap-2"><span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent" />Projection tied to your program, not a generic morph</li>
              <li className="flex items-start gap-2"><span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent" />Updates with your check ins</li>
              <li className="flex items-start gap-2"><span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent" />Save comparisons to your timeline</li>
            </ul>
          </motion.div>

          {/* Slider column */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Side gradients (desktop) */}
            <div className="pointer-events-none hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
            <div className="pointer-events-none hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />

            <div
              aria-label="Before and after comparison"
              role="region"
              className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:w-fit lg:max-w-none mx-auto overflow-hidden rounded-xl sm:rounded-2xl shadow-xl bg-transparent"
            >
              {/* Slider container: mobile width-driven (portrait); desktop height-driven */}
              <div
                ref={containerRef}
                className="relative aspect-[9/16] w-full lg:w-auto lg:h-[40vh]"
              >
                {/* Labels at bottom */}
                <div className="absolute bottom-3 left-3 z-50 pointer-events-none px-3 py-1.5 rounded-full text-xs font-medium border border-border/70 bg-surface/80 backdrop-blur-md text-text shadow-md">
                  Before
                </div>
                <div className="absolute bottom-3 right-3 z-50 pointer-events-none px-3 py-1.5 rounded-full text-xs font-medium border border-border/70 bg-surface/80 backdrop-blur-md text-text shadow-md">
                  After
                </div>

                {/* Before image (base) */}
                <Image
                  src="/images/BeforeImage.webp"
                  alt="Before portrait"
                  fill
                  loading="lazy"
                  className="select-none pointer-events-none object-cover object-center"
                  sizes="(max-width: 640px) 320px, (max-width: 768px) 400px, (max-width: 1024px) 480px, 50vw"
                />

                {/* After image (overlay clipped by divider value) */}
                <div
                  className="absolute inset-0 will-change-transform"
                  style={{ clipPath: `inset(0 0 0 ${value}%)` }}
                  aria-hidden="true"
                >
                  <Image
                    src="/images/AfterImage.webp"
                    alt="After portrait"
                    fill
                    loading="lazy"
                    className="select-none pointer-events-none object-cover object-center"
                    sizes="(max-width: 640px) 320px, (max-width: 768px) 400px, (max-width: 1024px) 480px, 50vw"
                  />
                </div>

                {/* Divider + Handle (accessible slider) */}
                <div
                  className="absolute top-0 bottom-0 z-40 touch-none"
                  style={{ left: `${value}%` }}
                >
                  {/* Divider line */}
                  <div className="absolute top-0 bottom-0 -translate-x-1/2 w-[2px] bg-accent" />
                  {/* Handle */}
                  <div
                    role="slider"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={value}
                    tabIndex={0}
                    onKeyDown={onKeyDown}
                    onPointerDown={onPointerDown}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-accent shadow-lg ring-4 ring-white/70 dark:ring-black/40 cursor-grab active:cursor-grabbing flex items-center justify-center"
                  >
                    <span className="sr-only">Drag to compare before and after</span>
                    <div className="w-1 h-5 sm:w-1.5 sm:h-6 bg-white/90 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"

import { motion } from 'framer-motion'
import { 
  Zap, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Users, 
  BarChart3 
} from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: "Honest Results",
    description: "A clear body fat percent from 3 photos. No guesswork.",
    color: "from-accent/20 to-accent/30"
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Quick guided photos anywhere. No extra gear.",
    color: "from-accent-2/20 to-accent-2/30"
  },
  {
    icon: Lock,
    title: "Commitment Aware",
    description: "Your projected After adapts to your plan and check ins so the preview reflects how consistently you show up.",
    color: "from-success/20 to-success/30"
  },
  {
    icon: TrendingUp,
    title: "Visual Projections",
    description: "Timeline and adherence controls let you see potential change at different commitment levels.",
    color: "from-warning/20 to-warning/30"
  },
  {
    icon: Users,
    title: "Quit Proof",
    description: "Small wins stay front and center. Your evolving After rewards consistency and cools off when you skip so you always know where you stand.",
    color: "from-accent/20 to-accent/30"
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Watch body composition change over time with simple charts.",
    color: "from-accent-2/20 to-accent-2/30"
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6">
            Why FitCommit
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Our mission is to fix fitness by making commitment visible and progress undeniable.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              {/* Card */}
              <div className="bg-bg border border-border rounded-2xl p-6 h-full hover:border-accent transition-all duration-300 hover:shadow-lg">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <feature.icon className="w-8 h-8 text-accent" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-accent-2 rounded-b-2xl"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proof Chips */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "No hardware required",
              "Private by design",
              "Visual projections",
              "AI-powered accuracy"
            ].map((chip, index) => (
              <motion.div
                key={index}
                className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {chip}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
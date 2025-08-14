"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
        <div className="w-5 h-5 bg-muted rounded-full animate-pulse" />
      </div>
    )
  }

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-accent/20 hover:border-accent hover:shadow-lg transition-all duration-200 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-warning group-hover:text-warning" />
        ) : (
          <Moon className="w-5 h-5 text-accent group-hover:text-accent" />
        )}
      </motion.div>
    </motion.button>
  )
} 
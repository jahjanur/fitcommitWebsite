"use client"

import { useState, useEffect } from 'react'
import { ChevronDown, Link } from 'lucide-react'

interface TocItem {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [tocItems, setTocItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    // Generate TOC from headings
    const headings = document.querySelectorAll('h2, h3')
    const items: TocItem[] = Array.from(headings).map((heading) => ({
      id: heading.id,
      text: heading.textContent || '',
      level: parseInt(heading.tagName.charAt(1))
    }))
    setTocItems(items)

    // Intersection Observer for active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -80% 0px' }
    )

    headings.forEach((heading) => observer.observe(heading))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveId(id)
    }
    setIsMobileOpen(false)
  }

  if (tocItems.length === 0) return null

  return (
    <>
      {/* Mobile TOC Dropdown */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full flex items-center justify-between p-3 bg-surface border border-border rounded-lg text-left"
          aria-expanded={isMobileOpen}
        >
          <span className="font-medium text-text">In this page</span>
          <ChevronDown 
            className={`w-4 h-4 text-muted transition-transform ${
              isMobileOpen ? 'rotate-180' : ''
            }`} 
          />
        </button>
        
        {isMobileOpen && (
          <div className="mt-2 p-3 bg-surface border border-border rounded-lg">
            <nav className="space-y-2">
              {tocItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-2 py-1 rounded text-sm transition-colors ${
                    activeId === item.id
                      ? 'text-accent bg-accent/10'
                      : 'text-muted hover:text-text'
                  } ${
                    item.level === 3 ? 'ml-4' : ''
                  }`}
                >
                  {item.text}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Desktop TOC Sidebar */}
      <div className="hidden lg:block">
        <div className="sticky top-32">
          <h3 className="font-epilogue text-text font-semibold text-sm mb-4 tracking-tight">
            Table of Contents
          </h3>
          <nav className="space-y-1">
            {tocItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${
                  activeId === item.id
                    ? 'text-accent bg-accent/10 border border-accent/20'
                    : 'text-muted hover:text-text hover:bg-surface/50'
                } ${
                  item.level === 3 ? 'ml-4' : ''
                }`}
              >
                <Link className={`w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ${
                  activeId === item.id ? 'opacity-100' : ''
                }`} />
                <span className="truncate">{item.text}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

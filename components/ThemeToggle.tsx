'use client'

import { useState } from 'react'
import { useTheme } from './ThemeProvider'
import { Moon, Sun, Palette, Eye, Code } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const themes = [
    { name: 'dark', label: 'Dark', icon: <Moon className="w-4 h-4" /> },
    { name: 'light', label: 'Light', icon: <Sun className="w-4 h-4" /> },
    { name: 'cyberpunk', label: 'Cyberpunk', icon: <Palette className="w-4 h-4" /> },
    { name: 'high-contrast', label: 'High Contrast', icon: <Eye className="w-4 h-4" /> },
    { name: 'coding', label: 'VS Code', icon: <Code className="w-4 h-4" /> },
  ]

  const currentTheme = themes.find(t => t.name === theme) || themes[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition"
        title="Change Theme"
      >
        {currentTheme.icon}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-48 glass-effect rounded-lg shadow-lg overflow-hidden z-50"
          >
            {themes.map((t) => (
              <button
                key={t.name}
                onClick={() => {
                  setTheme(t.name as any)
                  setIsOpen(false)
                }}
                className={`w-full px-4 py-2 flex items-center space-x-3 hover:bg-[var(--bg-tertiary)] transition ${
                  theme === t.name ? 'bg-[var(--bg-tertiary)] text-[var(--accent-primary)]' : ''
                }`}
              >
                {t.icon}
                <span className="text-sm">{t.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

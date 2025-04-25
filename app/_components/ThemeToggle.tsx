'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-md text-gray-800 dark:text-gray-200"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? <MoonIcon/> : <SunIcon/>}
    </button>
  )
}
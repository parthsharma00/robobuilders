import { useState, useEffect } from 'react'

export const useScrollZones = () => {
  const [currentZone, setCurrentZone] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Calculate scroll progress (0 to 1)
      const progress = scrollTop / (documentHeight - windowHeight)
      setScrollProgress(progress)

      // Determine current zone based on scroll position
      const zoneHeight = windowHeight
      const zone = Math.floor(scrollTop / zoneHeight)
      setCurrentZone(Math.min(zone, 4)) // Max 5 zones (0-4)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { currentZone, scrollProgress }
}
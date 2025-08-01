import { useEffect, useState } from 'react'
import { Scene } from './components/3D/Scene'
import { HeroSection } from './components/UI/HeroSection'
import { KitsZone } from './components/Zones/KitsZone'
import { ClassesZone } from './components/Zones/ClassesZone'
import { AcademyZone } from './components/Zones/AcademyZone'
import { ShowcaseZone } from './components/Zones/ShowcaseZone'
import { useScrollZones } from './hooks/useScrollZones'
import { motion, AnimatePresence } from 'framer-motion'
import './styles/globals.css'
import { Footer } from './components/UI/Footer'

function App() {
  const { currentZone, scrollProgress } = useScrollZones()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleBeginOdyssey = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#0A0E1A] flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-24 h-24 border-4 border-transparent border-t-cyan-400 border-r-violet-500 rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-b-cyan-400 border-l-violet-500 rounded-full animate-spin animate-reverse mx-auto"></div>
          </div>
          <div className="oxanium text-2xl font-bold text-cyan-400 mb-2 text-glow">
            INITIALIZING
          </div>
          <div className="inter text-gray-400">
            Preparing the digital frontier...
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 to-violet-500"
          style={{ scaleX: scrollProgress }}
          initial={{ scaleX: 0 }}
          transformOrigin="left"
        />
      </div>

      {/* 3D Scene Background */}
      <div className="fixed inset-0 z-0">
        <Scene currentZone={currentZone} />
      </div>

      {/* Content Sections */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="h-screen relative">
          <AnimatePresence>
            {currentZone === 0 && (
              <HeroSection onCTAClick={handleBeginOdyssey} />
            )}
          </AnimatePresence>
        </section>

        {/* Kits Section */}
        <section className="min-h-screen bg-gradient-to-b from-transparent via-[#0A0E1A]/50 to-[#0A0E1A]/80">
          <KitsZone />
        </section>

        {/* Classes Section */}
        <section className="min-h-screen bg-[#0A0E1A]/90">
          <ClassesZone />
        </section>

        {/* Academy Section */}
        <section className="min-h-screen bg-gradient-to-b from-[#0A0E1A]/90 to-[#0A0E1A]">
          <AcademyZone />
        </section>

        {/* Showcase Section */}
        <section className="min-h-screen bg-[#0A0E1A]">
          <ShowcaseZone />
        </section>

        {/* Footer */}
        <Footer />
      </div>

      {/* Ambient Particles */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default App
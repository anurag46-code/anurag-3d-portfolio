'use client'

import { useScroll, Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const HeroOverlay = () => {
  const scroll = useScroll()
  
  useFrame(() => {
    // This component will be controlled by R3F scroll
    // The opacity logic will be handled in HTMLOverlay
  })

  return (
    <Html
      fullscreen
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 10,
      }}
      className="html-overlay"
    >
      {/* Navigation */}
      <nav className="backdrop-blur-md bg-dark-space/80 border-b border-neon-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-orbitron text-neon-blue">
              Anurag
            </div>

            {/* Navigation Items */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Skills', 'Projects', 'Achievements', 'Education', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-neon-blue transition-colors duration-300 font-exo"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-md text-gray-300 hover:text-neon-blue">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-full flex items-center justify-center relative">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black mb-6">
            <span className="neon-text">ANU</span>
            <span className="neon-purple">RAG</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-exo font-light mb-8 text-gray-300">
            <span className="neon-green">Software Developer</span> & <span className="neon-text">Cloud Architect</span>
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl font-exo font-medium mb-12 max-w-4xl mx-auto text-gray-400">
            Building scalable cloud solutions with <span className="neon-text">AWS</span>, <span className="neon-purple">Kubernetes</span>, 
            and <span className="neon-green">modern web technologies</span>
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-orbitron font-bold neon-text mb-2">8.94</div>
              <div className="text-sm md:text-base font-exo text-gray-400">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-orbitron font-bold neon-purple mb-2">4★</div>
              <div className="text-sm md:text-base font-exo text-gray-400">CodeChef</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-orbitron font-bold neon-green mb-2">AWS</div>
              <div className="text-sm md:text-base font-exo text-gray-400">Certified</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-neon-blue text-dark-space font-exo font-semibold rounded-lg glow-on-hover">
              View My Work
            </button>
            <button className="px-8 py-3 border-2 border-neon-purple text-neon-purple font-exo font-semibold rounded-lg glow-on-hover">
              My Experience
            </button>
          </div>
        </div>
      </section>
    </Html>
  )
}

export default HeroOverlay
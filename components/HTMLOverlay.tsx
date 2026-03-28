'use client'

import { motion } from 'framer-motion'

const HTMLOverlay = () => {
  
  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <div className="html-overlay">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-md bg-dark-space/80 border-b border-neon-blue/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-2xl font-orbitron text-neon-blue"
            >
              Anurag
            </motion.div>

            {/* Navigation Items */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.1, color: '#00f5ff' }}
                  className="text-gray-300 hover:text-neon-blue transition-colors duration-300 font-exo"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-neon-blue"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="neon-text">ANU</span>
            <span className="neon-purple">RAG</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl font-exo font-light mb-8 text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="neon-green">Software Developer</span> & <span className="neon-text">Cloud Architect</span>
          </motion.h2>

          {/* Tagline */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl font-exo font-medium mb-12 max-w-4xl mx-auto text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Building scalable cloud solutions with <span className="neon-text">AWS</span>, <span className="neon-purple">Kubernetes</span>, 
            and <span className="neon-green">modern web technologies</span>
          </motion.p>

          {/* Quick Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
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
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <motion.button 
              className="px-8 py-3 bg-neon-blue text-dark-space font-exo font-semibold rounded-lg glow-on-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button 
              className="px-8 py-3 border-2 border-neon-purple text-neon-purple font-exo font-semibold rounded-lg glow-on-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              My Experience
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-neon-blue rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Additional sections that will appear on scroll */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-orbitron neon-text mb-8">Skills Galaxy</h2>
          <p className="text-xl md:text-2xl font-exo text-gray-300">Explore my technical expertise</p>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center relative">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-orbitron neon-purple mb-8">Project Showcases</h2>
          <p className="text-xl md:text-2xl font-exo text-gray-300">Discover my latest creations</p>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center relative">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-orbitron neon-green mb-8">Achievement Orbits</h2>
          <p className="text-xl md:text-2xl font-exo text-gray-300">My journey and accomplishments</p>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center relative">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-orbitron neon-text mb-8">Education Timeline</h2>
          <p className="text-xl md:text-2xl font-exo text-gray-300">Academic and learning journey</p>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center relative">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-orbitron neon-purple mb-8">Contact Section</h2>
          <p className="text-xl md:text-2xl font-exo text-gray-300">Let&apos;s connect and collaborate</p>
        </div>
      </section>
    </div>
  )
}

export default HTMLOverlay
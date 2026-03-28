'use client'

import { useEffect } from 'react'

const ScrollOpacityHandler = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Calculate scroll progress (0 to 1)
      const scrollProgress = scrollY / (documentHeight - windowHeight)
      
      // Fade out overlay as user scrolls down
      const opacity = Math.max(0, 1 - scrollProgress * 2)
      
      // Update CSS variable
      document.documentElement.style.setProperty('--scroll-opacity', opacity.toString())
    }

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Initial calculation
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null // This component doesn't render anything
}

export default ScrollOpacityHandler
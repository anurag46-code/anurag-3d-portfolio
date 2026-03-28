'use client'

import { useEffect } from 'react'

const ScrollOpacityHandler = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Calculate scroll progress (0 to 1) - fade out in first screen height
      const scrollProgress = Math.min(1, scrollY / windowHeight)
      
      // Fade out overlay as user scrolls down (complete fade by 50% scroll)
      const opacity = Math.max(0, 1 - scrollProgress * 2)
      
      // Apply opacity directly to HTML overlay element
      const overlay = document.querySelector('.html-overlay') as HTMLElement
      if (overlay) {
        overlay.style.opacity = opacity.toString()
      }
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
'use client'

import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const HTMLOverlay = () => {
  const scroll = useScroll()
  
  useFrame(() => {
    if (scroll) {
      // Use R3F scroll offset (0-1 range) - same as 3D sections
      const scrollOffset = scroll.offset
      
      // Fade out hero overlay as user scrolls through 3D sections
      // Complete fade by 20% scroll progress (same timing as Skills Galaxy)
      const opacity = Math.max(0, 1 - scrollOffset * 5)
      
      // Apply opacity to the hero overlay
      const heroOverlay = document.querySelector('.html-overlay') as HTMLElement
      if (heroOverlay) {
        heroOverlay.style.opacity = opacity.toString()
      }
      
      console.log('R3F Scroll Offset:', scrollOffset.toFixed(2), 'Hero Opacity:', opacity.toFixed(2))
    }
  })

  // This component doesn't render any 3D content
  // It just controls the hero overlay opacity
  return null
}

export default HTMLOverlay
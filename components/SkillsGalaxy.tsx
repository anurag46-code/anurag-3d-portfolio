'use client'

import React from 'react'
import { Text, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const SkillsGalaxy = () => {
  const scroll = useScroll()
  const groupRef = React.useRef<THREE.Group>(null)
  
  useFrame(() => {
    if (groupRef.current) {
      // Position based on scroll offset (0-1 range)
      const offset = scroll.offset
      
      // Skills section appears between scroll positions 0.0 - 0.2
      const sectionProgress = Math.max(0, Math.min(1, (offset - 0.0) / 0.2))
      
      // Show section when active
      groupRef.current.visible = sectionProgress > 0
      
      if (groupRef.current.visible) {
        groupRef.current.position.z = -2 + sectionProgress * 10 // Move forward as user scrolls
        groupRef.current.scale.setScalar(0.8 + sectionProgress * 0.4) // Scale up as section becomes active
      }
      
      console.log('Skills Galaxy - Scroll offset:', offset.toFixed(2), 'Progress:', sectionProgress.toFixed(2), 'Visible:', groupRef.current.visible)
    }
  })
  
  return (
    <group ref={groupRef} position={[0, 0, -2]}>
      <Text
        color="#ffffff"
        fontSize={0.5}
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 0]}
      >
        SKILLS GALAXY
      </Text>
    </group>
  )
}

export default SkillsGalaxy
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
      const sectionEndProgress = Math.max(0, Math.min(1, (offset - 0.2) / 0.2))
      
      // Only show section when it's active
      groupRef.current.visible = sectionProgress > 0 && sectionEndProgress < 1
      
      if (groupRef.current.visible) {
        groupRef.current.position.z = -5 + sectionProgress * 20 // Move forward as user scrolls
        groupRef.current.scale.setScalar(0.8 + sectionProgress * 0.4) // Scale up as section becomes active
      }
    }
  })
  
  return (
    <group ref={groupRef} position={[0, 0, -5]}>
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
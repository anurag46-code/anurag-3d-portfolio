'use client'

import React from 'react'
import { Text } from '@react-three/drei'

const SkillsGalaxy = () => {
  return (
    <group position={[0, 0, -5]}>
      <Text
        color="#ffffff"
        fontSize={0.5}
        font="/fonts/orbitron.woff"
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
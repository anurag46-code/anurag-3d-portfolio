'use client'

import React from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Float } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'

interface Achievement {
  id: number
  title: string
  description: string
  year: number
  icon: string
  orbitRadius: number
  orbitSpeed: number
  color: string
}

const AchievementOrbits = () => {
  const groupRef = useRef<THREE.Group>(null)
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(null)

  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'Hackathon Winner',
      description: '1st place in National Coding Competition',
      year: 2024,
      icon: '🏆',
      orbitRadius: 3,
      orbitSpeed: 0.5,
      color: '#ffd700'
    },
    {
      id: 2,
      title: 'Open Source',
      description: '500+ GitHub stars across projects',
      year: 2023,
      icon: '⭐',
      orbitRadius: 2.5,
      orbitSpeed: 0.7,
      color: '#00f5ff'
    },
    {
      id: 3,
      title: 'Tech Speaker',
      description: 'Presented at International Conference',
      year: 2024,
      icon: '🎤',
      orbitRadius: 2,
      orbitSpeed: 0.9,
      color: '#9d4edd'
    },
    {
      id: 4,
      title: 'Mentorship',
      description: 'Trained 50+ junior developers',
      year: 2023,
      icon: '👨‍🏫',
      orbitRadius: 3.5,
      orbitSpeed: 0.4,
      color: '#00ff88'
    }
  ]

  useFrame(({ clock }) => {
    if (groupRef.current) {
      achievements.forEach((achievement, index) => {
        const angle = clock.elapsedTime * achievement.orbitSpeed
        const x = Math.cos(angle) * achievement.orbitRadius
        const z = Math.sin(angle) * achievement.orbitRadius
        
        const achievementGroup = groupRef.current!.children[index + 1] as THREE.Group
        if (achievementGroup) {
          achievementGroup.position.x = x
          achievementGroup.position.z = z
          achievementGroup.rotation.y = angle
        }
      })
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, -15]}>
      {/* Center Title */}
      <Text
        color="#ffffff"
        fontSize={0.5}
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 0]}
      >
        ACHIEVEMENTS
      </Text>

      {/* Achievement Orbits */}
      {achievements.map((achievement) => (
        <Float key={achievement.id} speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <group
            onPointerEnter={() => setHoveredAchievement(achievement.id)}
            onPointerLeave={() => setHoveredAchievement(null)}
          >
            {/* Achievement Trophy */}
            <mesh scale={hoveredAchievement === achievement.id ? 1.5 : 1}>
              <torusGeometry args={[0.3, 0.1, 16, 32]} />
              <meshStandardMaterial 
                color={achievement.color}
                emissive={achievement.color}
                emissiveIntensity={0.3}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>

            {/* Achievement Icon */}
            <Text
              color="#ffffff"
              fontSize={0.2}
              anchorX="center"
              anchorY="middle"
              position={[0, 0, 0]}
            >
              {achievement.icon}
            </Text>

            {/* Achievement Title */}
            <Text
              color="#ffffff"
              fontSize={0.1}
              anchorX="center"
              anchorY="top"
              position={[0, -0.5, 0]}
              maxWidth={2}
            >
              {achievement.title}
            </Text>

            {/* Year */}
            <Text
              color={achievement.color}
              fontSize={0.08}
              anchorX="center"
              anchorY="top"
              position={[0, -0.7, 0]}
            >
              {achievement.year}
            </Text>

            {/* Hover Description */}
            {hoveredAchievement === achievement.id && (
              <Text
                color="#ffffff"
                fontSize={0.07}
                anchorX="center"
                anchorY="top"
                position={[0, -1, 0]}
                maxWidth={2.5}
                lineHeight={1.3}
              >
                {achievement.description}
              </Text>
            )}

            {/* Orbit Path */}
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <ringGeometry args={[achievement.orbitRadius - 0.1, achievement.orbitRadius + 0.1, 64]} />
              <meshBasicMaterial 
                color={achievement.color}
                transparent
                opacity={0.1}
                side={THREE.DoubleSide}
              />
            </mesh>
          </group>
        </Float>
      ))}

      {/* Central Light */}
      <pointLight 
        color="#ffffff" 
        intensity={1} 
        distance={10} 
        position={[0, 0, 0]} 
      />

      {/* Floating Particles */}
      {Array.from({ length: 100 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20
          ]}
          scale={Math.random() * 0.02}
        >
          <sphereGeometry args={[0.05, 4, 4]} />
          <meshBasicMaterial 
            color={i % 4 === 0 ? '#ffd700' : i % 4 === 1 ? '#00f5ff' : i % 4 === 2 ? '#9d4edd' : '#00ff88'}
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  )
}

export default AchievementOrbits
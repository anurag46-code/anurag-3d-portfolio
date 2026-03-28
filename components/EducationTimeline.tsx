'use client'

import React from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Float, useScroll } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'

interface Education {
  id: number
  degree: string
  institution: string
  year: string
  description: string
  position: [number, number, number]
  color: string
}

const EducationTimeline = () => {
  const groupRef = useRef<THREE.Group>(null)
  const scroll = useScroll()
  const [hoveredEducation, setHoveredEducation] = useState<number | null>(null)

  const education: Education[] = [
    {
      id: 1,
      degree: 'Bachelor of Technology',
      institution: 'Computer Science Engineering',
      year: '2020-2024',
      description: 'Specialized in AI and Machine Learning',
      position: [-4, 0, 0],
      color: '#00f5ff'
    },
    {
      id: 2,
      degree: 'Full Stack Development',
      institution: 'Advanced Certification',
      year: '2023',
      description: 'MERN Stack with Cloud Deployment',
      position: [-2, 1, 0],
      color: '#9d4edd'
    },
    {
      id: 3,
      degree: 'Machine Learning',
      institution: 'Specialization Course',
      year: '2022',
      description: 'Deep Learning and Neural Networks',
      position: [0, 2, 0],
      color: '#00ff88'
    },
    {
      id: 4,
      degree: 'Cloud Computing',
      institution: 'AWS Certification',
      year: '2024',
      description: 'AWS Services and Infrastructure',
      position: [2, 1, 0],
      color: '#ffd700'
    },
    {
      id: 5,
      degree: 'Data Structures',
      institution: 'Advanced Algorithms',
      year: '2021',
      description: 'Competitive Programming Focus',
      position: [4, 0, 0],
      color: '#ff6b6b'
    }
  ]

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Position based on scroll offset (0-1 range)
      const offset = scroll.offset
      // Education section appears between scroll positions 0.6 - 0.8
      const sectionProgress = Math.max(0, Math.min(1, (offset - 0.6) / 0.2))
      groupRef.current.position.z = -20 + sectionProgress * 20 // Move forward as user scrolls
      groupRef.current.scale.setScalar(0.8 + sectionProgress * 0.4) // Scale up as section becomes active
      groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.1) * 0.05
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, -20]}>
      {/* Section Title */}
      <Text
        color="#ffffff"
        fontSize={0.5}
        anchorX="center"
        anchorY="middle"
        position={[0, 3, 0]}
      >
        EDUCATION TIMELINE
      </Text>

      {/* Timeline Path */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <tubeGeometry args={[
          new THREE.CatmullRomCurve3([
            new THREE.Vector3(-5, -1, 0),
            new THREE.Vector3(-3, 0, 0),
            new THREE.Vector3(-1, 1, 0),
            new THREE.Vector3(1, 2, 0),
            new THREE.Vector3(3, 1, 0),
            new THREE.Vector3(5, 0, 0)
          ]),
          64,
          0.05,
          8,
          false
        ]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
      </mesh>

      {/* Education Nodes */}
      {education.map((edu) => (
        <Float key={edu.id} speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
          <group 
            position={edu.position}
            onPointerEnter={() => setHoveredEducation(edu.id)}
            onPointerLeave={() => setHoveredEducation(null)}
          >
            {/* Education Sphere */}
            <mesh scale={hoveredEducation === edu.id ? 1.3 : 1}>
              <sphereGeometry args={[0.4, 16, 16]} />
              <meshStandardMaterial 
                color={edu.color}
                emissive={edu.color}
                emissiveIntensity={0.2}
                metalness={0.7}
                roughness={0.3}
              />
            </mesh>

            {/* Degree */}
            <Text
              color="#ffffff"
              fontSize={0.08}
              anchorX="center"
              anchorY="bottom"
              position={[0, 0.6, 0]}
              maxWidth={2}
              lineHeight={1.2}
            >
              {edu.degree}
            </Text>

            {/* Institution */}
            <Text
              color={edu.color}
              fontSize={0.06}
              anchorX="center"
              anchorY="top"
              position={[0, -0.5, 0]}
              maxWidth={1.8}
            >
              {edu.institution}
            </Text>

            {/* Year */}
            <Text
              color="#ffffff"
              fontSize={0.05}
              anchorX="center"
              anchorY="top"
              position={[0, -0.7, 0]}
            >
              {edu.year}
            </Text>

            {/* Hover Description */}
            {hoveredEducation === edu.id && (
              <Text
                color="#ffffff"
                fontSize={0.07}
                anchorX="center"
                anchorY="top"
                position={[0, -1.2, 0]}
                maxWidth={2.5}
                lineHeight={1.3}
              >
                {edu.description}
              </Text>
            )}

            {/* Connection Line to Timeline */}
            <line>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  array={new Float32Array([0, -0.4, 0, 0, -1, 0])}
                  count={2}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color={edu.color} transparent opacity={0.5} />
            </line>
          </group>
        </Float>
      ))}

      {/* Animated Progress Indicator */}
      <mesh position={[-5.5, -1, 0]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshBasicMaterial color="#00f5ff" />
      </mesh>

      {/* Floating Knowledge Particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 12,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 2
          ]}
          scale={Math.random() * 0.03}
        >
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshBasicMaterial 
            color={i % 5 === 0 ? '#00f5ff' : i % 5 === 1 ? '#9d4edd' : i % 5 === 2 ? '#00ff88' : i % 5 === 3 ? '#ffd700' : '#ff6b6b'}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  )
}

export default EducationTimeline
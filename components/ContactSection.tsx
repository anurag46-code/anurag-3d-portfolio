'use client'

import React from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Float, useScroll } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'

interface ContactMethod {
  id: number
  platform: string
  handle: string
  url: string
  icon: string
  position: [number, number, number]
  color: string
}

const ContactSection = () => {
  const groupRef = useRef<THREE.Group>(null)
  const scroll = useScroll()
  const [hoveredContact, setHoveredContact] = useState<number | null>(null)

  const contactMethods: ContactMethod[] = [
    {
      id: 1,
      platform: 'Email',
      handle: 'anurag@example.com',
      url: 'mailto:anurag@example.com',
      icon: '📧',
      position: [-3, 1, 0],
      color: '#00f5ff'
    },
    {
      id: 2,
      platform: 'LinkedIn',
      handle: '/in/anurag-dev',
      url: 'https://linkedin.com/in/anurag-dev',
      icon: '💼',
      position: [-1, 2, 0],
      color: '#0077b5'
    },
    {
      id: 3,
      platform: 'GitHub',
      handle: '@anurag-codes',
      url: 'https://github.com/anurag-codes',
      icon: '💻',
      position: [1, 2, 0],
      color: '#6cc644'
    },
    {
      id: 4,
      platform: 'Twitter',
      handle: '@anurag_tweets',
      url: 'https://twitter.com/anurag_tweets',
      icon: '🐦',
      position: [3, 1, 0],
      color: '#1da1f2'
    }
  ]

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Position based on scroll offset (0-1 range)
      const offset = scroll.offset
      // Contact section appears between scroll positions 0.8 - 1.0
      const sectionProgress = Math.max(0, Math.min(1, (offset - 0.8) / 0.2))
      
      // Only show section when it's active
      groupRef.current.visible = sectionProgress > 0
      
      if (groupRef.current.visible) {
        groupRef.current.position.z = -25 + sectionProgress * 20 // Move forward as user scrolls
        groupRef.current.scale.setScalar(0.8 + sectionProgress * 0.4) // Scale up as section becomes active
        groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.05) * 0.1
      }
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, -25]}>
      {/* Section Title */}
      <Text
        color="#ffffff"
        fontSize={0.6}
        anchorX="center"
        anchorY="middle"
        position={[0, 3, 0]}
      >
        GET IN TOUCH
      </Text>

      {/* Contact Form Visualization */}
      <group position={[0, 0, 0]}>
        {/* Form Background */}
        <mesh position={[0, -0.5, -1]} rotation={[0, 0, 0]}>
          <planeGeometry args={[6, 4]} />
          <meshStandardMaterial 
            color="#1a1a2e"
            transparent
            opacity={0.8}
            metalness={0.5}
            roughness={0.3}
          />
        </mesh>

        {/* Form Title */}
        <Text
          color="#00f5ff"
          fontSize={0.2}
          anchorX="center"
          anchorY="top"
          position={[0, 1.5, -0.5]}
        >
          SEND A MESSAGE
        </Text>

        {/* Form Fields */}
        {['Name', 'Email', 'Message'].map((field, index) => (
          <mesh key={field} position={[0, 0.5 - index * 0.8, -0.5]}>
            <planeGeometry args={[4, 0.3]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
            <Text
              color="#9d4edd"
              fontSize={0.08}
              anchorX="left"
              anchorY="middle"
              position={[-1.8, 0, 0.01]}
            >
              {field}:
            </Text>
          </mesh>
        ))}

        {/* Submit Button */}
        <mesh position={[0, -1.5, -0.5]}>
          <planeGeometry args={[1.5, 0.4]} />
          <meshBasicMaterial color="#00ff88" transparent opacity={0.8} />
          <Text
            color="#0a0a0f"
            fontSize={0.1}
            anchorX="center"
            anchorY="middle"
            position={[0, 0, 0.01]}
          >
            SEND MESSAGE
          </Text>
        </mesh>
      </group>

      {/* Contact Methods */}
      {contactMethods.map((contact) => (
        <Float key={contact.id} speed={2} rotationIntensity={0.4} floatIntensity={1}>
          <group
            position={contact.position}
            onPointerEnter={() => setHoveredContact(contact.id)}
            onPointerLeave={() => setHoveredContact(null)}
          >
            {/* Contact Platform */}
            <mesh scale={hoveredContact === contact.id ? 1.4 : 1}>
              <octahedronGeometry args={[0.3, 0]} />
              <meshStandardMaterial 
                color={contact.color}
                emissive={contact.color}
                emissiveIntensity={0.3}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>

            {/* Platform Icon */}
            <Text
              color="#ffffff"
              fontSize={0.15}
              anchorX="center"
              anchorY="middle"
              position={[0, 0, 0.1]}
            >
              {contact.icon}
            </Text>

            {/* Platform Name */}
            <Text
              color="#ffffff"
              fontSize={0.08}
              anchorX="center"
              anchorY="bottom"
              position={[0, 0.5, 0]}
            >
              {contact.platform}
            </Text>

            {/* Handle */}
            <Text
              color={contact.color}
              fontSize={0.06}
              anchorX="center"
              anchorY="top"
              position={[0, -0.4, 0]}
              maxWidth={1.5}
            >
              {contact.handle}
            </Text>

            {/* Hover Action */}
            {hoveredContact === contact.id && (
              <mesh position={[0, -0.8, 0]}>
                <planeGeometry args={[1.2, 0.3]} />
                <meshBasicMaterial color="#00f5ff" transparent opacity={0.6} />
                <Text
                  color="#0a0a0f"
                  fontSize={0.07}
                  anchorX="center"
                  anchorY="middle"
                  position={[0, 0, 0.01]}
                >
                  CLICK TO CONNECT
                </Text>
              </mesh>
            )}

            {/* Connection Line to Form */}
            <line>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  array={new Float32Array([
                    ...contact.position,
                    0, -0.5, -1
                  ])}
                  count={2}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color={contact.color} transparent opacity={0.3} />
            </line>
          </group>
        </Float>
      ))}

      {/* Background Particles */}
      {Array.from({ length: 80 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 10 - 30
          ]}
          scale={Math.random() * 0.02}
        >
          <sphereGeometry args={[0.05, 4, 4]} />
          <meshBasicMaterial 
            color={i % 4 === 0 ? '#00f5ff' : i % 4 === 1 ? '#9d4edd' : i % 4 === 2 ? '#00ff88' : '#ffd700'}
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}

      {/* Call to Action */}
      <Text
        color="#ffffff"
        fontSize={0.15}
        anchorX="center"
        anchorY="middle"
        position={[0, -2.5, 0]}
        maxWidth={8}
        lineHeight={1.5}
        textAlign="center"
      >
        Ready to bring your ideas to life?
        Let&apos;s create something amazing together!
      </Text>
    </group>
  )
}

export default ContactSection
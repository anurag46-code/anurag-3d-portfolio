'use client'

import React from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Float } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  demoUrl: string
  position: [number, number, number]
  rotation: [number, number, number]
}

const ProjectShowcases = () => {
  const groupRef = useRef<THREE.Group>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory',
      tech: ['React', 'Node.js', 'MongoDB'],
      demoUrl: '#',
      position: [-3, 0, 0],
      rotation: [0, 0.2, 0]
    },
    {
      id: 2,
      title: '3D Portfolio',
      description: 'Interactive 3D portfolio with smooth animations',
      tech: ['Three.js', 'React', 'Framer Motion'],
      demoUrl: '#',
      position: [0, 0, 0],
      rotation: [0, 0, 0]
    },
    {
      id: 3,
      title: 'AI Assistant',
      description: 'Intelligent chatbot with natural language processing',
      tech: ['Python', 'TensorFlow', 'FastAPI'],
      demoUrl: '#',
      position: [3, 0, 0],
      rotation: [0, -0.2, 0]
    }
  ]

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, -10]}>
      {/* Section Title */}
      <Text
        color="#ffffff"
        fontSize={0.5}
        anchorX="center"
        anchorY="middle"
        position={[0, 3, 0]}
      >
        PROJECT SHOWCASE
      </Text>

      {/* Projects */}
      {projects.map((project) => (
        <Float key={project.id} speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
          <group 
            position={project.position}
            rotation={project.rotation}
            onPointerEnter={() => setHoveredProject(project.id)}
            onPointerLeave={() => setHoveredProject(null)}
          >
            {/* Project Cube */}
            <mesh scale={hoveredProject === project.id ? [1.2, 1.2, 1.2] : [1, 1, 1]}>
              <boxGeometry args={[2, 1.5, 0.1]} />
              <meshStandardMaterial 
                color="#1a1a2e"
                metalness={0.8}
                roughness={0.2}
                transparent
                opacity={0.9}
              />
              
              {/* Front Face Content */}
              <mesh position={[0, 0, 0.06]}>
                <planeGeometry args={[1.8, 1.3]} />
                <meshBasicMaterial 
                  color="#00f5ff"
                  transparent
                  opacity={0.1}
                  side={THREE.DoubleSide}
                />
              </mesh>
            </mesh>

            {/* Project Title */}
            <Text
              color="#00f5ff"
              fontSize={0.15}
              anchorX="center"
              anchorY="top"
              position={[0, 0.8, 0.1]}
              maxWidth={1.8}
            >
              {project.title}
            </Text>

            {/* Project Description */}
            <Text
              color="#ffffff"
              fontSize={0.08}
              anchorX="center"
              anchorY="top"
              position={[0, 0.5, 0.1]}
              maxWidth={1.6}
              lineHeight={1.2}
            >
              {project.description}
            </Text>

            {/* Tech Stack */}
            <group position={[0, 0.1, 0.1]}>
              {project.tech.map((tech, index) => (
                <Text
                  key={index}
                  color="#9d4edd"
                  fontSize={0.06}
                  anchorX="center"
                  anchorY="top"
                  position={[0, -index * 0.15, 0]}
                >
                  {tech}
                </Text>
              ))}
            </group>

            {/* Demo Button */}
            <mesh position={[0, -0.6, 0.1]} scale={hoveredProject === project.id ? 1.2 : 1}>
              <planeGeometry args={[0.8, 0.2]} />
              <meshBasicMaterial color="#00ff88" transparent opacity={0.8} />
              <Text
                color="#0a0a0f"
                fontSize={0.08}
                anchorX="center"
                anchorY="middle"
                position={[0, 0, 0.01]}
              >
                LIVE DEMO
              </Text>
            </mesh>

            {/* Hover Effects */}
            {hoveredProject === project.id && (
              <>
                {/* Glow Effect */}
                <pointLight 
                  color="#00f5ff" 
                  intensity={0.5} 
                  distance={5} 
                  position={[0, 0, 1]} 
                />
                
                {/* Connection Lines */}
                <line>
                  <bufferGeometry>
                    <bufferAttribute
                      attach="attributes-position"
                      array={new Float32Array([0, 0, 0, 0, 2, 0])}
                      count={2}
                      itemSize={3}
                    />
                  </bufferGeometry>
                  <lineBasicMaterial color="#00f5ff" transparent opacity={0.5} />
                </line>
              </>
            )}
          </group>
        </Float>
      ))}
    </group>
  )
}

export default ProjectShowcases
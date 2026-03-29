'use client'

import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import { Suspense } from 'react'
import SkillsGalaxy from '../components/SkillsGalaxy'
import ProjectShowcases from '../components/ProjectShowcases'
import AchievementOrbits from '../components/AchievementOrbits'
import EducationTimeline from '../components/EducationTimeline'
import ContactSection from '../components/ContactSection'
import HTMLOverlay from '../components/HTMLOverlay'
import HeroOverlay from '../components/HeroOverlay'

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ overflow: 'hidden' }}>
      {/* 3D Canvas - Single scroll system for everything */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        className="fixed top-0 left-0 w-full h-full"
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#0a0a0f']} />
        <Suspense fallback={null}>
          <ScrollControls pages={6} damping={0.1} distance={1}>
            {/* Hero Overlay - Uses same scroll system */}
            <HeroOverlay />
            
            {/* HTML Overlay Controller - Uses same scroll system */}
            <HTMLOverlay />
            
            {/* Skills Galaxy */}
            <SkillsGalaxy />
            
            {/* Project Showcases */}
            <ProjectShowcases />
            
            {/* Achievement Orbits */}
            <AchievementOrbits />
            
            {/* Education Timeline */}
            <EducationTimeline />
            
            {/* Contact Section */}
            <ContactSection />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </main>
  )
}
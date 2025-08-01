import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { RobotMascot } from './RobotMascot'

interface SceneProps {
  currentZone: number;
  onRobotClick?: () => void;
}

export const Scene = ({ currentZone, onRobotClick }: SceneProps) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        {/* Lighting Setup */}
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#00FFFF" />
        <pointLight position={[-10, -10, -5]} intensity={0.4} color="#8A2BE2" />
        <spotLight
          position={[0, 15, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          color="#00FFFF"
          castShadow
        />

        {/* Environment */}
        <Environment preset="night" />
        
        {/* Main 3D Content */}
        {currentZone === 0 && (
          <>
            <RobotMascot onClick={onRobotClick} />
            <ContactShadows
              position={[0, -1.4, 0]}
              opacity={0.4}
              scale={10}
              blur={1.5}
              far={4.5}
            />
          </>
        )}

        {/* Orbit Controls - Y-axis only for robot */}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={currentZone === 0}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          autoRotate={currentZone === 0}
          autoRotateSpeed={0.5}
        />
      </Suspense>
    </Canvas>
  )
}
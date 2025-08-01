import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, Group } from 'three'
import { useSpring, animated } from '@react-spring/three'

interface RobotMascotProps {
  onClick?: () => void;
}

export const RobotMascot = ({ onClick }: RobotMascotProps) => {
  const groupRef = useRef<Group>(null)
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)

  // Optimized breathing animation with reduced frequency
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime * 0.4 // Reduced frequency for smoother performance
      groupRef.current.position.y = Math.sin(time) * 0.03
      groupRef.current.scale.setScalar(1 + Math.sin(time) * 0.003)
    }
  })

  const { scale, emissiveIntensity } = useSpring({
    scale: hovered ? 1.05 : 1,
    emissiveIntensity: hovered ? 0.2 : 0.05,
    config: { mass: 1, tension: 180, friction: 40 } // Smoother spring config
  })

  return (
    <animated.group
      ref={groupRef}
      scale={scale}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Robot Head */}
      <animated.mesh ref={meshRef} position={[0, 0.8, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <animated.meshStandardMaterial
          color="#2A2A2A"
          emissive="#00FFFF"
          emissiveIntensity={emissiveIntensity}
          metalness={0.8}
          roughness={0.2}
        />
      </animated.mesh>

      {/* Robot Eyes */}
      <mesh position={[-0.25, 0.9, 0.51]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial
          color="#00FFFF"
          emissive="#00FFFF"
          emissiveIntensity={0.8}
        />
      </mesh>
      <mesh position={[0.25, 0.9, 0.51]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial
          color="#00FFFF"
          emissive="#00FFFF"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Robot Body */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.6, 0.8, 1.5, 8]} />
        <meshStandardMaterial
          color="#1A1A1A"
          emissive="#8A2BE2"
          emissiveIntensity={0.1}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Robot Arms */}
      <mesh position={[-1, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
        <cylinderGeometry args={[0.15, 0.15, 1.2, 8]} />
        <meshStandardMaterial
          color="#333333"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
      <mesh position={[1, 0, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <cylinderGeometry args={[0.15, 0.15, 1.2, 8]} />
        <meshStandardMaterial
          color="#333333"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Robot Base */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.3, 16]} />
        <meshStandardMaterial
          color="#0A0E1A"
          emissive="#FFD700"
          emissiveIntensity={0.2}
          metalness={1}
          roughness={0}
        />
      </mesh>
    </animated.group>
  )
}
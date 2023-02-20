import { Points, PointMaterial, OrbitControls } from '@react-three/drei'
import { useFrame, Canvas } from '@react-three/fiber'
import { useRef } from 'react'

const RandomStars = () => {
  const starColor = 'White'

  //THREE.Points<THREE.BufferGeometry, THREE.Material | THREE.Material[]>
  //型不明...
  const ref = useRef<any>() // eslint-disable-line
  const randomPoints = [...Array(3000)].map(() => Math.random() * 2.0 - 1.0)
  const sphere = new Float32Array(randomPoints)

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })
  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} />
      <group>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color={starColor}
            size={0.007}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    </>
  )
}
const Stars = () => {
  return (
    <div className="StarsFrame">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <RandomStars />
      </Canvas>
    </div>
  )
}

export default Stars

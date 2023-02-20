import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { TextureLoader, Vector3 } from 'three'
import IconBoard from './IconBoard'

const MenuPanel = () => {
  const texture = new TextureLoader().load('./chi.png')

  return (
    <Canvas className="MenuPanel">
      <OrbitControls enableZoom={true} enablePan={false} />
      {[...Array(3)].map((_, x) => (
        <IconBoard
          key={x}
          map={texture}
          position={new Vector3((x - 1) * 1.5, 1.5, 0)}
        />
      ))}
      <IconBoard map={texture} position={new Vector3(0, 0, 0)} />
      {[...Array(3)].map((_, x) => (
        <IconBoard
          key={x + 3}
          map={texture}
          position={new Vector3((x - 1) * 1.5, -1.5, 0)}
        />
      ))}
    </Canvas>
  )
}

export default MenuPanel

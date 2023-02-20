import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Texture, Vector3 } from 'three'

type IconBoardType = {
  map: Texture
  position: Vector3
}

const IconBoard = (props: IconBoardType) => {
  const iconRef = useRef<any>() // eslint-disable-line
  const [hover, setHover] = useState(false)
  const [click, setClick] = useState(false)

  const maxRad = Math.PI * 2

  useFrame(() => {
    const rotZ = iconRef.current.rotation.z
    if (hover) {
      iconRef.current.rotation.z = rotZ < maxRad ? rotZ + 0.03 : maxRad
    } else {
      iconRef.current.rotation.z = rotZ > 0.0 ? rotZ - 0.05 : 0.0
    }
    if (click) {
      iconRef.current.rotation.y += 0.04
      if (iconRef.current.rotation.y > maxRad) {
        iconRef.current.rotation.y = 0
        setClick(false)
      }
    }
  })

  return (
    <mesh
      position={props.position}
      ref={iconRef}
      onPointerOver={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      onClick={() => setClick(true)}
    >
      <boxGeometry args={[1, 1, 0.05]} />
      <meshBasicMaterial map={props.map} />
    </mesh>
  )
}

export default IconBoard

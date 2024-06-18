/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 coffee_cup.gltf 
Author: Elen (https://sketchfab.com/Kitty999)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/cup-of-cappuccino-04f2c34a3df94e58be97c2830e7e462a
Title: Cup of cappuccino
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/coffee_cup.gltf')

  const [hovered, setHover] = useState(false)

  const mesh = useRef()
  useFrame (() => (mesh.current.rotation.y += 0.01))

  return (
    <group {...props} dispose={null}>
      <group scale={5}>
        <mesh geometry={nodes.Object_5.geometry} material={materials.Marshmallow} position={[-0.095, 0.299, 0.092]} rotation={[-0.057, -0.653, 0.23]} scale={3.304} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Marshmallow} position={[-0.111, 0.03, 0.112]} rotation={[0.491, -0.957, -0.152]} scale={3.304} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Marshmallow} position={[-0.184, 0.03, 0.099]} rotation={[-0.704, 0.788, 0.249]} scale={3.304} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.Marshmallow} position={[-0.201, 0.031, 0.021]} rotation={[-0.786, 0.589, 0.512]} scale={3.304} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Marshmallow} position={[0.035, 0.3, 0.144]} rotation={[-1.391, 1.329, 1.736]} scale={3.304} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.Marshmallow} position={[-0.14, 0.293, 0.009]} rotation={[0.164, 0.274, 0.07]} scale={3.304} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.Marshmallow} position={[-0.075, 0.305, 0.021]} rotation={[3.128, -0.671, -2.402]} scale={3.304} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.Marshmallow} position={[-0.126, 0.293, -0.076]} rotation={[-0.482, -1.036, -0.421]} scale={3.304} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.Marshmallow} position={[-0.079, 0.301, -0.05]} rotation={[-2.432, 0.065, 3.128]} scale={3.304} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.Marshmallow} position={[-0.031, 0.291, -0.149]} rotation={[-1.424, 1.261, 0.864]} scale={3.304} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.Marshmallow} position={[0.039, 0.031, 0.175]} rotation={[-1.116, -0.397, 0.248]} scale={3.304} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.Marshmallow} position={[-0.032, 0.03, 0.195]} rotation={[-2.15, 1.329, 1.736]} scale={3.304} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.Marshmallow} position={[-0.125, 0.033, 0.182]} rotation={[-2.131, 1.329, 1.736]} scale={3.304} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.Coffee} position={[0.002, 0.272, 0]} rotation={[-Math.PI, 1.031, -Math.PI]} 
           /*onClick={(event) => setActive(!active)}*/ 
           onPointerOver={(event) => setHover(true)}
           onPointerOut={(event) => setHover(false)}
           scale = {hovered ? 3.5 : 3.304}
         />
        <mesh ref={mesh} geometry={nodes.Object_33.geometry} material={materials.material} position={[0.001, 0.017, 0]}
          /*onClick={(event) => setActive(!active)}*/ 
          onPointerOver={(event) => setHover(true)}
          onPointerOut={(event) => setHover(false)}
          scale = {hovered ? 3.5 : 3.304}
        />
        <mesh ref={mesh} geometry={nodes.Object_35.geometry} material={materials.Plate} position={[0.002, 0, 0.001]} 
          onPointerOver={(event) => setHover(true)}
          onPointerOut={(event) => setHover(false)}
          scale = {hovered ? 3.5 : 3.304}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/coffee_cup.gltf')

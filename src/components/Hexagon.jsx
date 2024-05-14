/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/hexagon.glb -o src/components/Hexagon.jsx -r public
*/

import { useGLTF } from "@react-three/drei";
import React from "react";
import { Color } from "three";
import { MathUtils, randFloat, randInt } from "three/src/math/MathUtils.js";

export function Hexagon({ color, ...props }) {
  const { nodes, materials } = useGLTF("/models/hexagon.glb", "draco/gltf/");

  return (
    <group {...props}>
      <mesh geometry={nodes.Hexagon.geometry} material={materials.hexagon}>
        <meshStandardMaterial
          {...materials.hexagon}
          color={color}
          transparent
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/hexagon.glb", "draco/gltf/");

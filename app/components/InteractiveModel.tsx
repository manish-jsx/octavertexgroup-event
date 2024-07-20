"use client"
import { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import Model from './Model';

const InteractiveModel = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <mesh onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} scale={hovered ? 1.2 : 1}>
      <Model path="/models/your-model.glb" />
    </mesh>
  );
};

export default InteractiveModel;

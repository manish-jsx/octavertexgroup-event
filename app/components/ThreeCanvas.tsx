"use client"; // Add this line
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import InteractiveModel from './InteractiveModel';

const ThreeCanvas = () => (
  <Canvas>
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    <InteractiveModel />
    <OrbitControls />
  </Canvas>
);

export default ThreeCanvas;

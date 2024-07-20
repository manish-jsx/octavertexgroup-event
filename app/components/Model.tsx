import { useGLTF } from '@react-three/drei';

function Model({ path }: { path: string }) {
  const { nodes, materials } = useGLTF(path);
  return <primitive object={nodes.scene} material={materials.default} />;
}

export default Model;

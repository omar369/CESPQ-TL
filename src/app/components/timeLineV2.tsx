import { useGLTF } from '@react-three/drei';
import { Mesh } from 'three';

type TimeLineV2Props = {
  position: [number, number, number];
};

export function TimeLineV2({ position }: TimeLineV2Props) {
  const { nodes, materials } = useGLTF('/models/TL-DEF.glb');

  const planeGeometry = (nodes.Plane006 as Mesh).geometry;
  const material = materials['Material.001'];

  return (
    <group position={position}>
      <mesh geometry={planeGeometry} material={material} />
    </group>
  );
}

useGLTF.preload('/models/TL-DEF.glb');

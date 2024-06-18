// Scene.tsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Plane,
  Float,
  Box,
  Sphere,
  MeshWobbleMaterial,
} from '@react-three/drei';
import Camera from './camera';
import Lights from './lights';
import SceneEnvironment from './environment';
import { PoliceLights } from './models/luz-blanca';

const Scene: React.FC = () => {
  return (
    <div className="w-[100%] h-[100vh]">
      <Canvas>
        <Camera />
        <Lights />
        <SceneEnvironment />

        {/* Animaciones */}
        <PoliceLights modelPath={'models/TL-2.glb'} />

        {/* Objetos */}
        <Plane
          args={[10, 10]}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
        >
          <meshStandardMaterial attach="material" color="#7f7f7f" />
        </Plane>
      </Canvas>
    </div>
  );
};

export default Scene;

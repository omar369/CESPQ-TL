// Scene.tsx
import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Plane, useVideoTexture, OrbitControls } from '@react-three/drei';
import Camera from './camera';
import Lights from './lights';
import SceneEnvironment from './environment';
import { PoliceLights } from './models/luz-blanca';
import Card from './ui/card';

// const VideoPlane: React.FC = () => {
//   // const videoRef = useRef<HTMLVideoElement>(null);

//   const texture = useVideoTexture('./textures/video/uno.mp4', {
//     start: true,
//     loop: true,
//     muted: true,
//     ref: videoRef,
//   });

//   return (
//     <Plane
//       args={[10, 10]}
//       rotation={[0, Math.PI / -4, 0]}
//       position={[0, 0, 0]}
//       scale={0.2}
//     >
//       <meshStandardMaterial attach="material" map={texture} />
//     </Plane>
//   );
// };

const Scene: React.FC = () => {
  return (
    <div className="w-[100%] h-[100vh]">
      <Canvas>
        <Camera />
        <Lights />
        <SceneEnvironment />
        {/* <OrbitControls /> */}

        {/* Video plane */}
        {/* <VideoPlane /> */}

        {/* Animaciones */}
        <PoliceLights modelPath={'models/TL-2.glb'} position={[0, 0, 0]} />
        <Card
          width={0.32}
          height={0.56}
          metalness={0.7}
          roughness={0.3}
          position={[-2.08, 0.55, 0.8]}
          text=".l."
        />
        <Card
          width={0.32}
          height={0.68}
          metalness={0.7}
          roughness={0.3}
          position={[-2.08, -0.4, 0.8]}
          text=";D"
        />
      </Canvas>
    </div>
  );
};

export default Scene;

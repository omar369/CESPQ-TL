import { Canvas } from '@react-three/fiber';
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import { Timeline } from './timeline';

export default function Scene() {
  return (
    <div className="w-[100%] h-[100vh]">
      <Canvas>
        <PerspectiveCamera //camera 1
          position={[-2.03, -0.05, 6.5]}
          rotation={[0, 0, Math.PI / 2]} // Rotate camera 90 degrees
          fov={9}
          near={0.1}
          far={1000}
          // makeDefault
        />
        <PerspectiveCamera //camera 2
          position={[-0.98, -0.05, 6.5]}
          rotation={[0, 0, Math.PI / 2]}
          fov={9}
          near={0.1}
          far={1000}
          // makeDefault
        />
        <PerspectiveCamera //camera 3
          position={[0.05, -0.05, 6.5]}
          rotation={[0, 0, Math.PI / 2]}
          fov={9}
          near={0.1}
          far={1000}
          // makeDefault
        />
        <PerspectiveCamera //camera 4
          position={[1.1, -0.05, 6.5]}
          rotation={[0, 0, Math.PI / 2]}
          fov={9}
          near={0.1}
          far={1000}
          // makeDefault
        />
        <PerspectiveCamera //camera 5
          position={[2.1, -0.05, 6.5]}
          rotation={[0, 0, Math.PI / 2]}
          fov={9}
          near={0.1}
          far={1000}
          makeDefault
        />
        <Timeline modelPath={'/models/timelineCompleto.glb'} />
        <OrbitControls />
        <Environment
          preset="apartment"
          background
          backgroundIntensity={1}
          environmentIntensity={0.1}
        />
      </Canvas>
    </div>
  );
}

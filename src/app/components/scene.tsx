import { Canvas } from '@react-three/fiber';
import {
  OrthographicCamera,
  Environment,
  ContactShadows,
  Sky,
  Stars,
  SpotLight,
  Box,
  Sphere,
  Plane,
  Float,
  MeshWobbleMaterial,
} from '@react-three/drei';
import { TimeLineV2 } from './timeLineV2';
import { LuzBlanca } from './models/luz-blanca';

export default function Scene() {
  return (
    <div className="w-[100%] h-[100vh]">
      <Canvas>
        {/* Cámara Ortográfica */}
        <OrthographicCamera
          position={[-1.81, 0.04, 1]}
          rotation={[0, 0, Math.PI / -2]}
          zoom={900}
          near={0.01}
          far={10000}
          makeDefault
        />

        {/* Entorno */}
        <Environment preset="sunset" />

        {/* Luces */}
        <spotLight
          position={[5, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={0.8}
          castShadow
        />

        {/* Sombras de Contacto */}
        <ContactShadows
          position={[0, -0.8, 0]}
          opacity={0.5}
          width={10}
          height={10}
          blur={2}
          far={20}
        />

        {/* Cielo */}
        <Sky sunPosition={[100, 20, 100]} />

        {/* Estrellas */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />

        {/* Objetos */}

        <LuzBlanca modelPath={'models/TL-2.glb'} />

        {/* <Float speed={1} rotationIntensity={1} floatIntensity={2}>
          <Box args={[1, 1, 1]} position={[-2, 0.5, -1]}>
            <MeshWobbleMaterial
              attach="material"
              color="red"
              speed={1}
              factor={0.6}
            />
          </Box>
          <Sphere args={[0.5, 32, 32]} position={[2, 0.5, -1]}>
            <MeshWobbleMaterial
              attach="material"
              color="blue"
              speed={1}
              factor={0.6}
            />
          </Sphere>
        </Float> */}

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
}

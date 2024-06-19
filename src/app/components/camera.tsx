// Camera.tsx
import React, { useRef, useEffect } from 'react';
import { OrthographicCamera } from '@react-three/drei';
import * as dat from 'dat.gui';
import * as THREE from 'three';

const Camera: React.FC = React.memo(() => {
  const posX = -1.81;
  const posY = 0.04;
  const posZ = 1;
  const camera = useRef<THREE.OrthographicCamera>(null!);

  // INICIA DAT GUI
  useEffect(() => {
    const gui = new dat.GUI({ width: 400 });
    const debugObject = {
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
    };
    gui
      .add(debugObject.position, 'x')
      .min(-4)
      .max(4)
      .step(0.001)
      .onChange(() => {
        if (camera.current) {
          camera.current.position.x = debugObject.position.x;
        }
      });

    gui
      .add(debugObject.position, 'y')
      .min(-4)
      .max(4)
      .step(0.001)
      .onChange(() => {
        if (camera.current) {
          camera.current.position.y = debugObject.position.y;
        }
      });

    return () => {
      gui.destroy();
    };
  }, []);

  return (
    <OrthographicCamera
      ref={camera}
      position={[posX, posY, posZ]}
      rotation={[0, 0, Math.PI / -2]}
      zoom={800}
      near={0.01}
      far={10000}
      makeDefault
      castShadow={false}
    />
  );
});

Camera.displayName = 'Camera';

export default Camera;

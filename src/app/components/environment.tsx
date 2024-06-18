import React from 'react';
import { Environment, ContactShadows, Sky, Stars } from '@react-three/drei';

const SceneEnvironment: React.FC = React.memo(() => {
  return (
    <>
      <Environment preset="sunset" />
      <ContactShadows
        position={[0, -0.8, 0]}
        opacity={0.5}
        width={10}
        height={10}
        blur={2}
        far={20}
      />
      <Sky sunPosition={[100, 20, 100]} />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
    </>
  );
});

SceneEnvironment.displayName = 'SceneEnvironment';

export default SceneEnvironment;

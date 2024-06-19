// Lights.tsx
import React from 'react';
import { SpotLight } from '@react-three/drei';

const Lights: React.FC = React.memo(() => {
  return (
    <>
      <SpotLight
        position={[5, 5, 5]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        castShadow={false}
      />
    </>
  );
});

Lights.displayName = 'Lights';

export default Lights;

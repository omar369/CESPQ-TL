// Camera.tsx
import React from 'react';
import { OrthographicCamera } from '@react-three/drei';

const Camera: React.FC = React.memo(() => {
  return (
    <OrthographicCamera
      position={[-1.81, 0.04, 1]}
      rotation={[0, 0, Math.PI / -2]}
      zoom={800}
      near={0.01}
      far={10000}
      makeDefault
    />
  );
});

Camera.displayName = 'Camera';

export default Camera;

import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { useAnimations } from '@react-three/drei';

export interface ModelProps {
  modelPath: string;
}

export const PoliceLights: React.FC<ModelProps> = ({ modelPath }) => {
  const gltf = useLoader(GLTFLoader, modelPath, (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(
      'https://cdn.jsdelivr.net/npm/three@0.138.0/examples/js/libs/draco/'
    );
    loader.setDRACOLoader(dracoLoader);
  });
  console.log(gltf.animations);

  // Ref to access animations
  const actions = useAnimations(gltf.animations!, gltf.scene);
  for (const action in actions.actions) {
    actions.actions[action]?.play();
  }

  return <primitive object={gltf.scene} />;
};

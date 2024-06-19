import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { useAnimations } from '@react-three/drei';
import * as dat from 'dat.gui';

export interface ModelProps {
  modelPath: string;
  position: [number, number, number];
}

export const PoliceLights: React.FC<ModelProps> = ({ modelPath, position }) => {
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

  return (
    <primitive object={gltf.scene} position={position} castShadow={false} />
  );
};

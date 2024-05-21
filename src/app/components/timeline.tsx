import { useLoader } from '@react-three/fiber';
import { useAnimations } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

export interface ModelProps {
  modelPath: string;
}

export const Timeline: React.FC<ModelProps> = ({
  modelPath,
}): React.ReactNode => {
  const gltf = useLoader(GLTFLoader, modelPath);
  //   console.log(gltf.animations);
  const animation = useAnimations(gltf.animations!, gltf.scene);
  for (const action in animation.actions) {
    animation.actions[action]?.play();
  }

  return <primitive object={gltf.scene} />;
};

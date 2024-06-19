// Card.tsx
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three'; // Importar THREE
import { Text } from '@react-three/drei';
import { gsap } from 'gsap';

interface CardProps {
  width?: number;
  height?: number;
  metalness?: number;
  roughness?: number;
  position?: [number, number, number];
  text?: string;
}

const Card: React.FC<CardProps> = ({
  width = 1,
  height = 2,
  metalness = 0.5,
  roughness = 0.5,
  position = [0, 0, 0],
  text = 'Hello World',
}) => {
  const cardRef = useRef<THREE.Mesh>(null);
  const [flipped, setFlipped] = useState(false);

  const handlePointerDown = () => {
    setFlipped(!flipped);
    if (cardRef.current) {
      gsap.to(cardRef.current.rotation, {
        y: flipped ? 0 : Math.PI,
        duration: 1,
        ease: 'power2.inOut',
      });
    }
  };

  useFrame(() => {
    if (cardRef.current) {
      // Continuously update the component if needed
    }
  });

  return (
    <mesh
      ref={cardRef}
      onPointerDown={handlePointerDown}
      onTouchStart={handlePointerDown}
      position={position}
    >
      <boxGeometry args={[width, height, 0.01]} />
      <meshStandardMaterial metalness={metalness} roughness={roughness} />
      <Text
        position={[0, 0, 0.06]} // Slightly in front of the plane to prevent z-fighting
        fontSize={0.2}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </mesh>
  );
};

const CardScene: React.FC<CardProps> = (props) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Card {...props} />
    </Canvas>
  );
};

export default CardScene;

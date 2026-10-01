import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
} from "@react-three/drei";


function Core() {
  const group = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    group.current.rotation.x = Math.sin(time * 0.4) * 0.18;
    group.current.rotation.y += 0.006;

    group.current.position.y =
      Math.sin(time * 0.8) * 0.08;
  });

  return (
    <group ref={group}>

      {/* Main glowing core */}

      <Sphere args={[1.05, 64, 64]}>

        <MeshDistortMaterial
          color="#7c3aed"
          emissive="#4c1d95"
          emissiveIntensity={1.8}
          roughness={0.18}
          metalness={0.7}
          distort={0.28}
          speed={2}
        />

      </Sphere>


      {/* Inner core */}

      <Sphere args={[0.58, 32, 32]}>

        <meshStandardMaterial
          color="#c4b5fd"
          emissive="#8b5cf6"
          emissiveIntensity={2.5}
          transparent
          opacity={0.7}
        />

      </Sphere>


      {/* Orbit ring 1 */}

      <mesh rotation={[Math.PI / 2.4, 0.2, 0]}>

        <torusGeometry args={[1.45, 0.018, 16, 120]} />

        <meshBasicMaterial
          color="#a78bfa"
          transparent
          opacity={0.8}
        />

      </mesh>


      {/* Orbit ring 2 */}

      <mesh rotation={[0.8, Math.PI / 3, 0.6]}>

        <torusGeometry args={[1.7, 0.012, 16, 120]} />

        <meshBasicMaterial
          color="#7c3aed"
          transparent
          opacity={0.65}
        />

      </mesh>


      {/* Orbit ring 3 */}

      <mesh rotation={[1.2, 0.4, 1]}>

        <torusGeometry args={[1.25, 0.01, 16, 120]} />

        <meshBasicMaterial
          color="#ddd6fe"
          transparent
          opacity={0.5}
        />

      </mesh>

    </group>
  );
}


function FloatingParticles() {

  const group = useRef();

  const particles = [];

  for (let i = 0; i < 35; i++) {

    const angle = Math.random() * Math.PI * 2;
    const radius = 2.2 + Math.random() * 1.7;

    particles.push(
      <mesh
        key={i}
        position={[
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 4,
          Math.sin(angle) * radius,
        ]}
      >

        <sphereGeometry args={[0.018, 8, 8]} />

        <meshBasicMaterial
          color="#a78bfa"
          transparent
          opacity={0.65}
        />

      </mesh>
    );

  }

  useFrame((state) => {

    const time = state.clock.getElapsedTime();

    group.current.rotation.y = time * 0.035;

    group.current.rotation.x =
      Math.sin(time * 0.25) * 0.05;

  });

  return (
    <group ref={group}>
      {particles}
    </group>
  );
}

function Scene() {

  const scene = useRef();

  useFrame((state) => {

    const targetX = state.pointer.x * 0.25;
    const targetY = state.pointer.y * 0.18;

    scene.current.rotation.y +=
      (targetX - scene.current.rotation.y) * 0.025;

    scene.current.rotation.x +=
      (-targetY - scene.current.rotation.x) * 0.025;

  });

  return (
    <group ref={scene}>

      <ambientLight intensity={0.7} />

      <pointLight
        position={[3, 3, 4]}
        intensity={12}
        color="#8b5cf6"
      />

      <pointLight
        position={[-3, -2, 2]}
        intensity={7}
        color="#c4b5fd"
      />

      <Float
        speed={1.5}
        rotationIntensity={0.4}
        floatIntensity={0.6}
      >

        <Core />

      </Float>

      <FloatingParticles />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />

    </group>
  );
}


export default function Hero3D() {

  return (
    <div className="hero-3d">

      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >

        <Scene />

      </Canvas>

    </div>
  );
}
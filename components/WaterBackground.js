'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Environment, Float, Sparkles } from '@react-three/drei';
import { useRef } from 'react';

function WaterOrb() {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.distort = 0.4 + Math.sin(time / 2) * 0.1;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere ref={meshRef} args={[1, 100, 100]} scale={[2, 2, 2]}>
                <MeshDistortMaterial
                    color="#06b6d4"
                    attach="material"
                    distort={0.5} // Strength, 0 disables the effect (default=1)
                    speed={1.5} // Speed (default=1)
                    roughness={0.2}
                    metalness={0.9}
                    transparent
                    opacity={0.6}
                />
            </Sphere>
        </Float>
    );
}

export default function WaterBackground() {
    return (
        <div className="absolute inset-0 -z-10 pointer-events-none opacity-50 overflow-hidden">
            <Canvas camera={{ position: [0, 0, 5] }} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 10]} intensity={2} color="cyan" />
                <pointLight position={[-10, -5, -5]} intensity={5} color="#4ade80" />

                <WaterOrb />

                <Sparkles
                    count={50}
                    scale={6}
                    size={4}
                    speed={0.4}
                    opacity={0.5}
                    color="#ffffff"
                />

                <Environment preset="city" />
            </Canvas>
        </div>
    );
}

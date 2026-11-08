"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function MeshComponent() {
    const mesh = useRef<THREE.Mesh>(null!);

    useFrame((state, delta) => {
        mesh.current.rotation.x += delta * 0.2;
        mesh.current.rotation.y += delta * 0.3;
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh ref={mesh} scale={2.5}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color="#4338ca"
                    roughness={0.3}
                    metalness={0.8}
                    wireframe
                />
            </mesh>
        </Float>
    );
}

export function Scene3D() {
    return (
        <div className="h-[400px] w-full md:h-[600px]">
            <Canvas camera={{ position: [0, 0, 8] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <MeshComponent />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}

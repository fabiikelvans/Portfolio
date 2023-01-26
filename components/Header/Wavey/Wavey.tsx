import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import * as THREE from "three";
import {DoubleSide, Mesh, Vector2} from "three";
import fragmentShader from "./shaders/fragmentShader";
import vertexShader from "./shaders/vertexShader";
import {extend, useFrame, useLoader} from "@react-three/fiber";
import {shaderMaterial, useTexture} from "@react-three/drei";
import  gsap from "gsap";


const WaveShaderMaterial = shaderMaterial(
    // Uniform
    {
        uTime: 0,
        uColor: new THREE.Color(0.0, 0.0, 0.0),
        uTexture: new THREE.Texture(),
        uMouse: new Vector2(0, 0)
    },
    // Vertex Shader
    vertexShader,
    // Fragment Shader
   fragmentShader,
);


extend({ WaveShaderMaterial });



function Wavey() {

    // This reference will give us direct access to the mesh
    const mesh = useRef<Mesh>();
    const material = useRef()
    const mousePosition = useRef({ x: 0, y: 0 });

    // Update Mouse Position
    const updateMousePosition = useCallback((e: any) => {
        mousePosition.current = { x: e.pageX, y: e.pageY };

    }, []);


    useEffect(() => {

        window.addEventListener("mousemove", updateMousePosition, false);


        return () => {
            window.removeEventListener("mousemove", updateMousePosition, false);
        };
    }, [updateMousePosition]);

    // Animate the mesh
    useFrame((state) => {
        const { clock } = state;

        // @ts-ignore
       mesh.current.material.uniforms.uTime.value = clock.getElapsedTime();

    });


    // Load Image Texture
    const [image] = useLoader(THREE.TextureLoader, [
        "/images/flag.webp"
    ]);


    // @ts-ignore
    return (
        <>
            <mesh   // @ts-ignore
                ref={mesh}
                position={[0, 0, 0]}
                scale={8}
            >
                <planeGeometry args={[0.8, 0.5, 100, 100]} />
                {/*@ts-ignore*/}
                <waveShaderMaterial uColor={"hotpink"} ref={material}  uTexture={image} />

            </mesh>
        </>
    );
}

export default Wavey;
import { useFrame } from '@react-three/fiber';
import { button, folder, useControls } from 'leva';
import React, {useEffect, useMemo, useRef} from 'react'
import { MathUtils } from 'three';
import fragmentShader from './shaders/fragmentShader';
import vertexShader from './shaders/vertexShader';
import {isMobile} from "react-device-detect";


function Blob_01() {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const hover = useRef(false);

  // Debug
  const [{ scale, wireframe }, set] = useControls("Blob", 
  () => ({
    transform: folder({
      scale : { 
        value: 1.2,
        min: 0.4, 
        max:3, step: 
        0.2,}
    }),
    material:  folder({
      wireframe: false,
    }),
    
    reset: button(() => {
      set({
        scale: 1.2,
        wireframe: false,
      })
    })
  })
);

  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.3,
      },
      u_time: {
        value: 0.0,
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state; //@ts-ignore
    mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

    //@ts-ignore
    mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp( //@ts-ignore
      mesh.current.material.uniforms.u_intensity.value,
      hover.current ? 0.85 : 0.15,
      0.02
    );
  });

  useEffect(() => {

    if (isMobile) {
      // @ts-ignore
      mesh.current.scale.set(0.8, 0.8, 0.8);
    }
  }, []);

  return (
    <mesh //@ts-ignore
      ref={mesh}
      position={[0, 0, 0]}
      scale={scale}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronGeometry args={[2, 20]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={wireframe}
      />
    </mesh>
  );
}

export default Blob_01
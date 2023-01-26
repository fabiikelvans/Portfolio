import { useFrame } from '@react-three/fiber';
import { button, folder, useControls } from 'leva';
import React, { useMemo, useRef } from 'react'
import { DoubleSide, MathUtils } from 'three';
import fragmentShader from './shaders/fragmentShader';
import vertexShader from './shaders/vertexShader';
import * as THREE from 'three';

var colors = require('nice-color-palettes');




function Stripe() {

    // Colors
    let ind = Math.floor(Math.random() * colors.length);
    ind = 20;
    let pallete = colors[ind];

    pallete = pallete.map((color) => new THREE.Color(color));
    

      // This reference will give us direct access to the mesh
    const mesh = useRef<Mesh>();

    const uniforms = useMemo(
        () => ({
          u_time: {
            value: 0.0005,
          },
          u_color: {
            value: pallete,
          },
          u_resolution: {
            value: new THREE.Vector4()
          },
        
        }), []
      );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });


  return (
     <>

         <mesh
             ref={mesh}
             position={[0, 0, 9]}
             scale={8}

         >
             <planeGeometry args={[1.5, 1.5, 200, 200]} />
             <shaderMaterial
                 fragmentShader={fragmentShader}
                 vertexShader={vertexShader}
                 uniforms={uniforms}
                 wireframe={false}
                 side={DoubleSide}
             />

         </mesh>
     </>
  )
}

export default Stripe
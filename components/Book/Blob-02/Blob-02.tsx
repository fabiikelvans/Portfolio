import { useFrame} from '@react-three/fiber';
import { button, folder, useControls } from 'leva';
import React, {useEffect, useMemo, useRef} from 'react'
import { Color, MathUtils, Vector3 } from 'three';
import fragmentShader from './shaders/fragmentShader';
import vertexShader from './shaders/vertexShader';
import {isMobile} from "react-device-detect";

function Blob_02() {

     // This reference will give us direct access to the mesh
  const mesh = useRef();
  const hover = useRef(false);



// Uniforms
const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.3,
      },
      u_time: {
        value: 0.0,
      },
      u_colorA: {
        value: new Color('#ffc3a0')
      },
      u_colorB: {
        value: new Color('#0d0046')
      }
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;//@ts-ignore
    mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

      //@ts-ignore
    mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp( //@ts-ignore
      mesh.current.material.uniforms.u_intensity.value,
      hover.current ? 0.45 : 0.15,
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
    <>
    
    <mesh //@ts-ignore
      ref={mesh}
      position={[0, 0, 0]}
      scale={1.4}
    >
      <icosahedronGeometry args={[2, 60]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>

    {/* <EffectComposer>
    <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
    <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
    <Noise opacity={0.02} />
    <Vignette eskil={false} offset={0.1} darkness={1.1} />
    </EffectComposer> */}
    </>
  )
}

export default Blob_02
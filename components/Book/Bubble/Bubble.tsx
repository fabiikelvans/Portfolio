import {useFrame, extend, useThree, Color, PointsProps} from '@react-three/fiber';
import { button, folder, useControls } from 'leva';
import React, { useMemo, useRef, useEffect } from 'react'
import { DoubleSide, MathUtils } from 'three';
import { OrbitControls, Point, Points } from "@react-three/drei";
import fragmentShader from './shaders/fragmentShader';
import vertexShader from './shaders/vertexShader';
import * as THREE from 'three';
import fragmentParticlesShader from './shaders/fragmentParticles';
import vertexParticlesShader from './shaders/vertexParticles';
import {isMobile} from "react-device-detect";

const Particles = (props : any) => {
  const { count } = props;
  const radius = 2;

  // This reference gives us direct access to our points
  const points = useRef<PointsProps>();
  const hover = useRef(false);

  // Generate our positions attributes array
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    const distance = 1;

    for (let i = 0; i < count; i++) {
      // Custom
      let inc = Math.PI*(3 - Math.sqrt(5));
      let off = 2/count;
      let rad = 1.7;

      let p = i * off - 1 + (off / 2);
      let r = Math.sqrt(1 - p*p);
      let phi = i * inc;

      let x = distance * rad*Math.cos(phi)*r;
      let y = distance * rad*p;
      let z = distance * rad*Math.sin(phi)*r;

      positions.set([x, y, z], i * 3);
    }


    return positions;
  }, [count]);

  const uniforms = useMemo(() => ({
    uTime: {
      value: 0.0
    },
    u_intensity: {
      value: 0.065,
    },
    uRadius: {
      value: radius
    },
    uColor: {
      value: new THREE.Color('#ffffff')
    }
  }), [])

  useFrame((state) => {
    const { clock } = state;

    // @ts-ignore
    points.current.material.uniforms.uTime.value = clock.elapsedTime;// @ts-ignore
    points.current.rotation.y = clock.elapsedTime / 5;

  });

  useEffect(() => {

    if (isMobile) {
      // @ts-ignore
      points.current.scale.set(0.8, 0.8, 0.8);
    }
  }, []);

  return (
      <points// @ts-ignore
          ref={points}
          scale={1.6}
      >
        <bufferGeometry>
          <bufferAttribute
              attach="attributes-position"
              count={particlesPosition.length / 3}
              array={particlesPosition}
              itemSize={3}
          />
        </bufferGeometry>
        <shaderMaterial
            depthWrite={false}
            fragmentShader={fragmentParticlesShader}
            vertexShader={vertexParticlesShader}
            uniforms={uniforms}
        />
      </points>
  );
};


function BubbleMain() {


  return (
    <>
    {/* Particles */}
    <Particles count={6000} shape="sphere" />
      
    </>
  )
}

export default BubbleMain
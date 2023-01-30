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

interface Particles {
  count: number,
  shape: string;
}
const Particles = (props : Particles) => {
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
    uRadius: {
      value: radius
    },
    uColor: {
      value: new THREE.Color('#ff7979')
    }
  }), [])

  useFrame((state) => {
    const { clock } = state;

    // @ts-ignore
    points.current.material.uniforms.uTime.value = clock.elapsedTime; //@ts-ignore
    points.current.rotation.y = clock.elapsedTime / 5;

    //@ts-ignore
    points.current.rotation.y = MathUtils.lerp( //@ts-ignore
        points.current.rotation.x,
        hover.current ? clock.elapsedTime * 5 : clock.elapsedTime / 0.22,
        0.02
    );
  });

  useEffect(() => {

    if (isMobile) {
      // @ts-ignore
      points.current.scale.set(0.8, 0.8, 0.8);
    }
  }, []);

  return (
      <points //@ts-ignore
          ref={points}
          scale={1.2}
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


function Pepyaka() {

     // This reference will give us direct access to the mesh
  const mesh = useRef();

  const hover = useRef(false);

  useEffect(() => {

    if (isMobile) {
      // @ts-ignore
      mesh.current.scale.set(0.9, 0.9, 0.9);
    }
  }, []);

  // Debug
//@ts-ignore
  const [{ scale, wireframe, sky_color, ground_color }, set] = useControls("Blob",
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
          sky_color: {
            value: '#ffffff', //@ts-ignore
            onChange: (v) => mesh.current && mesh.current.material.uniforms.u_sky.value.set(v),
          },
          ground_color: {
            value: '#a1f719', //@ts-ignore
            onChange: (v) => mesh.current && mesh.current.material.uniforms.u_ground.value.set(v),
          }
        }),

        reset: button(() => {
          set({
            scale: 1.2,
            wireframe: false, //@ts-ignore
            sky_color: '#ffffff',
            ground_color: '#a1f719'
          })
        })
      })
  );


  const uniforms = useMemo(
    () => ({
      u_resolution: {
        value: new THREE.Vector2(),
      },
      u_time: {
        value: 0.0,
      },
      u_sky: {
        value: new THREE.Color(sky_color)
      },
      u_ground: {
        value: new THREE.Color(ground_color)
      }
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state; //@ts-ignore
     mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

    // mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
    //   mesh.current.material.uniforms.u_intensity.value,
    //   hover.current ? 0.85 : 0.15,
    //   0.02
    // );
  });






  return (
    <>
    <mesh //@ts-ignore
      ref={mesh}
      position={[0, 0, 0]}
      scale={scale}
      // onPointerOver={() => (hover.current = true)}
      // onPointerOut={() => (hover.current = false)}
    >
    <sphereGeometry args={[1, 162, 162]} />

      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={wireframe}
      />

    </mesh>

    {/* Particles */}
    <Particles count={10000} shape="sphere" />
      
    </>
  )
}

export default Pepyaka
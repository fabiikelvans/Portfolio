import React, {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Stripe from "@/components/CTA/Stripe/Stripe";
import {header} from "@/pages";
import Link from "next/link";

function Cta() {
    return (
        <div className='relative'>

            <div className='absolute w-full h-full bg-[#F8F8F8] dark:bg-[#222831] z-10 opacity-10'></div>
            <div className="h-[60vh] md:h-[100vh] w-[100vw] bg-cover opacity-20 dark:opacity-40">
                <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
                    <Suspense fallback={null}>
                        <Stripe/>
                    </Suspense>
                    <OrbitControls enableZoom={false} enableRotate={false}/>
                </Canvas>
            </div>

            <div className='absolute top-[40%] md:top-[50%] left-[30%] md:left-[40%] z-20'>
                <h1 style={header.style} className='text-5xl md:text-7xl font-bold'>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <Link href={'mailto:fkelvans@gmail.com'}>Let's Talk</Link>
                </h1>
            </div>
        </div>
    );
}

export default Cta;
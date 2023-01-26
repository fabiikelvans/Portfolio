import React, {Suspense} from 'react';
import {Head} from "@/seo/Head/Head";
import DarkToggle from "@/components/Dark Toggle/DarkToggle";
import {Canvas} from "@react-three/fiber";
import Blob_02 from "@/components/Shaders/Blob-02/Blob-02";
import {OrbitControls} from "@react-three/drei";
import Link from "next/link";
import {GiReturnArrow} from "react-icons/gi";
import Pepyaka from "@/components/Book/Pepyaka/Pepyaka";
import {jost} from "@/pages";

function PepyakaMain() {
    return (
        <>
            <Head/>

            <DarkToggle/>

            <main style={jost.style}>
            <div className='relative'>
                <div className='h-[100vh] w-full'>
                    <Canvas>
                        <Suspense>
                            <Pepyaka/>
                            <OrbitControls autoRotate={true} enableZoom={false}/>
                        </Suspense>
                    </Canvas>
                </div>

                <Link href='/playground' className='absolute top-10 md:top-20 left-10 md:left-20
                h-14 w-14 rounded-full bg-[#121b14]/20 dark:bg-white/20 backdrop-blur-sm
                flex justify-center items-center transition duration-300 hover:bg-[#121b14]
                hover:text-white dark:hover:bg-white dark:hover:text-[#121b14]'>
                    <GiReturnArrow className='text-2xl'/>
                </Link>
            </div>
            </main>
        </>
    );
}

export default PepyakaMain;
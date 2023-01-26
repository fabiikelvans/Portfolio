import React, {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Blob_01 from "@/components/Shaders/Blob-01/Blob_01";
import {GiReturnArrow} from "react-icons/gi";
import DarkToggle from "@/components/Dark Toggle/DarkToggle";
import Link from "next/link";
import Blob_02 from "@/components/Shaders/Blob-02/Blob-02";
import {Head} from "@/seo/Head/Head";
import {jost} from "@/pages";

function Blob2() {
    return (
        <>
            <Head/>

            <DarkToggle/>

            <main style={jost.style}>

        <div className='relative'>
            <div className='h-[100vh] w-full'>
                <Canvas>
                    <Suspense>
                        <Blob_02 />
                        <OrbitControls autoRotate={true} enableZoom={false}/>
                    </Suspense>
                </Canvas>
            </div>

            <Link href='/playground' className='absolute top-10 md:top-20 left-10 md:left-20
                h-14 w-14 rounded-full bg-[#121b14]/20 dark:bg-white/20 backdrop-blur-sm
                flex justify-center items-center transition duration-300 hover:bg-[#121b14] hover:text-white dark:hover:bg-white dark:hover:text-[#121b14]'>
                <GiReturnArrow className='text-2xl'/>
            </Link>
        </div>
            </main>
        </>
    );
}

export default Blob2;
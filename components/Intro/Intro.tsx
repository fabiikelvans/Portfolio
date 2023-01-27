import React, {Suspense, useRef} from 'react';
import {Canvas} from "@react-three/fiber";
import Pepyaka from "@/components/Intro/Pepyaka/Pepyaka";
import {OrbitControls} from "@react-three/drei";

function Intro() {

    return (
        <div className='spacing'>
            <div className='flex flex-col md:flex-row items-center'>
                <div className={'w-[100%] md:w-[50%]'}>
                    <h3 className='text-2xl md:text-3xl xl:text-4xl  font-extralight'>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Hello, I'm Fabian a creative developer and interaction designer based in Nairobi, Kenya.
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        I'm passionate about creating artisan digital experiences with a focus on motion and interaction.</h3>
                </div>

                <div className={'w-[100%] md:w-[50%] h-[100vh] md:h-[80vh]'}>
                    <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
                        <Suspense fallback={null}>
                            <Pepyaka/>
                        </Suspense>
                        <OrbitControls enableZoom={false}/>
                    </Canvas>
                </div>
            </div>
        </div>
    );
}

export default Intro;
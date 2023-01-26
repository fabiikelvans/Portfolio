import React, {useState, useEffect, Suspense} from 'react';
import {header, script} from "@/pages";
import {GiBroadheadArrow} from "react-icons/gi";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Wavey from "@/components/Header/Wavey/Wavey";

function Header() {
    const getCurrentTime = () => {
        const date = new Date();
        const time = new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        }).format(date);
        return time;
    }

    const [time, setTime] = useState('');

    useEffect(() => {
        setTime(getCurrentTime());
        const interval = setInterval(() => {
            setTime(getCurrentTime());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='py-20 px-12 md:px-24 relative'>
            <p className='absolute top-0 right-8 md:right-20 text-sm md:text-lg
            animate-text text-transparent bg-clip-text bg-gradient-to-r
                from-rose-400 via-fuchsia-500 to-indigo-500
            '>{time}</p>

            <div>
                <h1 className='text-[10vw] md:text-[6vw] text-center font-extralight'
                    style={header.style}>
                    <span>
                        Creative <span> </span>
                        <span className='animate-text text-transparent bg-clip-text bg-gradient-to-r
                from-rose-400 via-fuchsia-500 to-indigo-500'>
                            Designer
                        </span> <span> </span>
                        &
                        <span> </span>
                        <span className='opacity-80 transition duration-300 hover:underline'>Developer</span>
                    </span><br/>
                    <span>Based in Nairobi</span>
                </h1>

                <Canvas>
                    <Suspense>
                        <Wavey/>
                    </Suspense>
                    <OrbitControls enableZoom={false} enableRotate={false}/>
                </Canvas>

                <div className='text-3xl flex justify-center mt-8 animate-bounce'>
                    <GiBroadheadArrow className='rotate-45 transform'/>
                </div>
            </div>
        </div>
    );
}

export default Header;
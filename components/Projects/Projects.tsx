import React, {useRef} from 'react';
import {header, script} from "@/pages";
import Image from "next/image";
import {GiArrowhead} from "react-icons/gi";
import Link from "next/link";

import {gsap} from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {useIsomorphicLayoutEffect} from "usehooks-ts";

function Projects() {

    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline();

    let scrollRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
            t1.from('.line', {
                scrollTrigger: {
                    trigger: '.line',
                    start: "top bottom",
                    end: "bottom 350px",
                    scrub: 1,
                },
                duration: 1.8,
                y: 100,
                opacity: 0,
                ease: "power4.out",
                delay: 0.1,
                stagger: {
                    amount: 0.6
                }

            });
        }, scrollRef); // <- scopes all selector text to the root element

        return () => ctx.revert();
    }, );


    return (
        <div ref={scrollRef} className='spacing relative'>
            <h1 style={script.style} className='text-7xl pb-20 pt-2
            animate-text text-transparent bg-clip-text bg-gradient-to-r
                from-rose-400 via-fuchsia-500 to-indigo-500 line
            '>Featured Projects</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-20 line'>
                <div className='relative h-fit group'>
                    <Link target="_blank" href={'https://sherman-six.vercel.app/'}>
                        <div className='h-[60vh] md:h-[120vh] w-full mx-auto relative'>
                            <Image
                                src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2127&q=80"
                                alt='logo' fill className='object-cover rounded-3xl'/>
                        </div>
                        <div className='absolute bottom-10 left-10 flex flex-row justify-between items-center space-x-10 md:space-x-20'>
                            <div className='backdrop-blur-sm bg-white/80 dark:bg-[#222831]/80 w-fit h-fit px-8 py-4 rounded-full'>
                                <h1 style={header.style} className='text-2xl md:text-3xl'>Sherman</h1>
                            </div>
                            <div className='backdrop-blur-sm bg-white/80 dark:bg-[#222831] w-16 h-16 text-2xl md:text-3xl px-4 py-2 rounded-full flex justify-center items-center md:hidden group-hover:flex'>
                                <GiArrowhead className='-rotate-90'/>
                            </div>
                        </div>
                    </Link>

                </div>

                <div className='relative h-fit group'>
                    <Link target="_blank" href={'https://droppie-app.vercel.app/'} >
                    <div className='h-[60vh] md:h-[80vh] w-full mx-auto relative'>
                        <Image
                            src="https://images.unsplash.com/photo-1643101681441-0c38d714fa14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                            alt='logo' fill className='object-cover rounded-3xl'/>
                    </div>

                    <div className='absolute bottom-10 left-10 flex flex-row justify-between items-center space-x-10 md:space-x-20'>
                        <div className='backdrop-blur-sm bg-white/80 dark:bg-[#222831]/80 w-fit h-fit px-8 py-4 rounded-full'>
                            <h1 style={header.style} className='text-2xl md:text-3xl'>Droppie</h1>
                        </div>
                        <div className='backdrop-blur-sm bg-white/80 dark:bg-[#222831] w-16 h-16 text-2xl md:text-3xl px-4 py-2 rounded-full flex justify-center items-center md:hidden group-hover:flex'>
                            <GiArrowhead className='-rotate-90'/>
                        </div>
                    </div>
                    </Link>
                </div>

            </div>

            <div className='my-24 grid grid-cols-1 gap-20 line'>
                <div className='relative h-fit group '>

                    <div className='h-[60vh] md:h-[120vh] w-full md:w-[60%] mx-auto relative'>
                        <Image
                            src="https://images.unsplash.com/photo-1555820585-c5ae44394b79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80"
                            alt='logo' fill className='object-cover rounded-3xl w-fit'/>
                    </div>

                    <Link target="_blank" href={'https://aster-beauty-shop.vercel.app/'} >
                    <div className='absolute bottom-10 left-[10%] md:left-[30%] flex flex-row justify-between items-center space-x-10 md:space-x-20'>
                        <div className='backdrop-blur-sm bg-white/80 dark:bg-[#222831]/80 w-fit h-fit px-8 py-4 rounded-full'>
                            <h1 style={header.style} className='text-2xl md:text-3xl'>Aster Beauty</h1>
                        </div>
                        <div className='backdrop-blur-sm bg-white/80 dark:bg-[#222831] w-16 h-16 text-2xl md:text-3xl px-4 py-2 rounded-full flex justify-center items-center md:hidden group-hover:flex'>
                            <GiArrowhead className='-rotate-90'/>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-20 line'>
                <div className='relative h-fit group'>
                    <Link target="_blank" href={'https://white-studio.vercel.app/'}>
                    <div className='h-[60vh] md:h-[120vh] w-full mx-auto relative'>
                        <Image
                            src="https://images.unsplash.com/photo-1606216836537-eea72a939072?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                            alt='logo' fill className='object-cover rounded-3xl'/>
                    </div>

                    <div className='absolute bottom-10 left-10 flex flex-row justify-between items-center space-x-10 md:space-x-20'>
                        <div className='backdrop-blur-sm bg-white/80 dark:bg-[#222831]/80 w-fit h-fit px-8 py-4 rounded-full'>
                            <h1 style={header.style} className='text-2xl md:text-3xl'>White Studio</h1>
                        </div>
                        <div className='backdrop-blur-sm bg-white/80 dark:bg-[#222831] w-16 h-16 text-2xl md:text-3xl px-4 py-2 rounded-full flex justify-center items-center md:hidden group-hover:flex'>
                            <GiArrowhead className='-rotate-90'/>
                        </div>
                    </div>
                    </Link>
                </div>

                <div className='relative h-fit group'>
                    <Link target="_blank" href={'https://bloggy-taupe.vercel.app/'}>
                    <div className='h-[60vh] md:h-[80vh] w-full mx-auto relative'>
                        <Image
                            src="https://images.unsplash.com/photo-1616440347437-b1c73416efc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                            alt='logo' fill className='object-cover rounded-3xl'/>
                    </div>

                    <div className='absolute bottom-10 left-10 flex flex-row justify-between items-center space-x-10 md:space-x-20'>
                        <div className='backdrop-blur-sm bg-white/80 dark:bg-[#222831]/80 w-fit h-fit px-8 py-4 rounded-full'>
                            <h1 style={header.style} className='text-2xl md:text-3xl'>Bloggy</h1>
                        </div>
                        <div className='backdrop-blur-sm bg-white/80 dark:bg-[#222831] w-16 h-16 text-2xl md:text-3xl px-4 py-2 rounded-full flex justify-center items-center md:hidden group-hover:flex'>
                            <GiArrowhead className='-rotate-90'/>
                        </div>
                    </div>
                    </Link>
                </div>

            </div>


        </div>
    );
}

export default Projects;
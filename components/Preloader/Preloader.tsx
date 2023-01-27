import React, {useRef} from 'react';
import {useIsomorphicLayoutEffect} from "usehooks-ts";
import {gsap} from "gsap";
import {header, script} from "@/pages";

function Preloader() {

    const t1 = gsap.timeline();

    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z"


    let svg = useRef(null);

    let mainRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline()
            tl.fromTo(
                ".box1",
                {
                    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)"
                },
                {
                    delay: 1,
                    duration: 1,
                    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
                }
            )
                .fromTo(
                    ".box2",
                    {
                        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)"
                    },
                    {
                        duration: 1,
                        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
                    },
                    "-=0.8"
                )
                .fromTo(
                    ".box3 ",
                    {
                        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)"
                    },
                    {
                        duration: 1,
                        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
                    },
                    "-=0.7"
                )
                .from(".main-container .logo", { duration: 2,  opacity: 0 }, "-=1.5")
                .from(".title1", { duration: 1, y: 300 }, "-=1.5")
                .from(".title2", { duration: 1, opacity: 0, scale: 0.5 }, "-=1")
                .to('.main-container', {
                    duration: 3,
                    delay: 0.7,
                    y: "200%"

            })

        }, mainRef); // <- scopes all selector text to the root element

        return () => ctx.revert();
    }, );

    return (
        <div ref={mainRef} className='relative'>
            <div className="main-container fixed top-0 left-0 h-[100vh] w-[100vw] z-40 bg-white dark:bg-[#222222] text-[#121b14] dark:text-white">

                <div className='flex justify-center mt-24'>
                    <h1 className='text-6xl logo' style={script.style}>Fabii Kelvans</h1>
                </div>
                <div className="relative">

                    <div className="box1 bg-[#F05454]" />
                    <div className="box2 bg-[#F05454]" />
                    <div className="box3 bg-[#F05454]" />
                </div>

            </div>
        </div>
    );
}

export default Preloader;
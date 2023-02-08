import React, {useRef} from 'react';
import {GiPolarStar, GiStarFormation} from "react-icons/gi";
import Marquee from "react-fast-marquee";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {useIsomorphicLayoutEffect} from "usehooks-ts";

function Marquees() {

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
                skewY: 5,
                stagger: {
                    amount: 0.6
                }

            });
        }, scrollRef); // <- scopes all selector text to the root element

        return () => ctx.revert();
    }, );

    return (
        <div ref={scrollRef} className='pb-32'>
        <div className='overflow-hidden bg-gray-200 dark:bg-gray-700 line relative flex items-center text-3xl  w-full h-full max-w-[100vw]'>

            <Marquee gradient={false} speed={100} className=''>

                <div className='mr-[2.5rem] py-[2rem]'>
                    Interaction Design
                </div>

                <div className='mr-[2.5rem] py-[2rem]'>
                    <GiPolarStar/>
                </div>

                <div className='mr-[2.5rem] py-[2rem]'>
                    Development
                </div>
                <div className='mr-[2.5rem] py-[2rem]'>
                    <GiPolarStar/>
                </div>

                <div className='mr-[2.5rem] py-[2rem]'>
                    UI/UX
                </div>
                <div className='mr-[2.5rem] py-[2rem]'>
                    <GiPolarStar/>
                </div>

                <div className='mr-[2.5rem] py-[2rem] '>
                    Creative
                </div>
                <div className='mr-[2.5rem] py-[2rem]'>
                    <GiPolarStar/>
                </div>


                <div className='mr-[2.5rem] py-[2rem] '>
                    Frontend
                </div>
                <div className='mr-[2.5rem] py-[2rem]'>
                    <GiPolarStar/>
                </div>

                <div className='mr-[2.5rem] py-[2rem] '>
                    Branding
                </div>
                <div className='mr-[2.5rem] py-[2rem]'>
                    <GiPolarStar/>
                </div>
            </Marquee>
        </div>
        </div>
    );
}

export default Marquees;
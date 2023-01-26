import React, {Suspense, useCallback, useRef} from 'react';

// Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination} from "swiper";
import {BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {header} from "@/pages";
import Blob_01 from "@/components/Book/Blob-01/Blob_01";
import Blob_02 from "@/components/Book/Blob-02/Blob-02";
import Pepyaka from "@/components/Book/Pepyaka/Pepyaka";
import Bubble from "@/components/Book/Bubble/Bubble";
import {GiBroadheadArrow} from "react-icons/gi";
import Link from "next/link";
SwiperCore.use([Pagination]);

function Books() {

    // SLIDER SETTINGS
    const sliderRef = useRef<SwiperCore>(null);


    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        // @ts-ignore
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        // @ts-ignore
        sliderRef.current.swiper.slideNext();
    }, []);



    return (
        <div className='relative'>
            <div >
                <div className="absolute top-[40%] flex justify-between text-white w-[100vw] z-20">
                    <div className="icon absolute left:2 md:left-20">
                        <div onClick={handlePrev}
                            className='cursor-pointer h-14 w-14 rounded-full bg-white/70 backdrop-blur-sm flex justify-center items-center transition duration-300 hover:bg-white'>
                        <GiBroadheadArrow className='rotate-[135deg] text-black'/>
                        </div>
                    </div>

                    <div className="icon absolute right-2 md:right-20">
                       <div onClick={handleNext}
                           className='cursor-pointer h-14 w-14 rounded-full bg-white/70 backdrop-blur-sm flex justify-center items-center transition duration-300 hover:bg-white'>
                           <GiBroadheadArrow  className='-rotate-[45deg] text-black'/>
                       </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='h-[90vh] w-full mx-auto flex justify-center items-center relative'>
                    {/*@ts-ignore*/}
                    <Swiper ref={sliderRef}
                            spaceBetween={50}
                            slidesPerView={1}
                            className='h-full w-full'
                            centeredSlides={true}
                            autoplay={{ delay: 2000 }}
                            navigation={false}
                            breakpoints={{
                                500: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 2,
                                },
                            }}
                    >

                        <SwiperSlide>

                            <div className="relative h-full w-full">
                                <div className='h-[80vh]'>
                                    <Canvas>
                                        <Suspense>
                                            <Blob_01/>
                                            <OrbitControls autoRotate={true} enableZoom={false}/>
                                        </Suspense>
                                    </Canvas>
                                </div>

                                <div className="absolute top-[40%] left-[35%] object-cover">
                                    <div className="text-center">
                                        <Link href={'/playground/blob-1'} style={header.style}
                                            className='text-4xl md:text-5xl'>
                                            Blob One
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative h-full w-full">
                                <div className='h-[80vh]'>
                                    <Canvas>
                                        <Suspense>
                                            <Blob_02 />
                                            <OrbitControls autoRotate={true} enableZoom={false}/>
                                        </Suspense>
                                    </Canvas>
                                </div>

                                <div className="absolute top-[40%] left-[35%]">
                                    <div className="text-center ">
                                        <Link href={'/playground/blob-2'} style={header.style}
                                            className='text-4xl md:text-5xl'>
                                            Blob Two
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative h-full w-full">
                                <div className='h-[80vh]'>
                                    <Canvas>
                                        <Suspense>
                                            <Pepyaka/>
                                            <OrbitControls autoRotate={true} enableZoom={false}/>
                                        </Suspense>
                                    </Canvas>
                                </div>

                                <div className="absolute top-[40%] left-[35%] object-cover">
                                    <div className="text-center">
                                        <Link href={'/playground/pepyaka'} style={header.style}
                                            className='text-4xl md:text-5xl'>
                                            Pepyaka
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="relative h-full w-full">
                                <div className='h-[80vh]'>
                                    <Canvas>
                                        <Suspense>
                                            <Bubble/>
                                            <OrbitControls autoRotate={true} enableZoom={false}/>
                                        </Suspense>
                                    </Canvas>
                                </div>

                                <div className="absolute top-[40%] left-[35%] object-cover">
                                    <div className="text-center">
                                        <Link href={'/playground/bubble'} style={header.style}
                                            className='text-4xl md:text-5xl'>
                                            Bubble
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>




                    </Swiper>
            </div>
            </div>
        </div>
    );
}

export default Books;
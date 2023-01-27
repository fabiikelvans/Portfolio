import React from 'react';
import {BsBehance, BsGithub, BsLinkedin, BsTwitter} from "react-icons/bs";
import Link from "next/link";

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <div className='spacing'>
            <div className='flex flex-col space-y-8 md:space-y-0 md:flex-row justify-between'>
                <div>
                    <h4>Designed and developed by Fabii Kelvans</h4>
                    <h4>&copy; {currentYear} All rights reserved.</h4>
                </div>

                <div className='flex  flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-10'>
                    <div className='flex items-center space-x-2'>
                        <BsGithub/>
                        <Link target={'_blank'} href={'https://github.com/fabiikelvans'} >
                        <h4 className='transition duration-300 hover:underline hover:text-[#F05454]'>Github</h4>
                        </Link>
                    </div>

                    <div className='flex items-center space-x-2'>
                        <BsBehance/>
                        <Link target={'_blank'} href={'https://www.behance.net/fabiikelvans'}>
                        <h4 className='transition duration-300 hover:underline hover:text-[#F05454]'>Behance</h4>
                        </Link>
                    </div>

                    <div className='flex items-center space-x-2'>
                        <BsLinkedin/>
                        <Link target={'_blank'} href={'https://www.linkedin.com/in/fabian-kelvans-41343386/'}>
                        <h4 className='transition duration-300 hover:underline hover:text-[#F05454]'>LinkedIn</h4>
                        </Link>
                    </div>

                    <div className='flex items-center space-x-2'>
                        <BsTwitter/>
                        <Link target={'_blank'} href={'https://twitter.com/Fabian_Kelvans'}>
                        <h4 className='transition duration-300 hover:underline hover:text-[#F05454]'>Twitter</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
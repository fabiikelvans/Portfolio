import React from 'react';
import {script} from "@/pages";
import Link from "next/link";

function Nav() {
    return (
        <div className='sticky top-0 left-0 z-20'>
            <div className='px-10 md:px-16 py-8 flex justify-between md:items-center'>
                <h1 className='text-2xl'>
                    <Link style={script.style} href={'/'}> Fabii </Link>
                </h1>

                <div>
                    <ul className='backdrop-blur-sm px-4 py-2 rounded-2xl bg-white/70 dark:bg-[#222831]/70 flex text-sm md:text-md flex-col md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-8'>
                        <li><Link href={'/about'} className='transition duration-300 hover:underline hover:text-[#F05454]'>About</Link></li>
                        <li><Link href={'/playground'} className='transition duration-300 hover:underline hover:text-[#F05454]'>Playground</Link></li>
                        <li><Link href={'mailto:fkelvans@gmail.com'} className='transition duration-300 hover:underline hover:text-[#F05454]'>Contact</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Nav;
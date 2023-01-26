import React from 'react';
import {Head} from "@/seo/Head/Head";
import {jost} from "@/pages/index";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import DarkToggle from "@/components/Dark Toggle/DarkToggle";
import CTA from "@/components/CTA/CTA";
import Marquee from "@/components/Services/Marquee";

function About() {
    return (
        <>

            <Head/>

            <DarkToggle/>

            <main style={jost.style}>

                <Nav/>

                <div className='spacing grid grid-cols-1 md:grid-cols-2'>
                    <div></div>
                    <div>
                        <h1 className='text-2xl md:text-3xl font-extralight text-gray-600 dark:text-gray-300'>
                            Fabian, a creative developer and designer from Nairobi, Kenya, specializes in
                            crafting unique digital experiences with a focus on motion and interaction.
                            With over 5 years of experience, he has worked with clients across
                            various industries globally.
                        </h1>
                    </div>

                </div>

                <Marquee/>

                <CTA/>

                <Footer/>
            </main>
            </>
    );
}

export default About;
import React from 'react';
import {Head} from "@/seo/Head/Head";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import Books from "@/components/Book/Books";
import DarkToggle from "@/components/Dark Toggle/DarkToggle";
import {jost} from "@/pages";

function Playground() {
    return (
        <>
            <Head/>
            <main className='bg-[#121b14] text-white'  style={jost.style}>
                <Nav/>
                <Books/>
                <Footer/>
            </main>
        </>
    );
}

export default Playground;
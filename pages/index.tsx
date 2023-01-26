import { Inter, Satisfy, Jost, Amita } from '@next/font/google'
import {Head} from "@/seo/Head/Head";
import Nav from "@/components/Nav/Nav";
import DarkToggle from "@/components/Dark Toggle/DarkToggle";
import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import Marquee from "@/components/Services/Marquee";
import Projects from "@/components/Projects/Projects";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";
import Preloader from "@/components/Preloader/Preloader";

export const script = Satisfy({weight : ['400'], subsets: ['latin'] }) ;
export const header = Amita({weight : ['400'], subsets: ['latin'] }) ;
export const jost = Jost({weight : ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] }) ;

export default function Home() {
  return (
    <>
        <Head/>
      <main style={jost.style}>
          <Preloader/>
          <DarkToggle/>
          <Nav/>
          <Header/>
          <Intro/>
          <Marquee/>
          <Projects/>
          <CTA/>
          <Footer/>
      </main>
    </>
  )
}

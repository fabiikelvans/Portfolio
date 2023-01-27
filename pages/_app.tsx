import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "next-themes";

// import Swiper styles
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useEffect} from "react";
import Lenis from "@studio-freight/lenis";


export default function App({ Component, pageProps }: AppProps) {

    useEffect(() => {
        const lenis = new Lenis({
            duration: 2.6,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            direction: 'vertical', // vertical, horizontal
            gestureDirection: 'vertical', // vertical, horizontal, both
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 1,
            infinite: false,
        })

//get scroll value
        {/*@ts-ignore*/}
        lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
            console.log({ scroll, limit, velocity, direction, progress })
        });

        function raf(time:any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    });
  return (
      <>
          <ThemeProvider attribute='class'
          defaultTheme={'system'}
          >
        <Component {...pageProps} />
          </ThemeProvider>
      </>
  )
}

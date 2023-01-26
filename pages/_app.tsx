import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "next-themes";

// import Swiper styles
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
          <ThemeProvider attribute='class'>
        <Component {...pageProps} />
          </ThemeProvider>
      </>
  )
}

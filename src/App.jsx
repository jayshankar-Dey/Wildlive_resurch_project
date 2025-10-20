import React, { useEffect ,lazy, Suspense} from 'react'
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = lazy(()=>import('./pages/Hero'))
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  ///lenis setup
   useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5,      
      smooth: true,  
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); 
    };
  }, []);

  return (
   <BrowserRouter>
    <Suspense fallback={<Loading/>}>
      <Routes>
       <Route path='/' element={<Hero/>}/>
    </Routes>
    </Suspense>
   </BrowserRouter>
  )
}

export default App
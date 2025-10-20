import React, { useEffect } from 'react'
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from './pages/Hero';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
    <Routes>
       <Route path='/' element={<Hero/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
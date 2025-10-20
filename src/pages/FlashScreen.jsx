import  { useEffect, useRef } from 'react'
import gsap from 'gsap'

const FlashScreen = () => {
    const containerRef = useRef(null);

  useEffect(() => {
   
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

  
      const letters = gsap.utils.toArray(".span-1");

      tl.from(letters, {
        y: 100,         
        opacity: 0,       
        duration: .2,
        stagger: 0.1,    
      },"start").from('.r',{
        scale:3.5,
        position:"relative",
        top:"-2.5rem",
        left:"5rem",
       duration: 1,
      },"start").to('.box',{
        scale:.3,
        duration:.4,
        bottom:"-2.5rem"
      },"start").to('.text',{
        display:"block",
        opacity:1,
        top:0,
        duration:.7
      }).to('.s_1',{
         y:-30,
         duration:.8,
         delay:1.3
      },"s1").to('.s_2',{
         y:30,
         duration:.8,
         delay:1.3
      },"s1").to('.s_1',{
         y:"-200%",
         duration:.5,
         display:"none"
      },"s2").to('.s_2',{
         y:"200%",
         duration:.5,
         display:"none"
      },"s2").to(containerRef.current,{
        display:"none"
      });


    }, containerRef);

    // revert() kills tweens and restores any inline styles gsap added
    return () => ctx.revert();
  }, []);

  return (
    <>
     <div ref={containerRef} id='screen' className='h-screen  bg-transparent fixed top-0 left-0 w-screen  z-[1000] overflow-hidden '>
     <div  className='h-screen w-screen relative  *:bg-red-500 '>

{/* ////first div */}
       <div className='s_1 absolute top-0 left-0 h-1/2 w-screen'>
          <div className='relative h-full w-full flex justify-center '>
               
             <div className='absolute box min-w-72 text-white select-none font-[500]  duration-300   min-h-28 flex font-sans  -bottom-4 z-10 text-9xl'>
                <span className='span-1'>L</span>
                <span className='span-1'>Y</span>
                <span className='span-1'>N</span>
                <span className='span-1'>I</span>
                <span className='span-1'>Q</span>
                <span style={{float:"right"}} className='text-[2.5rem] r relative top-6 -left-1'>®</span>
             </div>

          </div> 
       </div>

{/* ////second div */}
       <div className='s_2 absolute bottom-0 left-0 h-1/2 w-screen'>
         <div className='relative flex justify-center  text-zinc-50'>
            <p className='text hidden relative top-5 opacity-0'>Digital desine studio</p>
         </div>
       </div>

     </div>
     </div>
    </>
  )
}

export default FlashScreen
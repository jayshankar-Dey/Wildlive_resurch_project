import React, { useState } from 'react'
import { TableOfContents,Sun  } from 'lucide-react';

const Navebar = () => {

    
       const[open,setOpen]=useState(false)


       return (
              <nav style={{ padding: ".7rem" }} className='w-screen  relative    flex justify-center  border-gray-100'>

                     <div  className='flex   lg:w-[80vw] w-full  justify-between gap-x-2'>

                            {/* /////icon */}
                            <div className='text-2xl h-full flex items-center w-fit  font-semibold font-[bold1]'>
                                   <div> <span>Wild</span><span className='text-red-600'>live.</span>    </div>
                            </div>
                            {/* //// menu */}
                            <div className='w-[50vw]  flex h-full '>
                                   <div className='justify-around *:font-[font1] lg:flex hidden  items-center w-full '>
                                          {
                                                 ["home", "about", "services", "galery", "team", "contacts"].map((link, i) => (
                                                        <a key={i} >{link}</a>
                                                 ))
                                          }
                                   </div>

{/* ///// drop menu */}
                                   <div id='drop' className='justify-around  border-b border-gray-400 left-0 top-full   absolute flex-col flex *:flex z-50 *:justify-center lg:hidden  *:border-zinc-400 w-full *:border-t duration-300 transition-all *:duration-300 *:transition-all *:origin-top  *:font-[font1]  *:w-full *:cursor-pointer '>
                                          {
                                                 ["home", "about", "services", "galery", "team", "contacts"].map((link, i) => (
                                                        <a style={{padding:".7rem"}} key={i} >{link}</a>
                                                 ))
                                          }
                                   </div>

                                   <div className='lg:w-fit lg:hidden *:cursor-pointer  w-full flex justify-end  '>
                                          <button>{<TableOfContents />}</button>
                                   </div>
                            </div>
                            {/* ////light mode dark monde */}
                            <div className='w-[10vw] flex justify-center  h-full'>
                                 <button><Sun/></button>
                            </div>
                            {/* /// end */}
                     </div>


              </nav>
       )
}

export default Navebar

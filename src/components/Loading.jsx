import { Loader } from 'lucide-react';

const Loading = () => {
  return (
    <>
       <div className=" h-screen text-blue-400 w-screen fixed top-0 left-0 z-[1000] bg-[#1a1919c5] flex flex-col gap-y-3 justify-center-safe items-center-safe">
             <div className="w-fit h-fit animate-spin transition-all duration-500">
              <Loader className='w-24 h-24'/>
             </div>
             <div>
              <p className='font-[font1] animate-bounce text-xl '>Loading ...</p>
             </div>
       </div>
    </>
  )
}

export default Loading

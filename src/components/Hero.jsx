import React from 'react';
import '../index.css';

const Hero = () => {
  return (
    
    <div className='min-h-[60vh] flex lg:flex-row flex-col-reverse lg:gap-0 gap-20 items-center justify-between'>
        
        <div className='space-y-10 text-center lg:text-left' >
            <h1 className='text-4xl lg:text-7xl font-bold'>Nice to meet you! 👋 <br/> <span className='underline decoration-blue-500 underline-offset-1'>I'm Henry.</span></h1>
            <p className='md:w-96 text-lg text-gray-500'>Based in Ghana, I'm a web developer passionate about building a modern web and mobile application that users love.</p>

            <a href="mailto:nyatorhenry@gmail.com" className='inline-block group'>
                
                <h1 className='text-3xl font-bold group-hover:text-blue-500 transition-all'>Contact Me 📭</h1>
                <div className='w-40 h-2 bg-blue-500 rounded-full '></div>
                <div className='w-40 h-2 bg-indigo-500 rounded-full translate-x-2'></div>
            
            </a>
        </div>

        <div className='relative mt-5 lg:mt-0 '>
            <div className='w-72 h-72 space-y-3 -rotate-[30deg] relative'>
                <div className='flex gap-3 translate-x-8 drop-shadow-xl'>
                    <div className='w-32 h-32 rounded-2xl bg-indigo-500 '></div>
                    <div className='w-32 h-32 rounded-full bg-blue-500'></div>
                </div> 
                <div className='flex gap-3 -translate-x-8 drop-shadow-xl'>
                    <div className='w-32 h-32 rounded-2xl bg-blue-500'></div>
                    <div className='w-32 h-32 rounded-full bg-indigo-500'></div>
                </div>
                <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
            </div>

            <div class="fle items-center justify-center absolute bottom-5 sm:bottom-1 left-[15%] sm:left-20">
                <button class="animate-border shadow-2xl rounded-md bg-transparent bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-[3px]">
                <span class="block rounded-md bg-slate-900 px-5 py-3 font-bold text-white"> 📣 Available or Work </span>
                </button>
            </div>
        </div>
    </div>
    
  )
}

export default Hero
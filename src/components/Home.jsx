import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name = 'home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h4 className='text-pink-600 text-2xl'>Hi, My name is</h4>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          LASARUS S
        </h1>
        <h2 className='text-3xl sm:text-7xl font-bold text-[#8892b0]'>I'm a MERN Stack Developer.</h2>
        <h5 className='text-[#8892b0] text-2xl py-4 max-w-[700px]'> I'm a Full-stack developer as a beginner to intermidiate level.
            Currently, I'm focused on building responsive full-stack web
            applications.
        </h5>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:boredr-pink-600'>View Work 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
            </span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Home;
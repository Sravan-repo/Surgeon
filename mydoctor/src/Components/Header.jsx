import React from 'react'
import group_profiles from '../assets/group_profiles.png'
import arrow_icon from '../assets/arrow_icon.svg'
import header_img from '../assets/header_img.png'




const Header = () => {
  return (
  <div className='flex flex-col md:flex-row flex-wrap bg-amber-400 rounded-lg px-6 md:px-10 lg:px-20'>    
    <div className='md:w-1/2 flex flex-col justify-center items-start text-black gap-5 py-10 m-auto md py-[10vw] md:mb-[-30px]'> 
        <p className='text-3xl md:text-4xl lg:text-5xl text-black font-semibold leaading-tight md:leading-tight lg:leading-tight'> Book Appointment<br/>with trusted doctors </p>
        
        <div className='flex flex-col md:flex-row items-center gap-3 text-black text-sm font-light' >
        <img  className='w-28' src={group_profiles} alt=''/>

        <p> Simply browse through extensive doctors & <br className='hidden sm:block'/> Schedule your appointmnt at earliest</p>
        </div>
        <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-black text-size-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'> 
        Book appointment <img className='w-3' src={arrow_icon} alt=''/></a>
    </div>
        {/* comment text right side */}

    <div className='md:w-1/2 relative'>
        <img  className='w-full md:absolute bottom-0 h-auto rounded-lg'src={header_img} alt=''/>
    </div>
        {/* comment text bottom */}
    <div>
       
    </div>

    </div>

  )
}

export default Header
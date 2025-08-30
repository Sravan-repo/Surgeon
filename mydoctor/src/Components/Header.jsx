import React, { useState, useEffect } from 'react'
import group_profiles from '../assets/group_profiles.png'
import arrow_icon from '../assets/arrow_icon.svg'
import Batumi from '../assets/Batumi.jpg'
import David from '../assets/David.jpg'
import University from '../assets/University.jpg'
import Tblisi from '../assets/Tbilisi.jpg'

const bgImages = [
  `url(${University})`,
  `url(${David})`,
  `url(${Tblisi})`,
  `url(${Batumi})`,

]

const Header = () => {
  const [bgIdx, setBgIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIdx((idx) => (idx + 1) % bgImages.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-[80vh] transition-all duration-1000"
      style={{
        backgroundImage: bgImages[bgIdx],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        transition: 'background-image 2s ease-in-out'
      }}
    >
      {/* <div className='flex md:flex-row w-full md:px-10 lg:px-20'>
        <div className='md:w-1/2 flex flex-col justify-center items-start text-black gap-5 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
          <p className='text-xl md:text-4xl lg:text-2xl text-black font-semibold leading-tight md:leading-tight lg:leading-tight'>
            Book Appointment with trusted counsellors
          </p>
          <div className='flex flex-col md:flex-row items-center gap-3 text-black text-sm font-semibold'>
            <img className='w-28' src={group_profiles} alt='' />
            <p>
              We are here to help you to fulfill your dreams & <br className='hidden sm:block' />
              Schedule your appointment at earliest with our best counsellors
            </p>
          </div>
          <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-black
           text-size-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
            Book appointment
            <img className='w-3' src={arrow_icon} alt='' />
          </a>
        </div>
      </div> */}
    </div>
  )
}

export default Header

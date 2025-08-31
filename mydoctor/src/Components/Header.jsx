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
        backgroundPosition: 'center bottom', // Align background image position to bottom center
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        transition: 'background-image 2s ease-in-out',
      }}
    >
      {/* Overlay to darken background for better text visibility */}
      <div className="w-full h-full flex items-end justify-center px-4 md:px-10 lg:px-20">
        <div className="max-w-4xl text-center text-white mb-8">
          <p className="text-lg md:text-3xl lg:text-4xl font-semibold leading-tight mb-6">
            Book Appointment with trusted counsellors
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-semibold">
            <img className="w-24 md:w-28" src={group_profiles} alt="" />
            <p>
              We are here to help you to fulfill your dreams & <br className="hidden sm:block" />
              Schedule your appointment at earliest with our best counsellors
            </p>
          </div>
          <a
            href="/login"
            className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-full text-black text-sm mt-6 hover:scale-105 transition-transform duration-300"
          >
            Book appointment
            <img className="w-3" src={arrow_icon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};


export default Header

import React from 'react'
import { useNavigate } from 'react-router-dom'
import Batumi from '../assets/Batumi.jpg'
import Student69 from '../assets/Student69.png'
import Student7 from '../assets/Student7.png'
import Student8 from '../assets/Student8.png'


const Banner = () => {
  const navigate = useNavigate()
  
  return (
    <div 
      className="relative w-full max-w-full my-10 md:mx-0"
      style={{
        backgroundImage: `url(${Batumi})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "400px",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center
       justify-between px-6 sm:px-10 md:px-14 lg:px-20 py-12 md:py-20 max-w-screen-xl mx-auto">
        
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-white leading-tight drop-shadow-md">
            Book Appointment
            <br />
            <span className="text-yellow-300">With 10+ Trusted Doctors</span>
          </h1>
          
          <button 
            onClick={() => { navigate('/login'); window.scrollTo(0,0) }} 
            className="mt-8 bg-white text-black font-medium text-sm sm:text-base px-8 
            py-3 rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transform transition-all duration-300"
          >
            Create Account
          </button>
        </div>

        {/* Right Image Illustration */}
        <div className="flex md:w-1/2 w-[600px] h-[300px] justify-center relative mt-10 md:mt-0">
          <img 
            className="w-full h-[600px] mt-[-220px] object-cover rounded-lg"
            src={Student7} 
            alt="Appointment" 
          />
        </div>
      </div>
    </div>
  )
}

export default Banner

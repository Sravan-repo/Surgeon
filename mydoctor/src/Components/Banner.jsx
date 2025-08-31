import React from 'react'
import { useNavigate } from 'react-router-dom'
import Batumi from '../assets/Batumi.jpg'
import Student7 from '../assets/Student7.png'

const Banner = () => {
  const navigate = useNavigate()
  return (
    <div
      className="relative w-[screen] h-[screen] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${Batumi})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-700/60"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-12 
      lg:px-24 py-10 md:py-20 w-full max-w-6xl mx-auto">
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-8">
            Book Appointment
            <br />
            <span className="text-yellow-400 font-semibold">
              With 10+ Trusted Doctors
            </span>
          </h1>
          <button
            onClick={() => { navigate('/login'); window.scrollTo(0, 0) }}
            className="mt-3 sm:mt-8 bg-yellow-400 text-blue-900 text-base sm:text-lg px-10 py-4 rounded-full shadow-xl font-bold
             hover:bg-yellow-500 hover:text-blue-800 transform hover:scale-105 transition-all duration-300 
             focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            Create Account
          </button>
        </div>
        {/* Right Image Illustration */}
        <div className="hidden lg:flex w-full lg:w-[440px] h-64 lg:h-[500px] justify-end items-center mt-8 lg:mt-0 
        overflow-hidden rounded-xl shadow-xl bg-white/10">
          <img
            className="w-full h-full object-cover object-center rounded-xl"
            src={Student7}
            alt="Appointment"
          />
        </div>

      </div>
    </div>
  )
}

export default Banner

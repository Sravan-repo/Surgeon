import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-black'>
      <p>CONTACT <span className='text-black font-semibold'>US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
      <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt=""/>
    
      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semi-bold text-lg text-black'>OUR OFFICE</p>
        <p className='text-gray-700'>8975 Willms Station <br /> Suite 000, Kalashgiri, Vizag</p>
        <p className='text-gray-700'>Tel: (258) 2547-7450</p>
        <p className='text-gray-700'>Email: greatstackdev@gmail.com</p>
        <p className='font-semibold text-lg text-gray-700'>CAREERS AT PRESCRIPTO</p>
        <p className='text-gray-500'>Learn more about our teams and job openings.</p>
        <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500' >Explore Jobs</button>
      </div>
      </div>
    </div>
  )
}

export default Contact
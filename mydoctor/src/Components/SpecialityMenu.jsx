import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-6 text-black px-4 sm:px-10 md:px-20" id="speciality">
      <h1 className="text-3xl font-semibold text-center md:text-left">Find by Speciality</h1>
      <p className="max-w-xl sm:max-w-2xl text-center text-sm text-gray-700">
        Simply browse through our extensive list of specialities, schedule your appointment hassle-free.
      </p>
      <div className="flex overflow-x-auto sm:justify-center gap-6 pt-6 w-full scrollbar-hide">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-xs sm:text-sm cursor-pointer flex-shrink-0 hover:-translate-y-2 transition-transform duration-500"
            key={index}
            to={`/doctors/${item.speciality}`}
          >
            <img
              className="w-16 h-16 sm:w-24 sm:h-24 mb-2 rounded-lg object-cover"
              src={item.image}
              alt={item.speciality}
              loading="lazy"
            />
            <p className="whitespace-nowrap sm:whitespace-normal text-center">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu

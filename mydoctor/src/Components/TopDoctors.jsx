import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  return (
    <div className="flex flex-col items-center gap-6 my-16 text-black md:mx-16 px-4 sm:px-10">
      <h1 className="text-3xl font-semibold text-center md:text-left">Top Specialised Doctors to Book</h1>
      <p className="max-w-xl sm:max-w-2xl text-center text-sm text-gray-700 mb-6">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`)
              scrollTo(0, 0)
            }}
            key={index}
            className="cursor-pointer bg-white shadow-md overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-center pt-6">
              <img
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-blue-900"
                src={item.image}
                alt={item.name}
                loading="lazy"
              />
            </div>
            <div className="p-4 text-center">
              <div className="flex items-center justify-center gap-2 text-green-600 mb-2">
                <span className="w-3 h-3 rounded-full bg-green-600 inline-block"></span>
                <p className="text-sm font-medium">Available</p>
              </div>
              <p className="text-lg font-semibold text-gray-900 mb-1 truncate">{item.name}</p>
              <p className="text-sm text-gray-600 truncate">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopDoctors

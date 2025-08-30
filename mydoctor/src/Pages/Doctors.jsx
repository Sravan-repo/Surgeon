import React, {useContext, useState, useEffect} from 'react'
import { AppContext } from '../context/AppContext'
import {useParams, useNavigate} from 'react-router-dom'


const Doctors = () => {

  const{speciality} = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter,setShowFilter] = useState(false)
  const navigate = useNavigate()

  const {doctors} =useContext(AppContext)
  const applyFilter = () =>{
    if(speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }else{
      setFilterDoc(doctors) 
    }
  }

  useEffect(()=>{applyFilter()}, [doctors,speciality])
  return (

    <div>
      {/* <p className='text-black'> Browse through the doctors specialist. </p> */}
      <div className=' flex flex-wrap sm:flex-row items-start gap-5 mt-10'>
        <button className={`py-1 px-3 border text-sm transition-all sm:hidden ${showFilter? 'bg-blue-900 text-black':''}`} onClick={()=>setShowFilter(prev => !prev)}>Filters</button>
        <div className= {`flex-wrap justify-center text-center gap-5 text-sm text-black ${showFilter ? 'flex':'hidden sm:flex'}`}>
          <p onClick={()=> speciality ==='General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`container w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 text-black text-center rounded-4xl shadow  bg-gray-200 transition-all cursor-pointer  ${speciality ==="General physician" ?"bg-indigo-100 text-black " :"" }`}>General physician</p>
          <p onClick={()=> speciality ==='Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 text-black text-center rounded-4xl bg-gray-200 transition-all cursor-pointer ${speciality ==="Gynecologist" ?"bg-indigo-100 text-black" :"" }`}>Gynecologist</p>
          <p onClick={()=> speciality ==='Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 text-black text-center rounded-4xl bg-gray-200 transition-all cursor-pointer ${speciality ==="Dermatologist" ?"bg-indigo-100 text-black" :"" }`} >Dermatologist</p>
          <p onClick={()=> speciality ==='Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 text-black text-center rounded-4xl bg-gray-200 transition-all cursor-pointer ${speciality ==="Pediatricians" ?"bg-indigo-100 text-black" :"" }`}>Pediatricians</p>
          <p onClick={()=> speciality ==='Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 text-black text-center  rounded-4xl bg-gray-200 transition-all cursor-pointer ${speciality ==="Neurologist" ?"bg-indigo-100 text-black" :"" }`}>Neurologist</p>
          <p onClick={()=> speciality ==='Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 text-black text-center rounded-4xl bg-gray-200 transition-all cursor-pointer ${speciality ==="Gastroenterologist" ?"bg-indigo-100 text-black" :"" }`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto grid-cols-5 gap-4 gap-y-6'>
          {
            filterDoc.map((item,index)=> (
              <div onClick={()=>navigate(`/appointment/${item._id}`)} className=' border-gray-400 overflow-hidden
               cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                  <img className='bg-blue-900 rounded-full' src={item.image} alt=""/>
                  <div className='p-4'>
                      <div className='flex items-center gap-2 text-sm text-center text-green-600'>
                          <p className='w-2 h-2 bg-green-600 rounded-full'></p>
                          <p>Available</p>
                      </div>
                         <p className='text-black text-lg font-medium'>{item.name}</p>
                         <p className='text-black text-sm '>{item.speciality}</p>
                  </div>
              </div>
           ))
           }
        </div>
      </div>
    </div>
  )
}

export default Doctors
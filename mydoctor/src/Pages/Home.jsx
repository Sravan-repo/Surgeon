import React from 'react'
import Header from '../Components/Header'
import SpecialityMenu from '../Components/SpecialityMenu'
import Common from './Common'
import TopDoctors from '../Components/TopDoctors'
import Banner from '../Components/Banner'
import TopUniversities from '../Components/TopUniversities'
import Documents from '../Components/Documents'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
      <Header />
      <Common />
      <TopUniversities />
      <Documents />
      <Banner />
      <SpecialityMenu />
      <TopDoctors />
      <Testimonials />
    
    </div>
  )
}

export default Home
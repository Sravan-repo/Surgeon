// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import  Home  from './Pages/Home'
// import  About  from './Pages/About'
// import  Contact  from './Pages/Contact'
// import  Common  from './Pages/Common'
// import Gallery from './Pages/Gallery'
// import  Doctors  from './Pages/Doctors'
// import Explorembbs from './Pages/Explorembbs'
// import  TopUniversities  from './Components/TopUniversities'
// import Tbilisi from './Pages/Tbilisi'
// import Caucasus from './Pages/Caucasus'
// import Seu from './Pages/Seu'
// import Akaki from './Pages/Akaki'
// import Geomedi from './Pages/Geomedi'
// import DavidTvildiani from './Pages/DavidTvildiani'
// import Batumi from './Pages/Batumi'
// import IliaState from './Pages/IliaState'
// import IvaneJavakhishvili from './Pages/IvaneJavakhishvili'
// import UniversityofGeorgia from './Pages/UniversityofGeorgia'
 
// import  Testimonials  from './Pages/Testimonials'
// import  Login  from './Pages/Login'
// import  MyProfile  from './Pages/MyProfile'
// import  MyAppointments  from './Pages/MyAppointments'
// import Documents from './Components/Documents'
// import  Appointment  from './Pages/Appointment'
// import Navbar from './Components/Navbar'
// import Footer from './Components/Footer'

// const App = () => {
//   return (
//     <div className='mx-4 sm:mx-[10%]'>
//     <Navbar />
//     <Routes> 
//       <Route path= '/' element= {<Home/>} /> 
//       <Route path= '/doctors' element= {<Doctors/>} />
//       <Route path= '/doctors/:speciality' element= {<Doctors/>} />
//       <Route path= '/explore-mbbs' element= {<Explorembbs/>} />
//       <Route path= '/top-universities' element= {<TopUniversities/>} />
//       <Route path= '/universities/tbilisi' element= {<Tbilisi/>} />
//       <Route path= '/universities/caucasus' element= {<Caucasus/>} />
//       <Route path= '/universities/seu' element= {<Seu/>} />
//       <Route path= '/universities/akaki' element= {<Akaki/>} />
//       <Route path= '/universities/geomedi' element= {<Geomedi/>} />
//       <Route path= '/universities/david-tvildiani' element= {<DavidTvildiani/>} />
//       <Route path= '/universities/batumi' element= {<Batumi/>} />
//       <Route path= '/universities/ilia-state' element= {<IliaState/>} />
//       <Route path= '/universities/ivane-javakhishvili' element= {<IvaneJavakhishvili/>} />
//       <Route path= '/universities/university-of-georgia' element= {<UniversityofGeorgia/>} />

//       <Route path= '/testimonials' element= {<Testimonials/>} />
//       <Route path= '/gallery' element= {<Gallery/>} />
//       <Route path= '/about' element= {<About/>} />
//       <Route path= '/contact' element= {<Contact/>} />
//       <Route path= '/documents' element= {<Documents/>} />
//       <Route path= '/common' element= {<Common/>} />
//       <Route path= '/login' element= {<Login/>} />
//       <Route path= '/my-profile' element= {<MyProfile/>} />

//       <Route path= '/my-appointments' element= {<MyAppointments/>} />
//       <Route path= '/appointment/:docId' element= {<Appointment/>} />
//     </Routes>
//     <Footer/>
//     </div>
//   )
// }

// export default App

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Common from './Pages/Common';
import Gallery from './Pages/Gallery';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Documents from './Components/Documents';
import Login from './Pages/Login';
import MyProfile from './Pages/MyProfile';
import MyAppointments from './Pages/MyAppointments';
import Appointment from './Pages/Appointment';

// Lazy load larger page components
const Doctors = lazy(() => import('./Pages/Doctors'));
const Explorembbs = lazy(() => import('./Pages/Explorembbs'));
const TopUniversities = lazy(() => import('./Components/TopUniversities'));
const Tbilisi = lazy(() => import('./Pages/Tbilisi'));
const Caucasus = lazy(() => import('./Pages/Caucasus'));
const Seu = lazy(() => import('./Pages/Seu'));
const Akaki = lazy(() => import('./Pages/Akaki'));
const Geomedi = lazy(() => import('./Pages/Geomedi'));
const DavidTvildiani = lazy(() => import('./Pages/DavidTvildiani'));
const Batumi = lazy(() => import('./Pages/Batumi'));
const IliaState = lazy(() => import('./Pages/IliaState'));
const IvaneJavakhishvili = lazy(() => import('./Pages/IvaneJavakhishvili'));
const UniversityofGeorgia = lazy(() => import('./Pages/UniversityofGeorgia'));
const Testimonials = lazy(() => import('./Pages/Testimonials'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading page...</div>}>
        <div className='mx-4 sm:mx-[10%]'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='/doctors/:speciality' element={<Doctors />} />
            <Route path='/explore-mbbs' element={<Explorembbs />} />
            <Route path='/top-universities' element={<TopUniversities />} />
            <Route path='/universities/tbilisi' element={<Tbilisi />} />
            <Route path='/universities/caucasus' element={<Caucasus />} />
            <Route path='/universities/seu' element={<Seu />} />
            <Route path='/universities/akaki' element={<Akaki />} />
            <Route path='/universities/geomedi' element={<Geomedi />} />
            <Route path='/universities/david-tvildiani' element={<DavidTvildiani />} />
            <Route path='/universities/batumi' element={<Batumi />} />
            <Route path='/universities/ilia-state' element={<IliaState />} />
            <Route path='/universities/ivane-javakhishvili' element={<IvaneJavakhishvili />} />
            <Route path='/universities/university-of-georgia' element={<UniversityofGeorgia />} />

            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/documents' element={<Documents />} />
            <Route path='/common' element={<Common />} />
            <Route path='/login' element={<Login />} />
            <Route path='/my-profile' element={<MyProfile />} />

            <Route path='/my-appointments' element={<MyAppointments />} />
            <Route path='/appointment/:docId' element={<Appointment />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
};

export default App;

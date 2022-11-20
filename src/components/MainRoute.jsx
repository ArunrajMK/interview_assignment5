import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Career from './Career'
import Home from './Home'
import Login from './Login'
import Recover from './Recover'
import Services from './Services'
import SignUp from './SignUp'

function MainRoute() {
  return (
   <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="signup" element={<SignUp/>} />
    <Route path="recover" element={<Recover/>} />
    <Route path="home" element={<Home/>} />
    <Route path="About" element={<About/>} />
    <Route path="services" element={<Services/>} />
    <Route path="career" element={<Career/>} />
   </Routes>
  )
}

export default MainRoute
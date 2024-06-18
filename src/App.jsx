// Install Tailwind, react-icons, aos, react-slick, slick-carousel

import React, { useEffect, useState } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'
import About from './components/About/About'
import AppStore from './components/AppStore/AppStore'
import Feature from './components/Feature/Feature'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    })
  })

  return (
    <div>
      <Navbar/>
      <Home/>
      <Menu/>
      <About/>
      <AppStore/>
      <Feature/>
      <Gallery/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App
//No need of this file, instead of this we are using react router in main.jsx file like  <RouterProvider router={router} />
// you can delete this file


import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/Home/HeroSection'
import FeatureSection from './components/Home/FeatureSection'
import Workflow from './components/Home/Workflow'
import Pricing from './components/About/Pricing'
import Testimonials from './components/Home/Testimonials'
import FooterBottom from './components/Footer/FooterBottom'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const App = () => {

  return (
    <>
      
      {/* <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
        <FooterBottom />
      </div> */}
    </>
  )
}

export default App
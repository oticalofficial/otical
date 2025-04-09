//This code also can be writtedn in App.jsx file
// we will use same header footer in all pages so we will use layout.jsx file
import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import FooterBottom from './components/Footer/FooterBottom'

function Layout() {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <Outlet />
    <Footer />
    <FooterBottom />

    </div>
    </>
  )
}

export default Layout
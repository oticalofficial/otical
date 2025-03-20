import React from 'react'
import HeroSection from './HeroSection'
import FeatureSection from './FeatureSection'
import Workflow from './Workflow'
import Pricing from '../About/Pricing'
import Testimonials from './Testimonials'

function Home() {
  return (
    <>
    <HeroSection />
    <FeatureSection />
    <Workflow />
    <Testimonials />
    </>
  )
}

export default Home
import React from 'react'
import { CoreNavbar } from './Navbar'
import SearchBox from './SearchBox'
import Hero from './Hero'
import ContactSection from './ContactSection'
import Footer from './Footer'
import TrendingSection from './TrendingSection'

const HomePage = () => {
  return (
    <>
        <CoreNavbar/>
        <Hero/>
        <SearchBox/>
        <TrendingSection/>
        <ContactSection/>
        <Footer/>
    </>
  )
}

export default HomePage
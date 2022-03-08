

import React , { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Teams from '../components/Teams'



const Search = () => {

    const [isOpen ,setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
        <Teams />
        <Services />
        <Footer />
        
    </>
  )
}

export default Search
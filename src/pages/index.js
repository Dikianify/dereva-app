import React, {useEffect, useState} from 'react'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)



  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services />
      <InfoSection {...homeObjThree}/>
      <Footer />
    </>
  )
}

export default Home

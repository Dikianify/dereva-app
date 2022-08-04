import React, {useEffect, useState} from 'react'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'


const Home = ({ token }) => {
  const [isOpen, setIsOpen] = useState(false)



  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  const [ profToggle, setProfToggle ] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/profile', {
      'method':'POST',
      'headers': {
      'Accept':'applitcation/json',
      'Content-Type':'application/json',
      'Authorization':'Bearer ' + token
    }}).then(response => (response.status === 200 ? 
      setProfToggle(true) : setProfToggle(false)))
  })

  return (
    <>
      <Sidebar isOpen={isOpen} profToggle={profToggle} toggle={toggle}/>
      <Navbar profToggle={profToggle} toggle={toggle}/>
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

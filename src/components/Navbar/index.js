import React, {useState, useEffect} from 'react'
import Icon1 from '../../images/logo.PNG'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, NavLogoLink, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'


const Navbar = ({ profToggle, toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = ()=> {
    if(window.scrollY >= window.screen.height-80) {
      setScrollNav(true)
    }
    else {
      setScrollNav(false)
    }
  }

  useEffect(()=> {
    window.addEventListener('scroll', changeNav)
  }, [])

  

  function NavButton(profToggle) {
    console.log(profToggle)
    return (profToggle === true ? <NavBtnLink to="/account">Account</NavBtnLink> : <NavBtnLink to="/signin">Sign In</NavBtnLink>)
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogoLink to='home' smooth={true} duration={500} exact='true' offset={50}>
            <NavLogo src={Icon1}>
            </NavLogo> 
          </NavLogoLink>            
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={0}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={0}>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={0}>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup" smooth={true} duration={500} spy={true} exact='true' offset={0}>Consult</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/booknow">Book Now</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar

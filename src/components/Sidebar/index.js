import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper,
SidebarMenu, 
SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({ isOpen, profToggle, toggle }) => {
  function NavButton(profToggle) {
    return (profToggle ? <SidebarRoute to="/account">Account</SidebarRoute> : <SidebarRoute to="/signin">Sign In</SidebarRoute>)
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>Consult</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <NavButton profToggle={profToggle} />
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
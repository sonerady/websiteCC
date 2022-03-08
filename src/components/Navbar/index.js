import React  , {useEffect, useState}from 'react'
import { Nav , NavbarContainer , NavLogo , NavItem , NavLinks , MobileIcon , NavMenu , NavBtn ,NavBtnLink} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll'
import {FaBars} from 'react-icons/fa'

import { IconContext } from 'react-icons/lib';


const Navbar = ({toggle}) => {

  const [scrollNav , setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80){
      setScrollNav(true)
    }
    else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll' , changeNav)
  },[])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{color: '#fff' }}>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome} duration={500}>CChecker</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} >About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='search' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Audit</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='tokens' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Development</NavLinks>
              </NavItem>
              
              <NavItem>
                <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Team</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='teams' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
            
        </NavbarContainer>
    </Nav>
    </IconContext.Provider>
    </>
  );
};

export default Navbar
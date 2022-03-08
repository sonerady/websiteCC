import React  , {useEffect, useState}from 'react'
import { Nav , NavbarContainer , NavLogo , NavItem , NavLinks , MobileIcon , NavMenu , NavBtn ,NavBtnLink} from './NavbarElementstwo';
import {animateScroll as scroll} from 'react-scroll'
import {FaBars} from 'react-icons/fa'

import { IconContext } from 'react-icons/lib';
import MainPage from '../pages/mainPage';

const Navbartwo = ({toggle}) => {

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
              
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/mainPage" href={MainPage}>About Me</NavBtnLink>
            </NavBtn>
            
        </NavbarContainer>
    </Nav>
    </IconContext.Provider>
    </>
  );
};

export default Navbartwo
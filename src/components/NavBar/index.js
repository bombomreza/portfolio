import React, {useEffect, useState} from 'react'
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import logoBB from '../../images/bombom1.jpg'
import { 
    Nav,
    NavbarContainer,
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBarIcon, 
} from "./NavbarElements";

const Navbar = ( {toggle} ) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect (() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
              <NavbarContainer>
                  <NavLogo to ="/" onClick={toggleHome}>
                  <NavBarIcon src={logoBB} />
                  {/* <NavBarIcon src={logoMM}/> */}
                  {/* <NavCircle />
                  BomBom
                  <NavCircle /> */}
                  </NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks 
                          to="about" 
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-60}
                          >
                          About me
                          </NavLinks>
                      </NavItem>
                        <NavItem>
                          <NavLinks 
                          to="timeline"
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-60}
                          >
                          Timeline
                          </NavLinks>
                      </NavItem>
                        <NavItem>
                          <NavLinks 
                          to="contact"
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-60}
                          >
                          Contact
                          </NavLinks>
                      </NavItem>
                  </NavMenu>
              </NavbarContainer>  
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtnLink,
  NavIcon,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavLogo,
  NavMenu,
} from './Navbar.element';
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const showButton = () =>
    window.innerWidth <= 960 ? setButton(false) : setButton(true);

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            {/* Brand Logo */}
            <NavLogo to='/'>
              <NavIcon />
              ULTRA
            </NavLogo>
            {/* Toggle Icons */}
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            {/* Navigation Menu & Btn */}
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/'>Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/service'>Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/products'>Products</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up'>
                    <Button primary>Sign up</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up'>
                    <Button onClick={showButton} primary fontBig>
                      Sign Up
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

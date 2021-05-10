import React from 'react';
import { Nav, NavLink, NavIcon, Bars, H1 } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'><H1>Yến Sào Sơn Hà</H1></NavLink>
 
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;

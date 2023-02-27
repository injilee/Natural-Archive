import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Nav, SlideMenu } from '../styles/components/NavBar';

const NavBar = () => {
   const [open, setOpen] = useState(false);

   const openSlide = () => {
      setOpen(!open);
   };
   return (
      <Header>
         <Nav>
            <Link to="/">
               <h1>Natural Archive</h1>
            </Link>
            <span onClick={openSlide}>menu</span>
            <SlideMenu open={open}>
               <Link to="/photographer">
                  <li>Photographer</li>
               </Link>
               <Link to="/categories">
                  <li>Categories</li>
               </Link>
               <Link to="/photos">
                  <li>Photos</li>
               </Link>
            </SlideMenu>
         </Nav>
      </Header>
   );
};

export default NavBar;

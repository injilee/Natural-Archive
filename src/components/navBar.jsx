import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Nav, SlideMenu } from '../styles/components/NavBar';

const NavBar = () => {
   const [open, setOpen] = useState(false);

   const openSlide = () => {
      setOpen(!open);
   };

   const closeSlide = () => {
      if (open === true) {
         setOpen(false);
      } else {
         return;
      }
   };

   return (
      <Header>
         <Nav>
            <Link to="/">
               <h1 onClick={closeSlide}>
                  <img src="logo.png" alt="Natural Archive" />
               </h1>
            </Link>
            <span onClick={openSlide}>{open ? 'close' : 'menu'}</span>
         </Nav>
         <SlideMenu open={open}>
            <ul>
               <Link to="/photographer">
                  <li onClick={openSlide}>Photographer</li>
               </Link>
               <Link to="/categories">
                  <li onClick={openSlide}>Categories</li>
               </Link>
               <Link to="/photos">
                  <li onClick={openSlide}>Photos</li>
               </Link>
            </ul>
         </SlideMenu>
      </Header>
   );
};

export default NavBar;

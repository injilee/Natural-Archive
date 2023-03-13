import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Nav, SlideMenu } from '../../styles/components/NavBar';

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
                  <span>Natural Archive</span>
               </h1>
            </Link>
            <span onClick={openSlide}>{open ? 'close' : 'menu'}</span>
         </Nav>
         <SlideMenu open={open}>
            <ul>
               <li onClick={openSlide}>
                  <Link to="/photographer">Photographer</Link>
               </li>
               <li onClick={openSlide}>
                  <Link to="/categories">Categories</Link>
               </li>
               <li onClick={openSlide}>
                  <Link to="/photos">Photos</Link>
               </li>
            </ul>
         </SlideMenu>
      </Header>
   );
};

export default NavBar;

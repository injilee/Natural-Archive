import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './components/categories/categories';
import Landscape from './components/categories/landscape/landscape';
import Life from './components/categories/life/life';
import Project from './components/categories/project/project';
import Spaces from './components/categories/spaces/spaces';
import Travel from './components/categories/travel/travel';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import NavBar from './components/navBar/navBar';
import Photographer from './components/photographer/photographer';
import Photos from './components/photos/photos';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
   return (
      <>
         <BrowserRouter>
            <GlobalStyle />
            <NavBar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/photographer" element={<Photographer />} />
               <Route path="/categories" element={<Categories />} />
               <Route path="/photos" element={<Photos />} />
               <Route path="/categories/spaces" element={<Spaces />} />
               <Route path="/categories/landscape" element={<Landscape />} />
               <Route path="/categories/life" element={<Life />} />
               <Route path="/categories/travel" element={<Travel />} />
               <Route path="/categories/projects" element={<Project />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </>
   );
};

export default App;

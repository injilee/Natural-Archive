import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './components/categories';
import Footer from './components/footer';
import Home from './components/home';
import NavBar from './components/navBar';
import Photographer from './components/photographer';
import Photos from './components/photos';
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
            </Routes>
            <Footer />
         </BrowserRouter>
      </>
   );
};

export default App;

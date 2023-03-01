import React from 'react';
import { CategorieList } from '../styles/components/categories';

const Categories = () => {
   return (
      <CategorieList>
         <ul>
            <li>Spaces</li>
            <li>Landscape</li>
            <li>Life</li>
            <li>Travel</li>
            <li>Personal Projects</li>
         </ul>
      </CategorieList>
   );
};

export default Categories;

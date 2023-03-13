import React from 'react';
import { Link } from 'react-router-dom';
import { CategorieList } from '../../styles/components/Categories';

const Categories = () => {
   return (
      <CategorieList>
         <ul>
            <li>
               <Link to="spaces">Spaces</Link>
            </li>
            <li>
               <Link to="landscape">Landscape</Link>
            </li>
            <li>
               <Link to="life">Life</Link>
            </li>
            <li>
               <Link to="travel">Travel</Link>
            </li>
            <li>
               <Link to="projects">Personal Projects</Link>
            </li>
         </ul>
      </CategorieList>
   );
};

export default Categories;

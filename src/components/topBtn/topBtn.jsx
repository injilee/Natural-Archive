import React, { useEffect, useState } from 'react';
import { TopButton } from '../../styles/components/TopButton';
import smoothscroll from 'smoothscroll-polyfill';

const TopBtn = () => {
   const [showBtn, setShowBtn] = useState(false);

   const scrollToTop = () => {
      window.scroll({
         top: 0,
         behavior: 'smooth',
      });
   };

   useEffect(() => {
      const handleShowBtn = () => {
         if (window.scrollY > 500) {
            setShowBtn(true);
            smoothscroll.polyfill();
         } else {
            setShowBtn(false);
         }
      };

      window.addEventListener('scroll', handleShowBtn);
      return () => {
         window.removeEventListener('scroll', handleShowBtn);
      };
   }, []);

   return (
      showBtn && (
         <TopButton>
            <button onClick={scrollToTop} type="button">
               Top
            </button>
         </TopButton>
      )
   );
};

export default TopBtn;

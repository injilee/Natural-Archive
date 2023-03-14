import React from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { NextBtn, PrevBtn } from '../../../styles/components/Carousel';

const Button = props => {
   let index = 0;

   const prevSlider = () => {
      if (index === 0) return;
      index -= 1;
      carousel.current.style.transform = `translate3d(-${740 * index}px, 0,0)`;
   };

   const nextSlider = () => {
      if (index === 5) return;
      index += 1;
      console.log(carousel);
      carousel.current.style.transform = `translate3d(-${740 * index}px, 0,0)`;
   };

   return (
      <>
         <PrevBtn type="button" className="prev" onClick={prevSlider}>
            <GrPrevious />
         </PrevBtn>
         <NextBtn type="button" className="next" onClick={nextSlider}>
            <GrNext />
         </NextBtn>
      </>
   );
};

export default Button;

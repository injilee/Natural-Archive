import React, { createRef } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import {
   Carousel,
   CarouselItem,
   CarouselTitle,
   CarouselWrap,
   NextBtn,
   PrevBtn,
} from '../../../styles/components/Carousel';
import data from '../../service/data.json';

const Spaces = () => {
   const carousel = createRef();

   let index = 0;

   const prevSlider = () => {
      if (index === 0) return;
      index -= 1;
      carousel.current.style.transform = `translate3d(-${740 * index}px, 0,0)`;
   };

   const nextSlider = () => {
      if (index === 5) return;
      index += 1;
      carousel.current.style.transform = `translate3d(-${740 * index}px, 0,0)`;
   };

   return (
      <>
         <CarouselWrap>
            <Carousel ref={carousel}>
               {data.archivePictures[0].spaces.map(spaces => (
                  <CarouselItem key={spaces.key}>
                     <div>
                        <img src={spaces.imgUrl} alt={spaces.alt} />
                     </div>
                  </CarouselItem>
               ))}
            </Carousel>
            <PrevBtn type="button" className="prev" onClick={prevSlider}>
               <GrPrevious />
            </PrevBtn>
            <NextBtn type="button" className="next" onClick={nextSlider}>
               <GrNext />
            </NextBtn>
         </CarouselWrap>
         <CarouselTitle>
            <h2>Spaces</h2>
         </CarouselTitle>
      </>
   );
};

export default Spaces;

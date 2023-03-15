import React, { createRef, useEffect, useState } from 'react';
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

const Landscape = props => {
   const carousel = createRef();
   const [index, setIndex] = useState(0);

   const prevSlider = () => {
      if (index === 0) return;
      setIndex(index - 1);
   };

   const nextSlider = () => {
      if (index === 5) return;
      setIndex(index + 1);
   };

   useEffect(() => {
      carousel.current.style.transform = `translate3d(-${740 * index}px, 0,0)`;

      window.addEventListener('resize', () => {
         const carousel = document.getElementById('carousel');
         if (window.innerWidth <= 768) {
            setIndex(0);
            carousel.style.transform = `translate3d(0, 0, 0)`;
         }
         return;
      });
   }, [carousel, index]);

   return (
      <>
         <CarouselWrap>
            <CarouselTitle>
               <h2>Landscape</h2>
            </CarouselTitle>
            <Carousel ref={carousel} id="carousel">
               {data.archivePictures[1].landscape.map(landscape => (
                  <CarouselItem key={landscape.key}>
                     <div>
                        <img src={landscape.imgUrl} alt={landscape.alt} />
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
      </>
   );
};

export default Landscape;

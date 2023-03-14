import React from 'react';
import { Carousel, CarouselWrap } from '../../../styles/components/Carousel';

const Landscape = props => {
   return (
      <CarouselWrap>
         <Carousel>
            <div>
               <img src="../images/photo/landscape/IMG_0478.jpg" alt="달" />
            </div>
            <div>
               <img src="../images/photo/landscape/20200815_211003.jpg" alt="별이 빛나는 밤" />
            </div>
            <div>
               <img src="../images/photo/landscape/20191117_143502.jpg" alt="흐린 날과 창고" />
            </div>
            <div>
               <img src="../images/photo/landscape/20200709_094719.jpg" alt="안개 낀 숲" />
            </div>
            <div>
               <img src="../images/photo/landscape/20151115_093207_HDR.jpg" alt="논 풍경" />
            </div>
            <div>
               <img src="../images/photo/landscape/20191106_165805.jpg" alt="선착장" />
            </div>
         </Carousel>
      </CarouselWrap>
   );
};

export default Landscape;

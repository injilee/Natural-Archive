import React from 'react';
import { Carousel, CarouselWrap } from '../../../styles/components/Carousel';

const Life = props => {
   return (
      <CarouselWrap>
         <Carousel>
            <div>
               <img src="../images/photo/life/IMG_0884.jpg" alt="꽃의 꿀을 먹는 나비" />
            </div>
            <div>
               <img src="../images/photo/life/IMG_0695.jpg" alt="검은흰점나비" />
            </div>
            <div>
               <img src="../images/photo/life/IMG_0226.jpg" alt="개" />
            </div>
            <div>
               <img src="../images/photo/life/IMG_0944.jpg" alt="버섯" />
            </div>
            <div>
               <img src="../images/photo/life/IMG_0389.jpg" alt="닭" />
            </div>
            <div>
               <img src="../images/photo/life/IMG_1032.jpg" alt="돌틈에 숨은 도마뱀" />
            </div>
         </Carousel>
      </CarouselWrap>
   );
};

export default Life;

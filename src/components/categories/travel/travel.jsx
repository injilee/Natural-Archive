import React from 'react';
import { Carousel, CarouselWrap } from '../../../styles/components/Carousel';

const Travel = props => {
   return (
      <CarouselWrap>
         <Carousel>
            <div>
               <img src="../images/photo/travel/KakaoTalk_20191105_193848856_01.jpg" alt="부둣가의 화물 컨테이너" />
            </div>
            <div>
               <img src="../images/photo/travel/20191024_173439.jpg" alt="빗물에 반사된 육교 난간" />
            </div>
            <div>
               <img src="../images/photo/travel/IMG_0797.jpg" alt="바닷가" />
            </div>
            <div>
               <img src="../images/photo/travel/org_05d3fa725e58657f_1573889560000.jpg" alt="드론으로 찍은 산 풍경" />
            </div>
            <div>
               <img src="../images/photo/travel/IMG_0991.jpg" alt="시골 논길" />
            </div>
            <div>
               <img src="../images/photo/travel/김창림5.jpg" alt="나룻배" />
            </div>
         </Carousel>
      </CarouselWrap>
   );
};

export default Travel;

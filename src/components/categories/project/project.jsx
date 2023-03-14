import React from 'react';
import { Carousel, CarouselWrap } from '../../../styles/components/Carousel';

const Project = props => {
   return (
      <CarouselWrap>
         <Carousel>
            <div>
               <img src="../images/photo/projects/KakaoTalk_20191116_095621513_03.jpg" alt="레드키위 단면" />
            </div>
            <div>
               <img src="../images/photo/projects/20191121_195938.jpg" alt="빛의 속도" />
            </div>
            <div>
               <img src="../images/photo/projects/IMG_0614.jpg" alt="나뭇잎 위 이슬" />
            </div>
            <div>
               <img src="../images/photo/projects/KakaoTalk_20191030_210105304_02.jpg" alt="구리선 단면" />
            </div>
            <div>
               <img src="../images/photo/projects/IMG_0766-2.jpg" alt="무지개 화분" />
            </div>
            <div>
               <img src="../images/photo/projects/IMG_0736.jpg" alt="무지개 책" />
            </div>
         </Carousel>
      </CarouselWrap>
   );
};

export default Project;

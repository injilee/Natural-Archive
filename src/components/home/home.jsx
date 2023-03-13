import React from 'react';
import { Link } from 'react-router-dom';
import { CarouselWrap, Carousel } from '../../styles/components/Home';

const Home = () => {
   return (
      <CarouselWrap>
         <Carousel>
            <div>
               <Link to="/categories/life">Life</Link>
               <img src="./images/photo/life/IMG_0382.jpg" alt="수탉" />
            </div>
            <div>
               <Link to="/categories/spaces">Spaces</Link>
               <img src="./images/photo/spaces/20191019_154424.jpg" alt="우체통" />
            </div>
            <div>
               <img src="./images/photo/spaces/20191123_114430.jpg" alt="폐 건물" />
            </div>
            <div>
               <Link to="/categories/landscape">Landscape</Link>
               <img src="./images/photo/landscape/20200922_104101.jpg" alt="시골 풍경" />
            </div>
            <div>
               <Link to="travel">Travel</Link>
               <img src="./images/photo/landscape/20191116_150339.jpg" alt="가을 숲 풍경" />
            </div>
            <div>
               <Link to="projects">Projects</Link>
               <img src="./images/photo/projects/20200622_155757-2.jpg" alt="수초" />
            </div>
         </Carousel>
      </CarouselWrap>
   );
};

export default Home;

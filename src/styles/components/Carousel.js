import styled from 'styled-components';

export const CarouselWrap = styled.div`
   position: relative;
   background-color: black;
   min-height: 100vh;

   @media screen and (min-width: 768px) {
      padding: 0 30px;
      overflow: hidden;
   }
`;

export const Carousel = styled.div`
   position: relative;
   margin: 0 auto;
   transform:translate3d(0, 0, 0);
   transition:transform 0.3s ease-out;
   
   @media screen and (min-width:768px){
      width:700px;
      display:flex;
      
      div{
         margin:0 20px;
         
         img {
               width:700px;
            }
         }
      }
   }
`;

export const CarouselItem = styled.div`
   margin: 0;

   img {
      display: block;
      width: 100vw;
      height: auto;
      margin-top: 7px;
   }

   @media screen and (min-width: 768px) {
      width: 100%;
   }
`;

export const PrevBtn = styled.button`
   display: none;
   @media screen and (min-width: 768px) {
      position: absolute;
      display: block;
      top: 180px;
      left: 30px;
      width: 30px;
      height: 60px;
      color: white;
      padding: 5px;
      opacity: 0.5;
      border-radius: 15px;
      background-color: white;
      z-index: 10;
   }
`;

export const NextBtn = styled.button`
   display: none;
   @media screen and (min-width: 768px) {
      position: absolute;
      display: block;
      top: 180px;
      right: 30px;
      width: 30px;
      height: 60px;
      color: white;
      padding: 5px;
      opacity: 0.5;
      border-radius: 15px;
      background-color: white;
      z-index: 10;
   }
`;

export const CarouselTitle = styled.section`
   h2 {
      color: white;
      background-color: black;
      font-family: 'Playfair Display', serif;
      font-size: 48px;
      font-weight: 400;
   }
`;

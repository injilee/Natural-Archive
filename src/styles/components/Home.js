import styled from 'styled-components';

export const CarouselWrap = styled.div`
   background-color: black;
   height: 45%;
`;

export const Carousel = styled.div`
   position: relative;
   overflow: hidden;

   div {
      width: 100%;
      margin: 0;

      a {
         position: relative;
         color: white;
         font-size: 65px;
         font-family: 'Playfair Display', serif;
         margin-left: 15px;
         &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: white;
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
         }

         &:hover {
            color: orange;
            &::after {
               transform: scaleX(1);
               transform-origin: bottom left;
            }
         }
      }

      img {
         display: block;
         width: 100vw;
         height: auto;
         margin-top: 7px;
      }
   }
`;

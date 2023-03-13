import styled from 'styled-components';

export const Header = styled.header`
   height: 100px;
   background-color: black;
`;

export const Nav = styled.nav`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   width: 90%;
   height: 100px;
   margin: auto;
   color: white;
   z-index: 10;

   h1 {
      width: 230px;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;

      span {
         color: white;
         font-size: 30px;
         font-weight: 500;
         font-family: 'Ubuntu', sans-serif;
         &:hover {
            text-decoration: none;
         }
      }
   }

   span {
      cursor: pointer;
      &:hover {
         text-decoration: underline;
      }
   }
`;

export const SlideMenu = styled.div`
   position: sticky;
   top: 0;
   left: 0;
   display: block;
   width: 100%;
   padding: 30px 0;
   background-color: black;
   z-index: 10;
   opacity: ${({ open }) => (open ? '1' : '0')};
   visibility: ${({ open }) => (open ? 'visibility' : 'hidden')};
   transition: opacity 0.3s, visibility 0.4s;
   
   ul {
      width: 90%;
      margin: 0 auto;
   }

   li {
      width: 100%;
      font-size: 30px;
      padding: 14px 0;
      
      a{
         color: white;
         &:hover {
            text-decoration: underline;
      }
   }
`;

import styled from 'styled-components';

export const Header = styled.header`
   height: 100px;
   display: sticky;
`;

export const Nav = styled.nav`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   width: 100%;
   padding: 30px 35px;
   background-color: white;
   color: black;
   z-index: 10;

   h1 {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      font-family: '행복고흥L';
      font-size: 48px;
      font-weight: 400;
      line-heigth: 1;
      color: black;
   }

   span {
      cursor: pointer;
      &:hover {
         text-decoration: underline;
      }
   }
`;

export const SlideMenu = styled.ul`
   position: fixed;
   top: 100px;
   left: 0;
   display: block;
   width: 100%;
   padding: 50px 35px;
   margin: 0 auto;
   background-color: white;
   z-index: 10;
   opacity: ${({ open }) => (open ? '1' : '0')};
   visibility: ${({ open }) => (open ? 'visibility' : 'hidden')};
   transition: opacity 0.3s, visibility 0.4s;

   li {
      width: 100%;
      color: black;
      font-size: 30px;
      padding: 3px 0;
      &:hover {
         text-decoration: underline;
      }
   }
`;

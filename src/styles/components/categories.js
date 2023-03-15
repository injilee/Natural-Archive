import styled from 'styled-components';

export const CategorieList = styled.section`
   display: flex;
   align-items: center;
   width: 100%;
   height: 100vh;
   background-color: white;

   ul {
      width: 90%;
      margin: 0 auto;
      color: black;
   }

   li {
      font-style: italic;
      padding-bottom: 18px;

      a {
         color: black;
         &:hover {
            color: orange;
         }
      }
   }
`;

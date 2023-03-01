import styled from 'styled-components';

export const CategorieList = styled.section`
   width: 100%;
   background-color: white;
   padding: 180px 0;

   ul {
      width: 90%;
      margin: 0 auto;
      color: black;
   }

   li {
      font-style: italic;
      padding-bottom: 12px;
      &:hover {
         color: orange;
      }
   }
`;

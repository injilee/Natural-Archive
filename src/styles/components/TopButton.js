import styled from 'styled-components';

export const TopButton = styled.div`
   position: fixed;
   right: 5%;
   bottom: 5%;
   z-index: 1;

   button {
      font-weight: 500;
      font-size: 20px;
      padding: 14px 10px;
      color: white;
      background-color: black;
      border: 3px solid rgb(210, 204, 193);
      border-radius: 50%;
      outline: none;
      cursor: pointer;
      opacity: 1;
      transition: opacity 0.2s ease-out;

      &:hover {
         color: orange;
      }
   }
`;

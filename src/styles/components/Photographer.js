import styled from 'styled-components';

export const ProfileWrap = styled.section`
   padding: 120px 0;
   height: auto;
`;

export const Profile = styled.div`
   width: 80%;
   height: 100%;
   margin: 0 auto;

   img {
      max-width: 100%;
      max-height: 100%;
   }
`;

export const Artist = styled.section`
   width: 80%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin: 22px auto;

   strong {
      font-size: 45px;
      font-family: 'Lora', serif;
      font-weight: 600;
      font-style: italic;
      margin-bottom: 25px;
   }
`;

export const Contact = styled.div`
   display: flex;
   flex-direction: column;

   span {
      font-size: 25px;
      font-family: 'Lora', serif;
      font-weight: 500;
      // font-style: italic;
   }
`;

import styled from 'styled-components';

export const ProfileWrap = styled.section`
   padding: 25px 0;
   height: auto;
`;

export const Profile = styled.div`
   width: 80%;
   height: 100%;
   margin: 0 auto;

   img {
      widht: auto;
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
      font-size: 22px;
      font-family: 'Cutive Mono', monospace;
   }
`;

export const Contact = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-end;

   span {
      font-size: 18px;
      font-family: 'Cutive Mono', monospace;
   }
`;

export const SocialChannel = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;

   button {
      margin-top: 9px;
      font-size: 25px;
      &:first-child {
         margin-right: 5px;
      }
   }
`;

import React from 'react';
import { Artist, Contact, Profile, ProfileWrap } from '../../styles/components/Photographer';

const Photographer = props => {
   return (
      <ProfileWrap>
         <Profile>
            <img src="./images/photo/life/IMG_1019.jpg" alt="profile" />
         </Profile>
         <Artist>
            <strong>Kim Chaung Lim</strong>
            <Contact>
               <span>Tel. 010 - 7582 - 5396</span>
               <span>Email. chaung97@naver.com </span>
            </Contact>
         </Artist>
      </ProfileWrap>
   );
};

export default Photographer;

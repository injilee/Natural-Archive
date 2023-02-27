import React from 'react';
import { Artist, Contact, Profile, ProfileWrap, SocialChannel } from '../styles/components/Photographer';
import { FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';

const Photographer = props => {
   return (
      <ProfileWrap>
         <Profile>
            <img src="./images/profile.jpg" alt="profile" />
         </Profile>
         <Artist>
            <strong>Kim Chaung Lim</strong>
            <Contact>
               <span>Tel. 010 - 7582 - 5396</span>
               <span>Email. chaung97@naver.com </span>
               <SocialChannel>
                  <button>
                     <FaTwitterSquare></FaTwitterSquare>
                  </button>
                  <button>
                     <FaFacebookSquare></FaFacebookSquare>
                  </button>
               </SocialChannel>
            </Contact>
         </Artist>
      </ProfileWrap>
   );
};

export default Photographer;

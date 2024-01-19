import React from 'react';
import { Artist, Contact, Profile, ProfileWrap } from '../../styles/components/Photographer';

const Photographer = props => {
  //   클릭 이벤트가 발생했을때, 우클릭 이벤트 방지
  const handleRightClick = e => {
    e.preventDefault();
    alert('이미지의 우클릭은 방지됩니다.');
  };

  return (
    <ProfileWrap>
      <Profile>
        <img onContextMenu={handleRightClick} src="./images/profile.jpg" alt="profile" />
      </Profile>
      <Artist>
        <strong>Kim Chaung Lim</strong>
        <Contact>
          <span>
            <a href="mailto:chaung97@naver.com" rel="noreferrer" target="_blank">
              chaung97@naver.com
            </a>
          </span>
        </Contact>
      </Artist>
    </ProfileWrap>
  );
};

export default Photographer;

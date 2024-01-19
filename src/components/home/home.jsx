import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { MainWrap, MainImg, SideImage } from '../../styles/components/Home';

const Home = () => {
  const [listHover, setListHover] = useState(false);

  const onHandler = useMemo(
    () => category => {
      setListHover(category);
    },
    [],
  );

  const onOutHandler = useMemo(
    () => () => {
      setListHover(false);
    },
    [],
  );

  //   클릭 이벤트가 발생했을때, 우클릭 이벤트 방지
  const handleLeftClick = e => {
    console.log(e);
  };

  const handleRightClick = e => {
    e.preventDefault();
    alert('이미지의 우클릭은 방지됩니다.');
  };

  return (
    <MainWrap>
      <MainImg>
        <li>
          <Link to="/categories/life" onMouseOver={() => onHandler('butterfly')} onMouseOut={() => onOutHandler()}>
            Life
          </Link>
        </li>
        <li>
          <Link to="/categories/spaces" onMouseOver={() => onHandler('postBox')} onMouseOut={() => onOutHandler()}>
            Spaces
          </Link>
        </li>
        <li>
          <Link to="/categories/landscape" onMouseOver={() => onHandler('country')} onMouseOut={() => onOutHandler()}>
            Landscape
          </Link>
        </li>
        <li>
          <Link to="/categories/travel" onMouseOver={() => onHandler('forest')} onMouseOut={() => onOutHandler()}>
            Travel
          </Link>
        </li>
        <li>
          <Link to="/categories/projects" onMouseOver={() => onHandler('waterPlant')} onMouseOut={() => onOutHandler()}>
            Projects
          </Link>
        </li>
      </MainImg>
      <SideImage>
        <img
          onClick={handleLeftClick}
          onContextMenu={handleRightClick}
          src={listHover ? `./images/${listHover}.jpg` : './images/cock.jpg'}
          alt={listHover ? listHover : '닭'}
        />
      </SideImage>
    </MainWrap>
  );
};

export default Home;

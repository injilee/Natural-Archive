import React, { createRef, useEffect, useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import {
  Carousel,
  CarouselItem,
  CarouselTitle,
  CarouselWrap,
  NextBtn,
  PrevBtn,
} from '../../../styles/components/Carousel';
import data from '../../service/data.json';
import TopBtn from '../../topBtn/topBtn';

const Landscape = props => {
  const arrayLength = data.archivePictures[1].landscape.length;
  const carousel = createRef();
  const [index, setIndex] = useState(0);

  const prevSlider = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  const nextSlider = () => {
    if (index === arrayLength) return;
    setIndex(index + 1);
  };

  useEffect(() => {
    carousel.current.style.transform = `translate3d(-${740 * index}px, 0,0)`;
    const handleCarouselLocate = () => {
      if (window.innerWidth <= 768) {
        setIndex(0);
        carousel.current.style.transform = `translate3d(0, 0, 0)`;
      }
    };

    window.addEventListener('resize', handleCarouselLocate);
    return () => {
      window.removeEventListener('resize', handleCarouselLocate);
    };
  }, [carousel, index]);

  //   클릭 이벤트가 발생했을때, 우클릭 이벤트 방지
  const handleRightClick = e => {
    e.preventDefault();
    alert('이미지의 우클릭은 방지됩니다.');
  };

  return (
    <>
      <CarouselWrap>
        <CarouselTitle>
          <h2>Landscape</h2>
        </CarouselTitle>
        <Carousel ref={carousel}>
          {data.archivePictures[1].landscape.map(landscape => (
            <CarouselItem key={landscape.key}>
              <div>
                <img onContextMenu={handleRightClick} src={landscape.imgUrl} alt={landscape.alt} />
              </div>
            </CarouselItem>
          ))}
        </Carousel>
        <PrevBtn type="button" className="prev" onClick={prevSlider} index={index}>
          <GrPrevious />
        </PrevBtn>
        <NextBtn type="button" className="next" onClick={nextSlider} index={index} length={arrayLength}>
          <GrNext />
        </NextBtn>
      </CarouselWrap>
      <TopBtn />
    </>
  );
};

export default Landscape;

import React, { useEffect, useRef, useState } from 'react';
import { Photograpy, PhotoContent, PhotoList } from '../../styles/components/photos';
import data from '../service/data.json';
import { ModalOverlay } from '../../styles/components/Modal';

const Photos = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y:scroll;
      width:100%;
    `;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }
  }, [isModalOpen]);

  // overlay 클릭 시 모달창 닫기
  const hanldeModal = () => {
    setIsModalOpen(false);
  };

  // 좌클릭 이벤트 발생시 모달창 열기
  const handleOnClick = src => {
    if (isModalOpen) {
      return;
    }
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  //   우클릭 이벤트가 발생했을때, 우클릭 이벤트 방지
  const handleRightClick = e => {
    e.preventDefault();
    alert('이미지의 우클릭은 방지됩니다.');
  };

  return (
    <Photograpy>
      <PhotoContent>
        {data.archivePictures[5].main.map(photo => (
          <PhotoList onClick={() => handleOnClick(photo.imgUrl)} key={photo.key} id={photo.key}>
            <div>
              <img onContextMenu={handleRightClick} src={photo.imgUrl} alt={photo.alt} />
            </div>
          </PhotoList>
        ))}
        {data.archivePictures[4].project.map(photo => (
          <PhotoList onClick={() => handleOnClick(photo.imgUrl)} key={photo.key} id={photo.key}>
            <div>
              <img onContextMenu={handleRightClick} src={photo.imgUrl} alt={photo.alt} />
            </div>
          </PhotoList>
        ))}
        {data.archivePictures[3].travel.map(photo => (
          <PhotoList onClick={() => handleOnClick(photo.imgUrl)} key={photo.key} id={photo.key}>
            <div>
              <img onContextMenu={handleRightClick} src={photo.imgUrl} alt={photo.alt} />
            </div>
          </PhotoList>
        ))}
        {data.archivePictures[2].life.map(photo => (
          <PhotoList onClick={() => handleOnClick(photo.imgUrl)} key={photo.key} id={photo.key}>
            <div>
              <img onContextMenu={handleRightClick} src={photo.imgUrl} alt={photo.alt} />
            </div>
          </PhotoList>
        ))}
        {data.archivePictures[1].landscape.map(photo => (
          <PhotoList onClick={() => handleOnClick(photo.imgUrl)} key={photo.key} id={photo.key}>
            <div>
              <img onContextMenu={handleRightClick} src={photo.imgUrl} alt={photo.alt} />
            </div>
          </PhotoList>
        ))}
        {data.archivePictures[0].spaces.map(photo => (
          <PhotoList onClick={() => handleOnClick(photo.imgUrl)} key={photo.key} id={photo.key}>
            <div>
              <img onContextMenu={handleRightClick} src={photo.imgUrl} alt={photo.alt} />
            </div>
          </PhotoList>
        ))}
      </PhotoContent>
      <ModalOverlay title="아무 곳이나 클릭하여 닫기" open={isModalOpen} onClick={hanldeModal}>
        <img ref={imgRef} src={selectedImage} alt="모달 이미지" />
      </ModalOverlay>
    </Photograpy>
  );
};
export default Photos;

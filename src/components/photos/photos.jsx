import React, { useState } from 'react';
import { Photograpy, PhotoContent, PhotoList } from '../../styles/components/photos';
import data from '../service/data.json';
import { ModalOverlay } from '../../styles/components/Modal';

const Photos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageUrl, setIsImageUrl] = useState('');

  // overlay 클릭 시 모달창 숨기기
  const hanldeModal = e => {
    setIsModalOpen(false);
  };

  // 좌클릭 이벤트 발생시 모달창 보이기
  const handleOnClick = e => {
    if (isModalOpen) {
      return;
    }
    setIsModalOpen(true);
    const url = e.target.src;
    setIsImageUrl(url);
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
          <PhotoList onClick={handleOnClick} key={photo.key} id={photo.key}>
            <div>
              <img onClick={handleOnClick} onContextMenu={handleRightClick} src={photo.imgUrl} alt={photo.alt} />
            </div>
          </PhotoList>
        ))}
        {data.archivePictures[4].project.map(photo => (
          <PhotoList onClick={handleOnClick} key={photo.key} id={photo.key}>
            <div>
              <img onClick={handleOnClick} onContextMenu={handleRightClick} src={photo.imgUrl} alt={photo.alt} />
            </div>
          </PhotoList>
        ))}
        {data.archivePictures[3].travel.map(photo => (
          <PhotoList onClick={handleOnClick} key={photo.key} id={photo.key}>
            <div>
              <img onClick={handleOnClick} onContextMenu={handleRightClick} src={photo.imgUrl} alt={photo.alt} />
            </div>
          </PhotoList>
        ))}
        {data.archivePictures[2].life.map(photo => (
          <PhotoList onClick={handleOnClick} key={photo.key} id={photo.key}>
            <div>
              <img onClick={handleOnClick} onContextMenu={handleRightClick} src={photo.imgUrl} alt={photo.alt} />
            </div>
          </PhotoList>
        ))}
        {data.archivePictures[1].landscape.map(photo => (
          <PhotoList onClick={handleOnClick} key={photo.key} id={photo.key}>
            <div>
              <img onClick={handleOnClick} onContextMenu={handleRightClick} src={photo.imgUrl} alt={photo.alt} />
            </div>
          </PhotoList>
        ))}
        {data.archivePictures[0].spaces.map(photo => (
          <PhotoList onClick={handleOnClick} key={photo.key} id={photo.key}>
            <div>
              <img onClick={handleOnClick} onContextMenu={handleRightClick} src={photo.imgUrl} alt={photo.alt} />
            </div>
          </PhotoList>
        ))}
      </PhotoContent>
      <ModalOverlay title="Click anywhere to click" open={isModalOpen} onClick={hanldeModal}>
        <img src={isImageUrl} alt="모달 이미지" />
      </ModalOverlay>
    </Photograpy>
  );
};
export default Photos;

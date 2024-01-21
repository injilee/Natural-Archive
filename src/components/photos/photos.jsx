import React from 'react';
import { Photograpy, PhotoContent, PhotoList } from '../../styles/components/photos';
import data from '../service/data.json';

const Photos = () => {
  // 좌클릭 이벤트 발생시 모달창 보이기
  const handleOnClick = e => {};

  //   우클릭 이벤트가 발생했을때, 우클릭 이벤트 방지
  const handleRightClick = e => {
    e.preventDefault();
    alert('이미지의 우클릭은 방지됩니다.');
  };

  return (
    <Photograpy>
      <PhotoContent>
        {data.archivePictures[5].main.map(photo => (
          <PhotoList key={photo.key} id={photo.key}>
            <div>
              <img onClick={handleOnClick} onContextMenu={handleRightClick} src={photo.imgUrl} alt={photo.alt} />
            </div>
          </PhotoList>
        ))}
        {data.archivePictures[4].project.map(photo => (
          <PhotoList key={photo.key} id={photo.key}>
            <div>
              <img onClick={handleOnClick} onContextMenu={handleRightClick} src={photo.imgUrl} alt={photo.alt} />
            </div>
          </PhotoList>
        ))}
        {data.archivePictures[3].travel.map(photo => (
          <PhotoList key={photo.key} id={photo.key}>
            <div>
              <img onClick={handleOnClick} onContextMenu={handleRightClick} src={photo.imgUrl} alt={photo.alt} />
            </div>
          </PhotoList>
        ))}
        {data.archivePictures[2].life.map(photo => (
          <PhotoList key={photo.key} id={photo.key}>
            <div>
              <img onClick={handleOnClick} onContextMenu={handleRightClick} src={photo.imgUrl} alt={photo.alt} />
            </div>
          </PhotoList>
        ))}
        {data.archivePictures[1].landscape.map(photo => (
          <PhotoList key={photo.key} id={photo.key}>
            <div>
              <img onClick={handleOnClick} onContextMenu={handleRightClick} src={photo.imgUrl} alt={photo.alt} />
            </div>
          </PhotoList>
        ))}
        {data.archivePictures[0].spaces.map(photo => (
          <PhotoList key={photo.key} id={photo.key}>
            <div>
              <img onClick={handleOnClick} onContextMenu={handleRightClick} src={photo.imgUrl} alt={photo.alt} />
            </div>
          </PhotoList>
        ))}
      </PhotoContent>
    </Photograpy>
  );
};
export default Photos;

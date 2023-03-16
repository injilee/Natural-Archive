# Natural-Archive

지인의 포트폴리오를 제작하기 위해 만든 웹 사이트 입니다.

<strong>개발 기간</strong> 📆<br/>
v1.0.1 : 2022.01.15 ~ 2022.2.12 <br/>
v1.0.2 : 2023.02.23 ~ 2023.3.16

<br/>

## Demo Link

https://natural-archive.netlify.app

<br/>

---

## 1. Tech Stack

-  [x] React Hooks
-  [x] React Router
-  [x] Styled-components

<br/>

## 2. 기능 구현

### 1. Hover 시 이미지 변경

메인 페이지의 카테고리 리스트에서 마우스 <code>hover</code> 시 각 카테고리에 맞는 이미지로 변경할 수 있도록 하였다. <code>onMouseOver</code>와 <code>onMouseOut</code>을 사용해 <code>onHandler</code> 함수에 전달할 이미지 인자의 이름을 <code>string</code> 으로 전달한다. 이미지 이름은 <code>useState</code>로 값을 저장해놓고

```javascript
<Link to="/categories/life" onMouseOver={() => onHandler('butterfly')} onMouseOut={() => onOutHandler()}>
   Life
</Link>
```

이미지 이름은 <code>useState</code>로 값을 저장해놓고 마우스를 떼고 나면 <code>onOutHandler</code>를 호출해 <code>false</code> 값을 저장, 카테고리 리스트에 hover 하지 않은 상태의 default 이미지를 보여준다.

```javascript
<img src={listHover ? `./images/${listHover}.jpg` : './images/cock.jpg'} alt={listHover ? listHover : '닭'} />
```

<br/>

### 2. Carousel

이미지 슬라이더 형식의 캐러셀 기능으로, 다음 버튼을 클릭하다가 마지막 이미지 위치에 도달하면 이전 버튼을 이용해 돌아갈 수 있도록 하였다.

#### 1) 데이터

<code>data.json</code> 에서 <code>map</code>을 이용해 데이터를 받아왔다.

```javascript
<Carousel ref={carousel} id="carousel">
   {data.archivePictures[0].spaces.map(spaces => (
      <CarouselItem key={spaces.key}>
         <div>
            <img src={spaces.imgUrl} alt={spaces.alt} />
         </div>
      </CarouselItem>
   ))}
</Carousel>
```

#### 2) translate3d로 캐러셀 위치 변경

이미지의 크기가 740px이고 0~5개의 이미지가 캐러셀 위치에 맞게 오도록 하기 위해 translate3d 속성값으로 <code>740 \* index</code> index를 곱해준다.

```javascript
translate3d(-${740 * index}px, 0,0)
```

이전 버튼을 클릭하면<code>index</code>의 값이 1씩 줄어들고, 다음 버튼 클릭 시
1씩 증가하도록 하였다.

```javascript
const carousel = createRef();
const [index, setIndex] = useState(0);

// 0(처음)에서 이전 버튼을 클릭하면 5(마지막) 위치로 이동하는 것이 아니라 다음 버튼을 클릭해 1 위치로 이동
const prevSlider = () => {
   if (index === 0) return;
   setIndex(index - 1);
};

const nextSlider = () => {
   if (index === 5) return;
   setIndex(index + 1);
};
```

반응형으로 제작 시 브라우저 화면 크기를 조절하면 index 만큼 이동한 캐러셀 위치에서, 예를 들면 2으로 이동한 상태에서의 translateX는 1480px이다. 브라우저 크기를 줄였다가 다시 늘려 캐러셀의 다음 버튼을 클릭하면 translateX이 0px이 아니라 그전에 클릭해서 이동했던 1480px로 되돌아가게 되는 오류가 있었다. <code>useEffect</code>로 window resize 이벤트 동작이 발생하면 translateX이 0px로 초기화 될 수 있도록 했다.

```javascript
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
```

## 3. Preview

Desktop 🖥

-  Main page
   <br/><img src="https://user-images.githubusercontent.com/90603357/225532762-be7a1ed0-a91d-4858-8730-7d0c5793f778.png" alt="desktop main page" style="width:100%;"/>

-  Categories page
   <br/><img src="https://user-images.githubusercontent.com/90603357/225533861-a95ed01f-281a-4daf-ae3f-8f12e70d633d.png" alt="desktop categories page" style="width:100%;"/>

<br/>

Mobile 📱

-  Main page
   <br/><img src="https://user-images.githubusercontent.com/90603357/225534268-45f851fe-2653-4e81-995e-a99ad7fa10e7.png" alt="mobile main page" style="width:30%;"/>

-  Categories page
   <br/><img src="https://user-images.githubusercontent.com/90603357/225534511-8ecb5a37-472f-43ca-9ba3-181a10e4f0c4.png" alt="mobile categories page" style="width:30%;"/>

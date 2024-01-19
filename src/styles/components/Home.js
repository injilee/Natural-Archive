import styled from 'styled-components';

export const MainWrap = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: black;
  min-height: 100vh;
  align-items: center;
`;

export const MainImg = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;

  li {
    width: 100%;
    margin: 0;

    a {
      position: relative;
      color: white;
      font-size: 2.8125rem;
      font-family: 'Playfair Display', serif;
      margin-left: 15px;
      transition-property: font-size;
      transition-duration: 0.3s;
      transition-timing-function: ease;

      @media screen and (min-width: 768px) {
        & {
          font-size: 4.0625rem;
        }
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: white;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }

      &:hover {
        color: orange;
        &::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      }
    }
  }
`;

export const SideImage = styled.div`
  display: flex;
  align-items: center;
  width: 40%;

  img {
    display: none;
  }

  @media screen and (min-width: 768px) {
    height: 590px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

import styled from 'styled-components';

export const Photograpy = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 50px 15px;
  background-color: white;
`;

export const PhotoContent = styled.ul`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr;
  grid-auto-rows: auto;
  grid-gap: 0.3rem;

  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    max-width: 1200px;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5rem;
  }
`;

export const PhotoList = styled.li`
  display: flex;
  grid-column: ${({ id }) => (id === 'postBox' ? '2 / 2' : 'auto')};
  grid-row: ${({ id }) => (id === 'postBox' ? '3 / 6' : 'auto')};
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    grid-column: ${({ id }) => {
      switch (id) {
        case 'postBox':
          return '2 / 2';
        case 'life1':
          return '2 / 4';
        case 'spaces5':
          return '1 / 3';
        default:
          return 'auto';
      }
    }};

    grid-row: ${({ id }) => {
      switch (id) {
        case 'postBox':
          return '3 / 6';
        case 'life1':
          return '8 / 10';
        case 'spaces5':
          return '18 / 19';
        default:
          return 'auto';
      }
    }};
  }
`;

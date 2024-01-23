import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: opacity 0.2s ease-in-out;

  img {
    display: block;
    position: fixed;
    max-width: 90%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (min-width: 768px) {
      max-width: 500px;
    }
  }
`;

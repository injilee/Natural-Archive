import styled from 'styled-components';

export const ProfileWrap = styled.section`
  height: 100vh;
  padding-top: 120px;
  background-color: black;
`;

export const Profile = styled.div`
  width: 80%;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    max-width: 900px;
  }
`;

export const Artist = styled.section`
  max-width: 900px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 22px;
  margin: 0 auto;

  strong {
    font-size: 30px;
    font-family: 'Lora', serif;
    font-weight: 600;
    color: white;
    margin-bottom: 13px;
    transition-property: font-size;
    transition-duration: 0.3s;
    transition-timing-function: ease;

    @media screen and (min-width: 768px) {
      font-size: 45px;
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;

  a {
    font-size: 20px;
    font-family: 'Lora', serif;
    font-weight: 500;
    color: white;
    word-break: break-all;
    transition-property: font-size;
    transition-duration: 0.3s;
    transition-timing-function: ease;

    @media screen and (min-width: 768px) {
      font-size: 25px;
    }
  }
`;

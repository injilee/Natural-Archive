import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: '행복고흥L';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/행복고흥L.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Pretendard-Regular', 'Noto Sans KR', sans-serif;
}

:is(ul, ol, li) {
  padding: 0;
  margin: 0;
  list-style: none;
}

button {
  border: 0;
  cursor: pointer;
  background-color: transparent;
  font-family: 'Noto Sans KR', sans-serif;
}

input {
  border: 0;
}

a {
  text-decoration: none;
}

a:visited,
a:active {
  text-decoration: none;
}
`;

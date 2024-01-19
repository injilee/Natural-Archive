import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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

img{
  -webkit-touch-callout:none;
  user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  -webkit-user-select:none;
  -webkit-user-drag:none;
}
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;

}

body {
  background:#7159c1;
  background-image: linear-gradient(to right, #de6161, #2657eb);
  -webkit-font-smoothing: antialiased !important;
}

body, input, button{
  color: #222;
  font-size:14px;
  font-family:Arial, Helvetica, sans-serif;

}
button{
  cursor: pointer
}
`;

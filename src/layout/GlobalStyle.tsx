import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    //background: teal;
    background: #333333;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #ffffff;
  }
`;
 
export default GlobalStyle;
import { createGlobalStyle } from "styled-components";
import "../typography/fontFaces.css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.palette.background.main}
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.palette.background.contrastText}
  }

  html, body { height: 100%; }
`;

export default GlobalStyle;

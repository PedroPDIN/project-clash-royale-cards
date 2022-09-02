import { createGlobalStyle } from 'styled-components';
import fontFamilySuperCell from '../Fonts/You-Blockhead.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SuperCell';
    src: url(${fontFamilySuperCell}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    border: 0;
    box-sizing: border-box;
    font-family: SuperCell, sans-serif !important;
    margin: 0;
    padding: 0;
  }

  html {
    height: 100vh;
    width: 100%;
  }
`;

export default GlobalStyle;

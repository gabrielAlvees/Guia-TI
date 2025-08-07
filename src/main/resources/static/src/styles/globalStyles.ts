import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --font-vt: 'VT323', monospace;
    --font-ele: 'Electrolize', sans-serif;
    --font-cairo: 'Cairo', sans-serif;
  }

::-webkit-scrollbar {
    width: 4px;
    display: block;
  }
  ::-webkit-scrollbar-track {
    background: #d6d6d7;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #41b0e8, #085297);
    border-radius: 100vw;
  }
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type=number] {
      -moz-appearance: textfield;
    }
    html {
    @media (max-width: 1200px) {
      font-size: 93.75%;
    }
    @media (max-width: 1000px) {
      font-size: 87.5%;
    }
    @media (max-width: 800px) {
      font-size: 81.25%;
    }
    @media (max-width: 600px) {
      font-size: 75%;
    }
  }
  body {
    background-color: #fff;
    height: 100vh;
    text-rendering: optimizeLegibility;
  }
  button {
    cursor: pointer;
  }
`;
export default GlobalStyles;
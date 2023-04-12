import { createGlobalStyle } from "styled-components";
import { CONTAINER_MAX_WIDTH } from "common/variable";

const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
    }
    body {
        font-family: 'OSR', sans-serif;
        max-width: ${CONTAINER_MAX_WIDTH};
    }
`;

export default GlobalStyle;
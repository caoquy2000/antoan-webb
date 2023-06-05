import { createGlobalStyle } from "styled-components";
import { BACKGROUND_COLOR, CONTAINER_MAX_WIDTH, MAIN_COLOR, TEXT_COLOR } from "common/variable";

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
        font-family: 'Roboto', sans-serif;
        max-width: ${CONTAINER_MAX_WIDTH};
        background: ${BACKGROUND_COLOR};
        color: ${TEXT_COLOR};
    }

    /* START: scrollbar */

    ::-webkit-scrollbar {
        width: 6px;
        height: 8px;
        background-color: transparent;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
        margin: 4px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color:  #1e3150;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${MAIN_COLOR};
    }

    ::-webkit-scrollbar-corner {
        background: rgba(0, 0, 0, 0);
    }

    .scrollable {
        overflow: auto;
        overflow: overlay !important;
        scrollbar-width: thin;
    }

    .scrollable.hide-scrollbar::-webkit-scrollbar-thumb {
        background-color: rgba(39, 49, 80, 0);
    }

    .scrollable-x {
        overflow-x: auto;
        overflow-x: overlay;
        scrollbar-width: thin;
    }

    .scrollable-y {
        overflow-y: auto;
        overflow-y: overlay;
        scrollbar-width: thin;
    }

    .scrollable-white::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
    }

    .scrollable-white::-webkit-scrollbar-thumb:hover {
        background: #ffffff;
    }

    /* END: scrollbar */
`;

export default GlobalStyle;
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --color-background: #EFEFEB;
        --color-primary: #F66867;
        --color-secondary: #F4B2B4;
        --color-primary-title: #5b5b5b;
        --color-text: #868684;
    }


    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #__next {
        height: 100vh;
        background: var(---color-background);
    }
`;

export default GlobalStyle;

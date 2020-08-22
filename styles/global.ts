import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`



    :root {
        --color-background: #F66867;
        --color-primary: #EFEFEB;
        --color-secondary: #b11226;
        --color-primary-title: #5b5b5b;
        --color-secondary-title: #2bff4e;
        --color-text: #868684;

        transition: all 1s;
    }


    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #__next {
        height: 100vh;
        background: var(--color-background);
        
    }

    ::selection {
        background: transparent
    }
`;

export default GlobalStyle;

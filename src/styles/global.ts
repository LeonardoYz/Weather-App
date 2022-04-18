import { createGlobalStyle } from "styled-components"
import { lighten } from "polished";
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyles = createGlobalStyle`
  :root {
    /*======== Colors ========*/
    --blue: hsl(236, 80%, 57%);
    --dark-blue: hsl(234, 32%, 17%);
    --darkest-blue: hsla(244, 62%, 15%, 1);
    --yellow: hsl(53, 100%, 70%);
    --orange: hsl(43, 96%, 56%);
    --light-grayish-blue: hsl(245, 11%, 57%);
    --grayish-blue: hsl(244, 16%, 40%);
    --dark-grayish-blue: hsl(231, 9%, 42%);

    --dark: hsl(248, 35%, 8%);
    --dark-gray: hsl(230, 5%, 45%);
    --light-gray: hsl(243, 10%, 66%);
    --neutral: hsl(240, 9%, 91%);
    --white: hsl(217, 76%, 97%);


    /*======== Font Size ========*/
    --h1-font-size: 9rem; // 144px
    --h2-font-size: 1.5rem; // 24px
    --bigger-font-size: 4rem; // 64px 
    --big-font-size: 2.25rem; // 36px
    --normal-font-size-alt: 1.125rem; // 18px
    --normal-font-size: 1rem; // 16px
    --small-font-size: 0.875rem; // 14px
    --smaller-font-size: 0.75rem; // 12px

    /*======== Z Index ========*/
    --z-index-menu: 10;
    --z-index-loading: 100;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /*==== RESET ==============================*/
  img { 
    width: 100%;
    height: auto;
  }

  a { 
    display: inline-block;
    text-decoration: none;
  }

  body,
  textarea,
  button,
  input {
    font: 500 var(--normal-font-size) 'Raleway', sans-serif;
    color: var(--neutral);
  }

  h1, 
  h2, 
  h3, 
  h4, 
  h5, 
  h6,
  strong { 
    font-weight: 700;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  button {
    cursor: pointer;
  }

  /*==== SCROLL BAR ========================*/
  ::-webkit-scrollbar {
    width: 0.55rem;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--grayish-blue);
    border-radius: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--light-grayish-blue);
    border-radius: 0.5rem;
  }

  @supports (scrollbar-color: grey lightgrey) {
    * {
      scrollbar-color: var(--light-grayish-blue) var(--grayish-blue);
      scrollbar-width: 0.65rem;
    }
  }

  /*==== TOASTIFY ALERT ========================*/
  .Toastify__toast-theme--dark {
    background-color: ${lighten(0.03, "hsl(234, 32%, 17%)")};
  }
`
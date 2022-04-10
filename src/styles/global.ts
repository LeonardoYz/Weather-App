import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  :root {
    /*======== Colors ========*/
    --blue: hsl(236, 80%, 57%);
    --dark-blue: hsl(234, 32%, 17%);
    --yellow: hsl(53, 100%, 70%);
    --grayish-blue: hsl(244, 16%, 40%);
    
    --light-grayish-blue: hsl(245, 11%, 57%);
    --dark-gray: hsl(230, 5%, 45%);
    --light-gray: hsl(243, 10%, 66%);
    --neutral: hsl(240, 9%, 91%);


    /*======== Font Size ========*/
    --normal-font-size: 1rem; // 16px
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
`
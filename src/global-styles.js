import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    /* Colors */
    /* Primary */
    --scissors: hsl(40, 84%, 53%);
    --paper: hsl(230, 89%, 65%);
    --rock: hsl(349, 70%, 56%);
    
    /* Neutral */
    --dark-text: hsl(229, 25%, 31%);
    --score-text:hsl(229, 64%, 46%);
    --header-outline:hsl(217, 16%, 45%);

    /* Background */
    --bg-color: linear-gradient(90deg, hsl(214, 47%, 23%) 0%, hsl(237, 49%, 15%) 100%);

    /* Fonts */
    --font-semi-bold: 600;
    --font-bold: 700;

    /* Box shadow */
    --box-shadow: rgba(0, 0, 0, 0.19) 0 1rem 2rem, rgba(0, 0, 0, 0.23) 0 0.6rem 0.6rem;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Barlow Semi Condensed', sans-serif;
  }
`
export default GlobalStyles

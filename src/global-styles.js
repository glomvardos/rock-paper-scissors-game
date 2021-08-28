import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    /* Colors */
    /* Primary */
    --scissors: linear-gradient(90deg, hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%);
    --paper: linear-gradient(90deg, hsl(230, 89%, 62%) 0%,hsl(230, 89%, 65%) 100%);
    --rock: linear-gradient(90deg, hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%)100%);
    
    /* Neutral */
    --dark-text: hsl(229, 25%, 31%);
    --score-text:hsl(229, 64%, 46%);
    --header-outline:hsl(217, 16%, 45%);

    /* Background */
    --bg-color: linear-gradient(90deg, hsl(214, 47%, 23%) 0%, hsl(237, 49%, 15%) 100%);

    /* Fonts */
    --font-semi-bold: 600;
    --font-bold: 700;
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

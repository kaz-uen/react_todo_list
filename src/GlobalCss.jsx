import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /**
   * Variables
   */
  :root {
    --color-primary: #c2773e;
    --color-primary-dark: #886f2c;
    --color-primary-light: #6d5016;
    --color-grey-1: #102a42;
    --color-grey-5: #617d98;
    --color-grey-10: #f1f5f8;
    --color-white: #fff;
    --color-red-dark: hsl(360, 67%, 44%);
    --color-red-light: hsl(360, 71%, 66%);
    --transition: all 0.3s linear;
    --spacing: 0.25rem;
    --radius: 0.25rem;
    --large-screen-width: 1170px;
    --small-screen-width: 90vw;
    --fixed-width: 30rem;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Noto Sans JP", sans-serif;
    background: var(--color-grey-10);
    color: var(--color-grey-1);
    line-height: 1.5;
    font-size: 0.875rem;
    min-width: 230px;
    max-width: 550px;
    margin: 0 auto;
    font-weight: 300;
  }
  a {
    text-decoration: none;
  }
  img {
    width: 100%;
    display: block;
  }
  h1,
  h2,
  h3,
  h4 {
    letter-spacing: var(--spacing);
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 0.875rem;
  }
  button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    font-size: 100%;
    vertical-align: baseline;
  }
  button:disabled {
    filter: brightness(70%);
  }

  @media screen and (min-width: 800px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 2rem;
    }
    h4 {
      font-size: 1rem;
    }
    body {
      font-size: 1rem;
    }
    h1,
    h2,
    h3,
    h4 {
      line-height: 1;
    }
  }
`;

export default GlobalStyle;

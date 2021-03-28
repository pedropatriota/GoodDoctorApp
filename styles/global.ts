import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *:focus {
  outline: 0;
}
  ul{
    list-style: none;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    width: 100%;
    height: 100vh;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

export default GlobalStyles

import { createGlobalStyle } from 'styled-components/macro'
import sky from './sky.jpg'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;  
    background: url(${sky});
    background-size: cover;
    min-height: 100vh;
  }
`

export default GlobalStyle

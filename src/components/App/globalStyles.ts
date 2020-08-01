import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;  
    background: linear-gradient(180deg, #8BABCB 0%, #BBC0C3 39.72%, #DFD2BB 69.27%, #FFCB80 100%);    
    min-height: 100vh;
  }
`

export default GlobalStyle

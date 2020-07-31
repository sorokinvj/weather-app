import React from 'react'
import styled from 'styled-components'

const APPStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`
interface IApp {}
const App: React.FC<IApp> = () => {
  return <APPStyled>There will be weather app</APPStyled>
}

export default App

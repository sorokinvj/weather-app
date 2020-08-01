// core libs
import React from 'react'

// search state
import { SearchResultsProvider } from '../../context/SearchResultsProvider'

// components
import Suggest from '../Suggest/Suggest'

import SearchResults from '../SearchResults/SearchResults'

// styles
import GlobalStyles from './globalStyles'
import { AppStyled } from './AppStyled'

import sky from './sky.jpg'

const App: React.FC = () => {
  return (
    <SearchResultsProvider>
      <GlobalStyles />
      <AppStyled data-testid="app" back={sky}>
        <h1 className="app-title">3-day Weather foreacast in UK</h1>
        <Suggest />
        <SearchResults />
      </AppStyled>
    </SearchResultsProvider>
  )
}

export default App

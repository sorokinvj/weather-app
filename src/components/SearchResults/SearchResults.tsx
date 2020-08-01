import React from 'react'
import { ISearchResult, useSearchState } from '../../context/SearchResultsProvider'
import Forecast from '../Forecast/Forecast'
import { SearchResultsStyled } from './SearchResultsStyled'

const SearchResults: React.FC = () => {
  const searchState = useSearchState()

  return (
    <SearchResultsStyled>
      {searchState.searchResults.map((item: ISearchResult) => (
        <Forecast forecast={item.result} key={item.id} />
      ))}
    </SearchResultsStyled>
  )
}

export default SearchResults

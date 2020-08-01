import React from 'react'
import { ISearchResult, useSearchState } from '../../context/SearchResultsProvider'
import Forecast from '../Forecast/Forecast'
import { SearchResultsStyled } from './SearchResultsStyled'
import Loading from '../Loading/Loading'

const SearchResults: React.FC = () => {
  const searchState = useSearchState()

  return (
    <SearchResultsStyled>
      {/* {searchState.status === 'loading' && <Loading />} */}
      {searchState.status === 'failure' && (
        <p className="error-message">
          Something unexpected happened. <br />
          {searchState.error}
        </p>
      )}
      {searchState.searchResults.map((item: ISearchResult) => (
        <Forecast forecast={item.result} key={item.id} />
      ))}
    </SearchResultsStyled>
  )
}

export default SearchResults

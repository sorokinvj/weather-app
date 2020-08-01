import React from 'react'
import { ISearchResult, useSearchState } from '../../context/SearchResultsProvider'
import Forecast from '../Forecast/Forecast'
import { SearchResultsStyled } from './SearchResultsStyled'
// import Loading from '../Loading/Loading'

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
      {searchState.searchResults.map((item: ISearchResult, index: number) => (
        <Forecast forecast={item.result} key={item.id} index={index} />
      ))}
    </SearchResultsStyled>
  )
}

export default SearchResults

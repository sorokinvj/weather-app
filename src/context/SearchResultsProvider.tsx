import React from 'react'
import { ForecastResponse } from '../types/ForecastResponse'
import { uuid } from 'uuidv4'
import OpenWeatherService from '../services/OpenWeatherService'

// import { document as documentService } from '../services'

/* Our state will have:
  status: like a state machine
  error: when there is an error message
  searchResults: will hold our search history in a state
*/
// export interface IDocuments {
//   front: { id: string; file: string } | null
//   back: { id: string; file: string } | null
//   selfie: { id: string; file: string } | null
// }

export interface ISearchResult {
  result: ForecastResponse
  id: string
}

interface IState {
  status: string
  error?: string
  searchResults: ISearchResult[]
}

/* Types for the reducer */
interface IAction {
  type: 'create' | 'resolve' | 'remove' | 'reject' | 'cancel' | 'reset'
}
interface IRejectAction extends IAction {
  payload: string
}
interface IResolveAction extends IAction {
  payload: ISearchResult
}

const reducer = (prevState: IState, action: IAction) => {
  switch (action.type) {
    case 'create':
      return {
        ...prevState,
        status: 'loading',
      }
    case 'resolve':
      return {
        ...prevState,
        status: 'success',
        searchResults: [{ ...(action as IResolveAction).payload }, ...prevState.searchResults],
        error: undefined,
      }
    case 'reject':
      return {
        ...prevState,
        status: 'failure',
        error: (action as IRejectAction).payload,
      }
    case 'cancel':
      return {
        ...prevState,
        status: 'idle',
        error: undefined,
      }
    case 'reset':
      return {
        status: 'idle',
        error: undefined,
        searchResults: [],
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

/* Types for the Context and Provider */
type IReducer = (prevState: IState, action: IAction | IRejectAction | IResolveAction) => IState
type IDispatch = (action: IAction | IRejectAction | IResolveAction) => void
interface IProviderProps {
  children: React.ReactNode
}

/* Note: exporting this because it's useful in tests */
export const SearchStateContext = React.createContext<IState | undefined>(undefined)
const SearchDispatchContext = React.createContext<IDispatch | undefined>(undefined)

const SearchResultsProvider = ({ children }: IProviderProps) => {
  const [state, dispatch] = React.useReducer<IReducer>(reducer, {
    status: 'idle',
    error: undefined,
    searchResults: [],
  })

  return (
    <SearchStateContext.Provider value={state}>
      <SearchDispatchContext.Provider value={dispatch}>{children}</SearchDispatchContext.Provider>
    </SearchStateContext.Provider>
  )
}

/* Declare our Hooks */
const useSearchState = () => {
  const context = React.useContext(SearchStateContext)

  // this is mainly for testing
  if (context === undefined) {
    throw new Error('useSearchState must be used within a SearchResultsProvider')
  }
  return context
}

const useSearchDispatch = () => {
  const context = React.useContext(SearchDispatchContext)
  if (context === undefined) {
    throw new Error('useSearchDispatch must be used within a SearchResultsProvider')
  }
  return context
}

/* Declare our helpers that make multiple changes to state*/
const fetchWeather = async (dispatch: IDispatch, cityID: number) => {
  dispatch({ type: 'create' })
  try {
    const result = await OpenWeatherService.getWeather(cityID)
    dispatch({ type: 'resolve', payload: { id: uuid(), result } })
  } catch (error) {
    dispatch({ type: 'reject', payload: OpenWeatherService.errorMessage(error) })
  }
}

export { SearchResultsProvider, useSearchState, useSearchDispatch, fetchWeather }

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Suggest from './Suggest'
import { SearchResultsProvider, SearchDispatchContext } from '../../context/SearchResultsProvider'

describe('<Suggest />', () => {
  test('it renders', () => {
    render(
      <SearchResultsProvider>
        <Suggest />
      </SearchResultsProvider>
    )
    const container = screen.getByTestId('suggest')
    expect(container).toBeInTheDocument()
  })

  test('suggest box in the DOM', async () => {
    render(
      <SearchResultsProvider>
        <Suggest />
      </SearchResultsProvider>
    )
    const input = screen.getByAltText('input city')
    fireEvent.change(input, { target: { value: 'london' } })

    const box = await screen.findByTestId('suggest-box')
    expect(box).toBeInTheDocument()
  })

  test('clicking on a suggest item calls dispatch', async () => {
    const dispatch = jest.fn()
    render(
      <SearchDispatchContext.Provider value={dispatch}>
        <Suggest />
      </SearchDispatchContext.Provider>
    )
    const input = screen.getByAltText('input city')
    fireEvent.change(input, { target: { value: 'london' } })

    const options = await screen.findAllByText('London')
    fireEvent.click(options[0])

    expect(dispatch).toBeCalled()
  })

  test('error message when city is not in db', async () => {
    render(
      <SearchResultsProvider>
        <Suggest />
      </SearchResultsProvider>
    )
    const input = screen.getByAltText('input city')
    fireEvent.change(input, { target: { value: 'fdlkjlsdjldsjflkdsj' } })

    fireEvent.click(screen.getByText(/Search/))

    const error = await screen.getByTestId('error-message')
    expect(error).toBeInTheDocument()
  })
})

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import SuggestComponent from './Suggest'

describe('<Suggest />', () => {
  test('it renders', () => {
    const selectCityID = jest.fn()
    render(<SuggestComponent selectCityID={selectCityID} />)
    const container = screen.getByTestId('suggest')
    expect(container).toBeInTheDocument()
  })

  test('suggest box in the DOM', async () => {
    const selectCityID = jest.fn()
    render(<SuggestComponent selectCityID={selectCityID} />)
    const input = screen.getByAltText('input city')
    fireEvent.change(input, { target: { value: 'london' } })

    const box = await screen.findByTestId('suggest-box')
    expect(box).toBeInTheDocument()
  })

  test('clicking on a suggest item calls prop selectCityID ', async () => {
    const selectCityID = jest.fn()
    render(<SuggestComponent selectCityID={selectCityID} />)

    const input = screen.getByAltText('input city')
    fireEvent.change(input, { target: { value: 'london' } })

    const options = await screen.findAllByText('London')
    fireEvent.click(options[0])

    expect(selectCityID).toBeCalled()
  })
})

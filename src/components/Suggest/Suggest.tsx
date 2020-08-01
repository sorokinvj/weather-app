// core
import React, { useState, useMemo } from 'react'

// hooks
import { useDebounce } from 'use-debounce'

// components
import { FixedSizeList as List } from 'react-window'
import { SuggestStyled } from './SuggestStyled'

// data
import cities from '../../ukCitiesSorted.json'

const findCityIdByName = (name: string) => {
  const foundCity = cities.find((city) => city.name.toLowerCase() === name.toLowerCase())
  if (foundCity) {
    return foundCity.id
  } else {
    throw new Error("Sorry, we don't have this city in our database. Maybe it doesn't exist?")
  }
}

interface ISuggest {
  selectCityID: (cityID: number) => void
}

const Suggest: React.FC<ISuggest> = ({ selectCityID }) => {
  // input handlers
  const [value, setValue] = useState('')
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(undefined)
    selectSuggestOption(false)
    setValue(event.target.value)
  }

  const [errorState, setError] = useState<string | undefined>(undefined)

  // form handlers
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      selectCityID(findCityIdByName(value))
      setValue('')
    } catch (error) {
      setError(error.message)
    }
  }

  // filter suggest list with debounced input value
  const [debouncedCity] = useDebounce(value, 200)
  const filteredList = useMemo(
    () => cities.filter((city) => city.name.toLowerCase().indexOf(debouncedCity.toLowerCase()) !== -1),
    [debouncedCity]
  )

  // select city handlers
  const [isSelected, selectSuggestOption] = useState(false)
  const selectCity = (id: number, name: string) => {
    selectSuggestOption(true)
    setValue(name)
    selectCityID(id)
    setValue('')
  }

  // list item component for react-window List
  const Item = ({ index, style, data }: any) => (
    <li
      style={style}
      className="city-option"
      onClick={selectCity.bind(null, data[index].id, data[index].name)}
      data-id={data[index].id}
    >
      {data[index].name}
    </li>
  )

  return (
    <SuggestStyled data-testid="suggest">
      <form className="search" onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          className="search-input"
          placeholder="Type in the city name"
          alt="input city"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {errorState ? (
        <p className="error-message" data-testid="error-message">
          {errorState}
        </p>
      ) : null}
      <div className="suggest-box" data-testid="suggest-box">
        {value.length
          ? !isSelected && (
              <List width={500} height={150} itemCount={filteredList.length} itemSize={30} itemData={filteredList}>
                {Item}
              </List>
            )
          : null}
      </div>
    </SuggestStyled>
  )
}
export default Suggest

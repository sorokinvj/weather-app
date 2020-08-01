import React, { useState, useMemo } from 'react'
import { useDebounce } from 'use-debounce'

// data
import cities from './ukCitiesSorted.json'

const Autocomplete: React.FC = () => {
  const [value, setValue] = useState('')
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  const [debouncedCity] = useDebounce(value, 200)

  const filteredList = useMemo(
    () => cities.filter((city) => city.name.toLowerCase().indexOf(debouncedCity.toLowerCase()) !== -1),
    [debouncedCity]
  )

  return (
    <>
      <input value={value} onChange={onChange} />
      <p>{debouncedCity}</p>
      {debouncedCity ? filteredList.map((city) => <p key={city.id}>{city.name}</p>) : null}
    </>
  )
}
export default Autocomplete

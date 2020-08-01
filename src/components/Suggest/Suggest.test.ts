import React, { useState, useMemo } from 'react'
import { useDebounce } from 'use-debounce'
import { FixedSizeList as List } from 'react-window'

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

  const Row = ({ index, style, data }: any) => <p style={style}>{data[index].name}</p>

  return (
    <>
      <input value={value} onChange={onChange} />
      <p>{debouncedCity}</p>
      <List height={150} itemCount={filteredList.length} itemSize={35} width={300} itemData={filteredList}>
        {Row}
      </List>
    </>
  )
}
export default Autocomplete

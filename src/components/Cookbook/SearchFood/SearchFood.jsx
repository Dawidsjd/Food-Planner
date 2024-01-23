import React from 'react'
import { SearchCookBook } from './styles'
import { Search } from '@mui/icons-material'


const SearchFood = () => {
  return (
    <SearchCookBook>
        <Search></Search>
        <input type="text" placeholder='What do you want to cook today?' />
      </SearchCookBook>
  )
}

export default SearchFood
import React from 'react'

const SearchComponentContext = React.createContext({
  showSearchComponent: false,
  searchInputValue: '',
  changeStatusOfSearchComponent: () => {},
  takingSearchInput: () => {},
})

export default SearchComponentContext

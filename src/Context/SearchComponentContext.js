import React from 'react'

const SearchComponentContext = React.createContext({
  searchInputValue: '',
  showSearchComponent: false,
  searchDataFetchStatus: 'INITIAL',
  usersPosts: [],
  changeStatusOfSearchComponent: () => {},
  updateSearchInput: () => {},
  searchComponentShowStatusChange: () => {},
  resetSearchInput: () => {},
  showNavItemsUnderHamburger: false,
  showOptionsSmall: () => {},
  closeOptionsSmall: () => {},
  searchComponentOpenSmall: () => {},
})

export default SearchComponentContext

import React from 'react'

const SearchContext = React.createContext({
  SearchInput: '',
  click: false,
  searchPostView: false,
  searchValue: false,
  button: false,
  k: false,
  onChangeLikeIcon: () => {},
  onChangeUnLikeIcon: () => {},
  changeSearchValue: () => {},
  onEmptyInput: () => {},
  setSearchInput: () => {},
  onMoreOptionsState: () => {},
  searchBox: () => {},
})

export default SearchContext

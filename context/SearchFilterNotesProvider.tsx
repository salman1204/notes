import { createContext, useEffect, useState } from 'react'
import { getNotesFromLocal } from '../helperFunctios/getNotesFromLocal'

interface NoteListContext {
  noteLists: {}[]
  searchResult: {}[]
  handleSearchText: (text:string) => void
}

const defaultState = {
  noteLists: [],
  searchResult: [],
}

export const noteListContext = createContext<NoteListContext>(defaultState)

const SearchFilterNotesProvider = (props: any) => {
  const [noteLists, setNoteLists] = useState(getNotesFromLocal())
  const [searchResult, setSearchResult] = useState(getNotesFromLocal())

  useEffect(() => {
    setNoteLists(getNotesFromLocal())
  }, [])

 
  let filterList = []

  const handleSearchText = (text:string = '') => {
      console.log(noteLists, searchResult);
    noteLists.length && 
    (filterList = noteLists.filter((data: data) =>
      data.id.toLowerCase().includes(text.toLowerCase())
    ))
    setSearchResult(filterList)
  }

  return (
    <noteListContext.Provider value={{ noteLists, searchResult, handleSearchText }}>
      {props.children}
    </noteListContext.Provider>
  )
}

export default SearchFilterNotesProvider

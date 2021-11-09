import { useContext } from 'react'
import { Form, FormControl } from 'react-bootstrap'
import { noteListContext } from '../context/SearchFilterNotesProvider'

const Header = () => {
    const {handleSearchText} = useContext(noteListContext)

  return (
    <div className="d-flex justify-content-center my-3">
      <Form className="w-50">
        <FormControl placeholder="Search with title" type="text" onChange={(e) => {handleSearchText(e.target.value)}}/>
      </Form>
    </div>
  )
}

export default Header

import { useContext } from 'react';
import { noteListContext } from '../context/SearchFilterNotesProvider';
import NoteItem from './NoteItem';

const NoteLists = () => {
    const {searchResult} = useContext(noteListContext)
    
    return (
        <div>
            {
                (searchResult != undefined) ? searchResult.map(note => <NoteItem key={Math.floor(Math.random() * 1000)} note={note}/>) : <h1>....loading</h1>
            }
        </div>
    );
}

export default NoteLists;
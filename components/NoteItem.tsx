type NoteItems = {
    note: {
      id: number
      title: string
    }
  }
const NoteItem = ({note} : NoteItems) => {
    return (
        <div>
            <h1>{note.id}</h1>
            <p>{note.title}</p>
        </div>
    );
}

export default NoteItem;
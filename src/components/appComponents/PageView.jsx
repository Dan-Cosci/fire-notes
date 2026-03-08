import React from 'react'
import useNoteStore from '../../state/NoteStore'
import { useParams } from 'react-router-dom';

const PageView = () => {
  const { notes } = useNoteStore();
  const params = useParams();

  const id = params.id;
  const note = notes.find((note) => note.id === id);

  console.log(id);


  return (
    <div className="noteContent">
      <h1>{note.title}</h1>
      <p>{note.content}</p>
    
    </div>
  )
}

export default PageView
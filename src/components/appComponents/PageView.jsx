import React, { useState } from 'react'
import useNoteStore from '../../state/NoteStore'
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const PageView = () => {
  const { notes } = useNoteStore();
  const params = useParams();

  const id = params.id;
  const note = notes.find((note) => note.id === id);

  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);


  const handleBlur = () => {
    const loading = toast.loading('saving note');
    setTimeout(() => {
      toast.success('Note saved!', { id: loading });
    }, 1000);
  }


  return (
    <div className="note-content" onBlur={handleBlur}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />

    
    </div>
  )
}

export default PageView
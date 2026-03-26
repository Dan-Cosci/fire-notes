import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import useNoteStore from '../store/NoteStore'

const EditNote = () => {
  const { notes } = useNoteStore();
  const params = useParams();

  const id = params.id;
  const note = notes.find((note) => note.id === id);

  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');

  const [editableTitle, setEditableTitle] = useState(title);
  const [editableContent, setEditableContent] = useState(content)

  const handleBlur = () => {
    
    setContent(editableContent);
    setTitle(editableTitle);

    toast.dismiss()
    const loading = toast.loading('saving note');
    setTimeout(() => {
      toast.success('Note saved!', { id: loading });
    }, 1000);
  }


  return (
    <div className="flex flex-col items-center min-h-screen p-4" onBlur={handleBlur}>
      <div 
      className="text-4xl font-bold outline-none w-full max-w-2/3 text-center border-b-lightOrg border-b pt-4" 
      contentEditable 
      suppressContentEditableWarning
      onInput={(e) => setEditableTitle(e.currentTarget.textContent)}
      data-placeholder='Title...'
      >{title}</div>

      <div 
      className="outline-none border-none w-full wrap-break-word max-w-3/4 min-h-40 mt-8" 
      contentEditable 
      suppressContentEditableWarning
      data-placeholder='Write your content here...'
      onInput={(e) => setEditableContent(e.currentTarget.textContent)}
      >{content}</div>
    </div>
  )
}

export default EditNote

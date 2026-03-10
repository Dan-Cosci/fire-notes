import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import useNoteStore from '../../store/NoteStore'

import './PageView.css'

const PageView = () => {
  const { notes } = useNoteStore();
  const params = useParams();

  const id = params.id;
  const note = notes.find((note) => note.id === id);

  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

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
    <div className="note-content" onBlur={handleBlur}>
      <div 
      className="title" 
      contentEditable 
      suppressContentEditableWarning
      onInput={(e) => setEditableTitle(e.currentTarget.textContent)}
      data-placeholder='Title...'
      >{title}</div>

      <div 
      className="content" 
      contentEditable 
      suppressContentEditableWarning
      data-placeholder='Write your content here...'
      onInput={(e) => setEditableContent(e.currentTarget.textContent)}
      >{content}</div>
    </div>
  )
}

export default PageView
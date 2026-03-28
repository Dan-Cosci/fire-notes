import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { urls } from '../routes/urls';
import useNoteStore from '../store/NoteStore'

const NoteEditor = () => {
  const { notes, updateNote, createNote } = useNoteStore();
  const params = useParams();
  const navigate = useNavigate();

  const noteId = params.id;
  const existingNote = noteId ? notes.find((note) => note.id === noteId) : null;
  const isEditMode = !!existingNote;

  const [title, setTitle] = useState(existingNote?.title || '');
  const [content, setContent] = useState(existingNote?.content || '');
  const [savedNoteId, setSavedNoteId] = useState(noteId || null);

  const [editableTitle, setEditableTitle] = useState(title);
  const [editableContent, setEditableContent] = useState(content);

  useEffect(() => {
    if (existingNote) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTitle(existingNote.title);
      setContent(existingNote.content);
      setEditableTitle(existingNote.title);
      setEditableContent(existingNote.content);
    }
  }, [existingNote]);

  const handleSave = async () => {
    const updatedTitle = editableTitle.trim() || 'Untitled';
    const updatedContent = editableContent;

    setTitle(updatedTitle);
    setContent(updatedContent);

    toast.dismiss();
    const loading = toast.loading('saving note...');

    try {
      if (isEditMode && existingNote) {
        const updatedNote = {
          ...existingNote,
          title: updatedTitle,
          content: updatedContent,
          updatedAt: new Date().toISOString()
        };
        await updateNote(updatedNote);
      } else if (savedNoteId) {
        const existing = notes.find((n) => n.id === savedNoteId);
        if (existing) {
          const updatedNote = {
            ...existing,
            title: updatedTitle,
            content: updatedContent,
            updatedAt: new Date().toISOString()
          };
          await updateNote(updatedNote);
        }
      } else {
        const newNoteId = await createNote({
          title: updatedTitle,
          content: updatedContent
        });
        setSavedNoteId(newNoteId);
        navigate(`${urls.edit.replace(':id', newNoteId)}`, { replace: true });
      }
      toast.success('Note saved!', { id: loading });
    } catch (error) {
      toast.error('Failed to save note', { id: loading });
      console.error('Error saving note:', error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4" onBlur={handleSave}>
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

export default NoteEditor

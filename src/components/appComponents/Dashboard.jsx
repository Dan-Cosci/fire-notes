import React from 'react'
import { useNavigate } from 'react-router-dom';

import useNoteStore from '../../store/NoteStore';

import './Dashboard.css'

const Dashboard = () => {

  const navigate = useNavigate();
  const { notes } = useNoteStore();


  const handleClick = (e) =>{
    e.preventDefault();
    navigate(`/edit/${e.target.id}`);
    console.log(e.target.id);
  }

  return (
    <div className={`dashboard-container ${notes.length > 0 ? 'container-grid' : 'container-flex'}`}>
      {notes.length > 0 ? notes.map((note) => (
        <div key={note.id} id={note.id} className="note-card" onClick={handleClick}>
          <h3>{note.title}</h3>
          <p>{note.content.length > 60 ? note.content.slice(0, 128) + '...' : note.content}</p>
          <div className="metadata">
            <p>created: {new Date(note.createdAt).toLocaleDateString()}</p>
            <p>updated: {new Date(note.updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
      )) : <p>No notes found.</p>}

    </div>
  )
}

export default Dashboard
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import useNoteStore from '../store/NoteStore';
import useAuthStore from '../store/AuthStore';

const Dashboard = () => {

  const navigate = useNavigate();
  const { notes, getNote } = useNoteStore();
  const user = useAuthStore((state) =>  state.user.uid);


  useEffect(() => {
    console.log(user)
    getNote(user);
    console.log('Notes Fetched', notes);
  },[]
  )

  const handleClick = (e) =>{
    e.preventDefault();
    navigate(`/edit/${e.target.id}`);
  }

  return (
    <div className={`bg-grey-50 min-h-[85vh] p-4 md:p-8 ${notes.length > 0 ? 'grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] auto-rows-16 gap-3' : 'flex flex-col items-center justify-center gap-4'}`}>
      {notes.length > 0 ? notes.map((note) => (
        <div key={note.id} id={note.id} className="bg-white rounded-md p-4 hover:scale-[1.02] hover:shadow-sm cursor-pointer relative transition-all duration-100" onClick={handleClick}>
          <h3>{note.title}</h3>
          <p className="text-grey-400 text-sm">{note.content.length > 60 ? note.content.slice(0, 128) + '...' : note.content}</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-xs text-grey-400">created: {new Date(note.createdAt).toLocaleDateString()}</p>
            <p className="text-xs text-grey-400">updated: {new Date(note.updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
      )) : <p>No notes found.</p>}

    </div>
  )
}

export default Dashboard

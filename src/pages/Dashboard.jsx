import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

import useNoteStore from '../store/NoteStore';
import useAuthStore from '../store/AuthStore';
import { urls } from '../routes/urls';

const Dashboard = () => {

  const navigate = useNavigate();
  const { notes, getNote } = useNoteStore();
  const user = useAuthStore((state) =>  state.user.uid);
  const n = notes;


  useEffect(() => {
    console.log(user)
    getNote(user);
    console.log('Notes Fetched', notes);
  },[]
  )

  const handleClick = (e) =>{
    e.preventDefault();
    navigate(urls.edit.replace(':id', e.currentTarget.id));
  }

  const handleAdd = (e) => {
    e.preventDefault();
    navigate(urls.add);
  }

  return (
    <div className={`bg-grey-50 min-h-[85vh] p-4 md:p-8 position-relative ${n.length > 0 ? 'grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] auto-rows-[15rem] gap-3' : 'flex flex-col items-center justify-center gap-4'}`}>
      {n.length > 0 ? n.map((note) => (
        <div key={note.id} id={note.id} className="bg-white h-full flex flex-col rounded-md p-4 hover:scale-[1.02] hover:shadow-sm cursor-pointer relative transition-all duration-100" onClick={handleClick}>
          <h3>{note.title}</h3>
          <p className="text-grey-400 text-sm">{note.content.length > 60 ? note.content.slice(0, 128) + '...' : note.content}</p>
          <div className="flex justify-between items-center mt-auto m-4">
            <p className="text-xs text-grey-400">created: {new Date(note.createdAt).toLocaleDateString()}</p>
            <p className="text-xs text-grey-400">updated: {new Date(note.updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
      )) : <p>No notes found.</p>}
      <button className='absolute bottom-10 right-10 sm:bottom-8 sm:right-8 bg-lightOrg p-7 sm:p-4 rounded-full text-white shadow-md hover:-translate-y-0.5 transition-all duration-100' onClick={handleAdd}>
        <FaPlus/>
      </button>
    </div>
  )
}

export default Dashboard

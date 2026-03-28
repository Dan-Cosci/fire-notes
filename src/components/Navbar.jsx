import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { urls } from '../routes/urls';
import useAuthStore from '../store/AuthStore';
import { FaUser } from 'react-icons/fa6';

import icon from '../assets/images/icon-large.png'

const Navbar = () => {

  const [ search, setSearch ] = useState('');
  const [ showModal, setShowModal ] = useState(false);
  const { user } = useAuthStore();
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-5 py-3 lg:px-10 lg:py-4 bg-lightOrg shadow-sm">
      <div className="flex items-center gap-1 cursor-pointer" onClick={() => navigate(urls.home)}>
        <img src={icon} height={40} width={40} alt="pencil on fire" className="h-10 w-10" />
        <h1 className="text-2xl font-bold text-white sm:block hidden">NoteFlow</h1>
      </div>

      <div className="flex-1 max-w-2xl mx-8">
        <input 
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          type='text' 
          placeholder='Search'
          className="w-full p-2 bg-grey-50 rounded-md border border-grey-100 focus:outline-none focus:border-primary"
          onKeyDown={(e) => { if (e.key === 'Enter') { console.log(search) } }} 
        />
      </div>

      <div className="flex items-center cursor-pointer relative" onClick={()=> setShowModal(prev => !prev)}>
        { user?.photoURL ? <img src={user?.photoURL} alt="profile-pic" height={40} width={40} className="rounded-full" /> : <FaUser height={40} className="text-white" /> }
        {showModal && 
        <div className='absolute bg-white top-12 right-0    rounded-sm'>
          <ul className='py-3 px-2 gap-2 flex flex-col'>
            <li className='hover:bg-red hover:text-white p-1 rounded-sm text-lg w-30' onClick={(e)=> console.log(e.target.textContent)}>Profile</li>
            <li className='hover:bg-red hover:text-white p-1 rounded-sm text-lg w-30' onClick={(e)=> console.log(e.target.textContent)}>Settings</li>
            <li className='hover:bg-red hover:text-white p-1 rounded-sm text-lg w-30' onClick={(e)=> console.log(e.target.textContent)}>Logout</li>  
          </ul>
        </div>}
      </div>
    </nav>
  )
}

export default Navbar

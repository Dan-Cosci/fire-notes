import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/AuthStore';
import { FaUser } from 'react-icons/fa6';

import icon from '../../assets/images/icon-large.png'

import './Navbar.css'

const Navbar = () => {

  const [ search, setSearch ] = useState('');
  const { user } = useAuthStore();
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate('/home')}>
        <img src={icon} height={40} alt="pencil on fire" />
        <h1>NoteFlow</h1>
      </div>

      <div className="search">
        <input 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        type='text' placeholder='Search'/>
      </div>

      <div className="account">
        { user?.photoURL ? <img src={user?.photoURL} alt="profile-pic" height={40} className='profile-pic' /> : <FaUser height={40} className='profile-pic' /> }
      </div>
    </nav>
  )
}

export default Navbar
import React, { useState } from 'react'

import './Navbar.css'
import icon from '../../assets/images/icon-large.png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [search,setSearch] = useState('');
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
        <img src="" alt="profile-pic" />
      </div>
    </nav>
  )
}

export default Navbar
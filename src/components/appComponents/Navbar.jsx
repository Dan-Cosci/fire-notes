import React, { useState } from 'react'

import './Navbar.css'

const Navbar = () => {

  const [search,setSearch] = useState('');

  return (
    <nav className="navbar">
      <div className="logo">
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
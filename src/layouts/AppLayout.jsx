import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer'
import Navbar from '../components/appComponents/Navbar'

import './AppLayout.css'

const AppLayout = () => {
  return (
    <div className="app-content">
      <header className='header'>
        <Navbar />
      </header>
      <main className='main'>
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
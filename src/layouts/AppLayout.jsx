import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer'
import Navbar from '../components/appComponents/Navbar'


const AppLayout = () => {
  return (
    <>
      <header className='header'>
        <Navbar />
      </header>
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default AppLayout
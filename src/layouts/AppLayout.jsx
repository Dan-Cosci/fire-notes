import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer'
import Navbar from '../components/appComponents/Navbar'

const AppLayout = () => {
  return (
    <div className="h-screen flex flex-col bg-red-500">
      <header className="flex-shrink-0">
        <Navbar />
      </header>
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout

import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'

const AppLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <header className="shrink-0">
        <Navbar />
      </header>
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout

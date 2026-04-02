import React from 'react'
import { Outlet } from 'react-router-dom'
import DeleteModal from '../components/DeleteModal'

import Navbar from '../components/Navbar'

import useNoteStore from '../store/NoteStore'

const AppLayout = () => {
  const {showModal, setShowModal} = useNoteStore();

  const handleCancel = (e) => {
    e.preventDefault();
    setShowModal();
  }


  return (
    <div className="h-screen flex flex-col">
      {showModal && <DeleteModal handleCancel={handleCancel} handleDelete={() => {}} />}
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

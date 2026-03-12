import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../config/firebase'

const Logout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await auth.signOut()
        navigate('/auth?mode=login', { replace: true })
      } catch (error) {
        console.error('Logout error:', error)
      }
    }

    handleLogout()
  }, [navigate])

  return null
}

export default Logout
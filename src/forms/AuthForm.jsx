import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import AuthInput from '../components/authComponents/AuthInput'
import AuthButton from '../components/authComponents/AuthButton'
import { FaGoogle } from 'react-icons/fa'

import { auth, GoogleProvider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'

import useAuthStore from '../store/AuthStore'

import './AuthForm.css'

const AuthForm = ({email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, displayName, setDisplayName, mode}) => {
  const {setUser} = useAuthStore();
  const navigate = useNavigate();
  
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        setUser(result.user)
        toast.success('Login Successful')
        navigate('/home')
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }

  

  return (
    <>
      {mode === 'register' &&
        <AuthInput
        label="displayName"
        type="text"
        placeholder="username"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}/>
      }
      <AuthInput
        label="Email"
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
      <AuthInput
        label="Password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        isPassword={true}/>
      {mode === 'register'&& 
        <AuthInput
        label="Confirm Password"
        value={confirmPassword}
        placeholder="confirm password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        isPassword={true}/>
      }
      <div className="action">
        <AuthButton type="submit">{mode === 'register' ? 'Register' : 'Login'}</AuthButton>
        {mode === 'login' && (<AuthButton  onClick={handleGoogleLogin}><FaGoogle /></AuthButton>)}
      </div>
    </>
  )
}

export default AuthForm

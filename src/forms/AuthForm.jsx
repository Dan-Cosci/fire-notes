import React from 'react'

import AuthInput from '../components/authComponents/AuthInput'
import AuthButton from '../components/authComponents/AuthButton'
import { FaGoogle } from 'react-icons/fa'

import './AuthForm.css'

const RegisterForm = ({email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, displayName, setDisplayName, mode}) => {
  const handleGoogle = (e) => {
    e.preventDefault();
    console.log('google');
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
        {mode === 'login' && (<AuthButton  onClick={handleGoogle}><FaGoogle /></AuthButton>)}
      </div>
    </>
  )
}

export default RegisterForm

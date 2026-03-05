import React from 'react'

import AuthInput from '../components/authComponents/AuthInput'
import AuthButton from '../components/authComponents/AuthButton'

const LoginForm = ({email, setEmail, password, setPassword}) => {
  return (
    <>
      <AuthInput value={email} onChange={(e) => setEmail(e.target.value)}/>
      <AuthInput value={password} onChange={(e) => setPassword(e.target.value)} isPassword={true}/>
      <AuthButton>Login</AuthButton>
    </>
  )
}

export default LoginForm
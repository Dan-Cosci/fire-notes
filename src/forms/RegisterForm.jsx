import React from 'react'

import AuthInput from '../components/authComponents/AuthInput'
import AuthButton from '../components/authComponents/AuthButton'

const RegisterForm = ({email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, displayName, setDisplayName}) => {
  return (
    <>
      <AuthInput
      label="Email"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <AuthInput
      label="Display Name"
      type="text"
      value={displayName}
      onChange={(e) => setDisplayName(e.target.value)}
    />

    <AuthInput
      label="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      isPassword
    />

    <AuthInput
      label="Confirm Password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      isPassword
    />
      <AuthButton>Register</AuthButton>
    </>
  )
}

export default RegisterForm

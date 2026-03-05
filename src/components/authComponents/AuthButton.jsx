import React from 'react'

const AuthButton = ({ children, ...props }) => {
  return (
    <button className="auth-btn" {...props}>
      {children}
    </button>
  )
}

export default AuthButton
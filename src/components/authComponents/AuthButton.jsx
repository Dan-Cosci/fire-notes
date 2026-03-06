import React from 'react'

import './AuthButton.css'

const AuthButton = ({ children, ...props }) => {
  return (
    <button className="auth-btn" {...props}>
      {children}
    </button>
  )
}

export default AuthButton
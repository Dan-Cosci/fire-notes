import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import './AuthInput.css'

const AuthInput = ({isPassword, ...props}) => {
  const [show,setShow] = useState(false);


  return (
    <>
    {isPassword ? (
      <div className="auth-pass">
        <input type={show ? "text" : "password"} {...props} />
        <div className="show">
          {show ?
          <FaEyeSlash size={20} onClick={() => setShow(!show)} className='eye-icon' />
          :
          <FaEye size={20} onClick={() => setShow(!show)} className='eye-icon' />}
        </div>
      </div>
    ) : (
      <div className="auth-input">
        <input type="text" {...props} />
      </div>
    )}
    </>
  )
}

export default AuthInput
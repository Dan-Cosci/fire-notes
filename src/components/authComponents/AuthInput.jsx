import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const AuthInput = ({isPassword, ...props}) => {
  const [show,setShow] = useState(false);


  return (
    <>
    {isPassword ? (
      <div className="auth-pass">
        <input type={show ? "text" : "password"} {...props} />
        {show ? 
        <FaEyeSlash size={20} onClick={() => setShow(!show)} className='eye-icon' /> 
        : 
        <FaEye size={20} onClick={() => setShow(!show)} className='eye-icon' />}
      </div>
    ) : (
      <input type="text" {...props} />
    )}
    </>
  )
}

export default AuthInput
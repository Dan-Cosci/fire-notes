import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const AuthInput = ({isPassword, ...props}) => {
  const [show,setShow] = useState(false);


  return (
    <>
    {isPassword ? (
      <div className="flex items-center border border-lightOrg rounded-full text-lg p-2 px-4 text-grey-500 w-full">
        <input type={show ? "text" : "password"} {...props} className="border-none outline-none w-full" />
        <div className="p-1 cursor-pointer">
          {show ?
          <FaEyeSlash size={20} onClick={() => setShow(!show)} />
          :
          <FaEye size={20} onClick={() => setShow(!show)} />}
        </div>
      </div>
    ) : (
      <div className="flex items-center border border-lightOrg rounded-full text-lg p-2 px-4 text-grey-500 w-full">
        <input type="text" {...props} className="border-none outline-none w-full" />
      </div>
    )}
    </>
  )
}

export default AuthInput

import React from 'react'

const AuthButton = ({ children, ...props }) => {
  return (
    <button className="w-full border-none outline-none h-10 flex justify-center items-center text-white bg-orange rounded-full cursor-pointer text-lg hover:bg-lightOrg" {...props}>
      {children}
    </button>
  )
}

export default AuthButton

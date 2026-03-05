import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams} from 'react-router-dom'

import './Auth.css'
import LoginForm from '../forms/LoginForm'
import RegisterForm from '../forms/RegisterForm'

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const mode = searchParams.get('mode')

  useEffect(()=>{
    if (!mode) navigate('/auth?mode=login', {replace: true});
    if (mode !== 'login' && mode !== 'register') navigate('/auth?mode=login', {replace: true});
  },[mode,navigate]);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <div className='auth-body'>
      <div className="auth-card">
        <div className="auth-card-title">
          <h1>{mode}</h1>
        </div>
        <form onSubmit={handleSubmit}>
          {mode === 'login'? <LoginForm 
                              email={email} setEmail={setEmail} 
                              password={password} setPassword={setPassword}/> 
                              : 
                              <RegisterForm 
                              email={email} setEmail={setEmail} 
                              password={password} setPassword={setPassword} 
                              confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} 
                              displayName={displayName} 
                              setDisplayName={setDisplayName}
                              />
                              }
          
        </form>

      </div>
    </div>
  )
}

export default Auth
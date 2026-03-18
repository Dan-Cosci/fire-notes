import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams} from 'react-router-dom'
import { toast } from 'react-hot-toast'

import AuthService from '../services/firebase/AuthService'
import AuthForm from '../forms/AuthForm'

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
    if (mode === 'register') {
      handleRegister(e);
    } else {
      handleLogin(e);
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();
    AuthService.regularSignIn(email, password)
    .then(() => {
      toast.success('Logged in successfully');
      navigate('/home');
    })
    .catch((error) => {
      toast.error(error.message);
    });
  }

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    AuthService.regularSignUp(email, password, displayName)
    .then(() => {
      toast.success('Account created successfully');
      navigate('/home');
    })
    .catch((error) => {
      toast.error(error.message);
    });
  }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-lightOrg via-yellow to-lightOrg bg-[length:400%_400%] animate-[auth-gradient_10s_ease_infinite]'>
      <div className="flex flex-col items-center p-8 h-[min(25rem,75vh)] w-[min(30rem,30vw,35rem)] bg-white rounded-md">
        <div className="p-5">
          <h1 className="text-2xl font-bold text-grey-600">{String(mode).toUpperCase()}</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 h-full w-full">
          <AuthForm 
          email={email} setEmail={setEmail} 
          password={password} setPassword={setPassword} 
          confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} 
          displayName={displayName} 
          setDisplayName={setDisplayName}
          mode={mode}
          />
        </form>
      </div>
    </div>
  )
}

export default Auth

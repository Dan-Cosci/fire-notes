import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams} from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import useAuthStore from '../store/AuthStore'
import AuthForm from '../forms/AuthForm'

import './Auth.css'

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setUser } = useAuthStore();

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
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        toast.success('Login Successful');
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
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        toast.success('Registration Successful');
        navigate('/');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  return (
    <div className='auth-body'>
      <div className="auth-card">
        <div className="auth-card-title">
          <h1>{String(mode).toUpperCase()}</h1>
        </div>
        <form onSubmit={handleSubmit}>
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
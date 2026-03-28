import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams} from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { FaGoogle } from 'react-icons/fa'

import { urls } from '../routes/urls'
import AuthService from '../services/firebase/AuthService'
import AuthInput from '../components/AuthInput'
import AuthButton from '../components/AuthButton'
import useAuthStore from '../store/AuthStore'

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const { setUser } = useAuthStore();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const mode = searchParams.get('mode')

  useEffect(()=>{
    if (!mode) navigate(`${urls.auth}?mode=login`, {replace: true});
    if (mode !== 'login' && mode !== 'register') navigate(`${urls.auth}?mode=login`, {replace: true});
  },[mode,navigate]);

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    const u = await AuthService.googleSignIn();
    setUser(u);
    toast.success('Login Successful');
    navigate(urls.home);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'register') {
      handleRegister(e);
    } else {
      handleLogin(e);
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    await AuthService.regularSignIn(email, password)
    .then(() => {
      toast.success('Logged in successfully');
      navigate(urls.home);
    })
    .catch((error) => {
      toast.error(error.message);
    });
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    await AuthService.regularSignUp(email, password, displayName)
    .then(() => {
      toast.success('Account created successfully');
      navigate(urls.home);
    })
    .catch((error) => {
      toast.error(error.message);
    });
  }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-lightOrg via-yellow to-lightOrg bg-[length:400%_400%] animate-[auth-gradient_10s_ease_infinite]'>
      <div className="flex flex-col items-center p-8 bg-white rounded-md">
        <div className="p-5">
          <h1 className="text-2xl font-bold text-grey-600">{String(mode).toUpperCase()}</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 h-full w-full">
          {mode === 'register' &&
            <AuthInput
            type="text"
            placeholder="username"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}/>
          }
          <AuthInput
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <AuthInput
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            isPassword={true}/>
          {mode === 'register'&& 
            <AuthInput
            value={confirmPassword}
            placeholder="confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            isPassword={true}/>
          }
          <div className="w-full flex flex-col items-center justify-center gap-3 mt-auto">
            <AuthButton type="submit">{mode === 'register' ? 'Register' : 'Login'}</AuthButton>
            {mode === 'login' && (<AuthButton onClick={handleGoogleLogin}><FaGoogle /></AuthButton>)}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Auth

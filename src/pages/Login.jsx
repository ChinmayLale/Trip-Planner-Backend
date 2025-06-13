import React, { useState , useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import loginImg from '../assets/LoginImg.jpg'
import { useDispatch, useSelector } from 'react-redux';

//function to handle login
import { loginUser } from '../Redux/slices/authSlice';


const Login = () => {
    //some states
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
   //selector to get user data from redux store
    const {user, loading} = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

//useEffect to redirect user to home page if already logged in
  
useEffect(() => {
  if (user) {
    navigate('/home');
  }
}, [user, navigate]);

const handleSubmit = (e) =>{
  e.preventDefault();

  // Here you would typically handle the login logic, such as making an API call to authenticate the user.
  dispatch(loginUser({username, password}))
}


  if(loading){
    return <div className='flex items-center justify-center min-h-screen'>Loading...</div>
  } 


  

  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center p-6'>
    <div className='flex p-6 border rounded-2xl'>
        <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12'>
            <form onSubmit={handleSubmit} className='w-full max-w-md bg-white p-8 rounded-lg border shadow-sm'>
                    <div className='flex justify-center mb-6'>
                        <h2 className='text-xl font-medium'>Trip-planner</h2>
                    </div>
                    <h2 className='text-2xl font-bold text-center mb-6'>Hey there!👋🏻</h2>
                    <p className='text-center mb-6'>Enter your Username and Password to Login</p>
                    <div className='mb-4'>
                      <label className='block text-sm font-semibold mb-2'>Username</label>
                      <input type="text" value={username} onChange={(e) =>setUsername(e.target.value)} className='w-full p-2 border rounded' placeholder='Enter your username'/>
                    </div>

                    <div className='mb-4'>
                      <label className='block text-sm font-semibold mb-2'>Password</label>
                      <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)} className='w-full p-2 border rounded' placeholder='Enter your password'/>
                    </div>
                    <button type='submit' className='w-full bg-black text-white rounded-lg p-2 font-semibold hover:bg-gray-800 transition'>Sign In</button>
                    <p className='mt-6 text-center text small'>Don't have an Account? <Link to={`/register`} className='text-blue-500'>Register</Link> </p>
            </form>
        </div>

        <div className='hidden md:block w-1/2 bg-gray-800 rounded-2xl overflow-hidden'>
        <div className='h-full flex flex-col justify-center items-center'>
            <img src={loginImg} alt='Login to Account' className='h-[750px] w-full object-cover' />
        </div>
        </div>
    </div>
    </div>
  )
}

export default Login
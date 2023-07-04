import React from 'react'
import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');

  const usernameHandling = (value) => {
    setUsername(value);
  }

  const passwordHandling = (value) => {
    setpassword(value);
  }

  const formHandling = (e) => {
    e.preventDefault();
    console.log({ username, password });
  }
  

  return (
    <div className='w-[400px] mx-auto bg-slate-300 p-4 rounded-sm'>
      <h1 className='text-[#333] font-semibold text-xl text-center mb-10'>Sign In</h1>
      <form>
        <input type="text"
        placeholder='Masukkan Username'
        className='block w-[100%] mb-2 px-1 py-3 rounded-sm bg-slate-200 text-[#333]'
        onChange={(e) => usernameHandling(e.target.value)}/>
        <input type="password" placeholder='Masukkan Password' className='block w-[100%] mb-10 px-1 py-3 rounded-sm bg-slate-200 text-[#333]'
        onChange={(e) => passwordHandling(e.target.value)}/>
        <button onClick={(e) => formHandling(e)} type='submit' className='w-[100%] bg-slate-800 py-2 font-semibold rounded-sm'>Sign In</button>
      </form>
    </div>
  )
}

export default Login

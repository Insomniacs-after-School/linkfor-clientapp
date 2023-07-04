import React from 'react'
import { useState } from 'react'
import Register from '../components/Register';
import Login from '../components/Login';

const HomePage = () => {
  const [menu, setMenu] = useState(true);

  const setLogin = () => {
    setMenu(true);
  }
  
  const setRegister = () => {
    setMenu(false);
  }  

  return (
    <div className='w-[80%] mx-auto bg-slate-800 text-white p-4'>
      <div className='w-[400px] mx-auto flex justify-around py-3'>
        <button onClick={setLogin} className='bg-slate-300 text-slate-800 font-semibold w-[50%] py-2 mr-2 rounded-sm'>Sign In</button> 
        <button onClick={setRegister} className='bg-slate-300 text-slate-800 font-semibold w-[50%] py-2 rounded-sm'>Sign Up</button>
      </div>
      {menu ? (<Login />) : (<Register />)}
    </div>
  )
}

export default HomePage
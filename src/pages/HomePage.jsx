import React from 'react'
import { useState } from 'react'
import Register from '../components/Register';
import Login from '../components/Login';

const HomePage = () => {

  const [route, setRoute] = useState(true);

  const setLogin = () => {
    setRoute(true);
  }
  
  const setRegister = () => {
    setRoute(false);
  }
  

  return (
    <div className='w-[80%] mx-auto bg-[#333] text-white p-4'>
      <div className='w-[50%] mx-auto flex justify-around p-3'>
        <button onClick={setLogin} className='bg-blue-300 p-4'>Login</button> 
        <button onClick={setRegister} className='bg-blue-300 p-4'>Register</button>
      </div>
      { route ? (<Login />) : (<Register />)}
    </div>
  )
}

export default HomePage
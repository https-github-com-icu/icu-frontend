import React, { useEffect } from 'react'
import Logo from '../../assets/logo.svg'
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { useState } from 'react';
import Alert from '../alert/Alert';


const Nav = () => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    console.log('리렌더링')
  }, [alert])
  

  return (
<nav className='flex justify-between items-center px-20 py-10'>
  
  <button
    onClick={() => {
      window.location.href='/homepage'
    }}>
    <img src={Logo} />
  </button>


  <ul className='flex text-lg  font-bold space-x-5 text-white justify-center items-center'>
    <li>
      <div className='relative flex justify-center'>
        <button onClick={() => {setAlert(!alert)}}>
        <FaBell className='h-[40px] w-[40px]' />
        {!alert && (<div className='absolute rounded-full w-3 h-3 bg-red-600 top-0 right-0'></div>)}
        </button>
        {alert && (
        <Alert />
        )}
      </div>
    </li>
    
    <li>
      <button
        onClick={() => {window.location.href='/mypage';}}>
        <IoPersonCircleOutline className='h-[50px] w-[50px]'/>
      </button>
    </li>
  </ul>
</nav>

  )
}

export default Nav
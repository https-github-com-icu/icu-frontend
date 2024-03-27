import React, { useEffect } from 'react'
import Logo from '../../assets/logo.svg'
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { useState } from 'react';
import Alert from '../alert/Alert';
import Profile from '../profile/Profile';


const Nav = () => {
  const [alert, setAlert] = useState(false);
  const [profile, setProfile] = useState(false);

  useEffect(() => {
    console.log('리렌더링')
  }, [alert, profile])
  

  return (
<nav className='flex justify-between items-center px-20 py-10'>
  
  <button
    onClick={() => {
      window.location.href='/homepage'
    }}>
    <img src={Logo} />
  </button>


  <ul className='flex text-lg  font-bold space-x-5 text-white justify-center items-center'>
    {/* 알림 드롭다운 버튼 */}
    <li>
      <div className='relative flex justify-center'>
        <button onClick={() => {setAlert(!alert)
          if(profile == true) {
            setProfile(false)
          }}}>
        <FaBell className='h-[40px] w-[40px]' />
        {!alert && (<div className='absolute rounded-full w-3 h-3 bg-red-600 top-0 right-0'></div>)}
        </button>
        {alert && (
        <Alert />
        )}
      </div>
    </li>
    {/* 마이페이지 버튼 */}
    <li>
      <div className='relative flex justify-center'>
        <button onClick={() => {setProfile(!profile)
          if(alert == true) {
            setAlert(false)
          }
        }}>
        <IoPersonCircleOutline className='h-[50px] w-[50px]'/>
        </button>
        {profile && (<Profile />)}
      </div>  
     
    </li>
  </ul>
</nav>

  )
}

export default Nav
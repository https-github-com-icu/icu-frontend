import React, { useEffect, useState } from 'react'
import { BiSolidCctv } from "react-icons/bi";
import { FaStore } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";

import { useNavigate } from 'react-router-dom';
import HomePage from '../../Pages/HomePage';

<<<<<<< HEAD:src/components/nav/SideNav.jsx
const SideNav = ({ setCategory }) => {

  useEffect(() => {
    
  
    return () => {
      
    }
  }, [])
  
=======

const SideNav = () => {
  const navigate = useNavigate();
>>>>>>> acd7d242076deef6547ce5f67ffb8db23032056d:src/components/side_nav/SideNav.jsx

  return (
    <>
    <div className='h-full w-[250px]'>
      <nav className='flex p-20 h-full'>

      <ul className='flex-col pl-10 space-y-5  text-[20px] font-[Pretendard] items-center font-bold text-white'>
       
       {/* 매장 관리 이동 버튼 */}
        <button
          onClick={() => setCategory('showStorelist')}>
          <li className='flex items-center w-40'>
          <FaStore className='h-5 w-8 m-2 pr-2' /> 매장 관리</li>
        </button>
      

        {/* 차트 이동 버튼 */}
        <button
          onClick={() => setCategory('showChart')}>

        <li className='flex items-center w-40'>
        <FaChartSimple className='h-5 w-8 m-2 pr-2'/> 차트</li>
        </button>

        {/* CCTV 이동 버튼 */}
        <button
          onClick={() => setCategory('showCctv')}>
        <li className='flex items-center w-40'>
        <BiSolidCctv className='h-6 w-8 m-2 pr-2'/> CCTV</li>
        </button>
      </ul>
    </nav>
    </div>
    </>
  )
}

export default SideNav
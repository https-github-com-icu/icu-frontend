import React from 'react'
import { BiSolidCctv } from "react-icons/bi";
import { FaStore } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";

const SideNav = () => {
  return (
    <>
    <div className='h-full'>
      <nav className='pl-20 pt-20'>
      <ul className='flex-col space-y-5 text-[16px] font-[Pretendard] items-center font-bold text-white'>
        <li className='flex items-center min-w-40'>
        <FaStore className='h-5 w-5 m-2' /> 매장 관리</li>
        <li className='flex items-center min-w-40'>
        <FaChartSimple className='h-5 w-5 m-2'/> 차트</li>
        <li className='flex items-center min-w-40'>
        <BiSolidCctv className='h-5 w-5 m-2'/> CCTV</li>
      </ul>
    </nav>
    </div>
    </>
  )
}

export default SideNav
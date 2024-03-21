import React from 'react'
import cctv from '../../assets/cctv.svg';
import chart from '../../assets/chart.svg';
import store from '../../assets/store.svg';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <>
    <div className='h-full'>
      <nav className='pl-20 pt-20'>
      <ul className='flex-col space-y-5 text-[16px] font-[Pretendard] items-center font-bold text-white'>
        <li className='flex items-center min-w-40'>
          <img className='p-2' src={cctv} alt="store"/>매장 관리</li>
        <li className='flex items-center min-w-40'>
          <img className='p-2' src={chart} alt="store" /> 차트</li>
        <li className='flex items-center min-w-40'>
          <img className='p-2' src={store} alt="store" /> CCTV</li>
      </ul>
    </nav>
    </div>
    </>
  )
}

export default SideNav
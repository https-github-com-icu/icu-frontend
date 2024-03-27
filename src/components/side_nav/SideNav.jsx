import React from 'react'
import { BiSolidCctv } from "react-icons/bi";
import { FaStore } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <>
    <div className='h-full w-[250px]'>
      <nav className='flex p-20 h-full'>
      <ul className='flex-col space-y-5  text-[20px] font-[Pretendard] items-center font-bold text-white'>
       
       {/* 매장 관리 이동 버튼 */}
       <Link to={'/homepage'}>
        <button>
          <li className='flex items-center w-40 py-5'>
          <FaStore className='h-5 w-8 m-2 pr-2' /> 매장 관리</li>
        </button>
       </Link>
      

        {/* 차트 이동 버튼 */}
        <Link to={'/chart'}>
        <button>
        <li className='flex items-center w-40 py-5'>
        <FaChartSimple className='h-5 w-8 m-2 pr-2'/> 차트</li>
        </button>
        </Link>

        {/* CCTV 이동 버튼 */}
        <Link to={'/cctv'}>
        <button>
        <li className='flex items-center w-40 py-5'>
        <BiSolidCctv className='h-5 w-7 m-2 pr-2'/> CCTV</li>
        </button>
        </Link>

      </ul>
    </nav>
    </div>
    </>
  )
}

export default SideNav
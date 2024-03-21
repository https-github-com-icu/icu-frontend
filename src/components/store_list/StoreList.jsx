import React from 'react'
import SideNav from '../side_nav/SideNav'

const StoreList = () => {
  return (
    <>
    <div className='w-full flex font-[Pretendard] text-white'>
      <SideNav />
    <div className='w-full min-full flex justify-between p-20 '>
      <div className='min-w-[250px]'>
      <div className='font-bold text-[38px] min-w-1/2'>매장 리스트 <p className='font-medium text-[18px]'>관리할 매장을 선택하세요</p></div>

      </div>
      
      <div className='flex min-w-[250px] space-x-5 items-center justify-between font-bold text-[20px]'>
      <div className='w-full px-5 py-3 bg-slate-700 flex justify-center rounded-lg'>
        <p className='justify-center '>매장 등록</p></div>
      <div className='w-full px-5 py-3 bg-slate-700 flex justify-center rounded-lg'>
        <p>편집</p></div>
        </div>
    </div>
    </div>    
    </>
    
  )
}

export default StoreList
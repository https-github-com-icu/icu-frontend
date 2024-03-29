import React, { useEffect, useState } from 'react'
import SideNav from '../side_nav/SideNav'
import StoreList from '../store_list/StoreList'
import { Button } from '@material-tailwind/react'

const StoreRegistration = ({setShowView}) => {

  useEffect(() => {

}, [])

  return (
    <>
      <div className='w-full flex font-[Pretendard] text-white justifyu-center'>
        <SideNav />
        <div className='w-full'>
        {/* 매장 리스트 */}
        <div className='w-full min-full flex-col'>
            <div className=' flex justify-between px-20 py-10 '>
              <div className='min-w-[250px]'>
              <div className='font-bold text-[38px] min-w-1/2'>매장 등록하기 <p className='font-medium text-[18px]'>등록할 매장 정보를 입력하세요</p></div>
              </div>
              <div className='flex min-w-[250px] space-x-5 items-center justify-between font-bold text-[20px]'>
              {/* 매장 등록 & 편집 버튼 그룹 */}
              </div>
          </div>

            <div className='w-full flex justify-center'>
              <div className='w-[60%] p-4 text-[22px] font-bold'>
                <ul className='w-full px-10 space-y-10'>
                  <li className='flex justify-between items-center text-center'>
                    <p>매장 이름</p>
                    <input className='text-[20px] font-medium w-[50%] border px-2 py-1 rounded-md text-black' placeholder='매장 이름을 입력하세요.' />
                  </li>

                  <li className='flex justify-between items-center text-center'>
                    <p>매장 위치</p>
                    <input className='text-[20px] font-medium w-[50%] border px-2 py-1 rounded-md text-black' placeholder='내용을 입력하세요.' />
                  </li>

                  <li className='flex justify-between items-center text-center'>
                    <p>매장 와이파이 번호</p>
                    <input className='text-[20px] font-medium w-[50%] border px-2 py-1 rounded-md text-black' placeholder='내용을 입력하세요.' />
                  </li>

                  <li className='flex justify-center'>
                    <div className='w-full pt-5 flex justify-center'>
                      
                      <Button 
                        onClick={() => {
                          setShowView(true)
                        }}
                        className='w-2/5 h-[60px] px-10 py-2 bg-slate-700 flex justify-center items-center rounded-lg'>
                        <p>등록</p>
                      </Button>

                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StoreRegistration
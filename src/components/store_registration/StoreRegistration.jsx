import React from 'react'
import SideNav from '../side_nav/SideNav'

const StoreRegistration = () => {
  return (
    <>
      <div className='w-full flex font-[Pretendard] text-white justifyu-center'>
        <SideNav />

        <div className='w-4/5'>
          <div className='w-full min-full flex-col'>
            <div className='flex justify-start p-20 pb-10'>
              <div className='min-w-[250px]'>
                <div className='font-bold text-[38px] min-w-1/2'>매장 등록하기<p className='font-medium text-[18px]'>등록할 매장 정보를 입력하세요</p></div>
              </div>
            </div>

            <div className='w-full flex justify-center'>
              <div className='w-[60%] p-4 text-[20px] font-bold'>
                <ul className='w-full p-10 space-y-10'>
                  <li className='flex justify-between items-center text-center'>
                    <p>매장 이름</p>
                    <input className='w-[50%] border p-3 rounded-md text-black' placeholder='매장 이름을 입력하세요.' />
                  </li>

                  <li className='flex justify-between items-center text-center'>
                    <p>매장 위치</p>
                    <input className='w-[50%] border p-3 rounded-md text-black' placeholder='내용을 입력하세요.' />
                  </li>

                  <li className='flex justify-between items-center text-center'>
                    <p>매장 와이파이 번호</p>
                    <input className='w-[50%] border p-3 rounded-md text-black' placeholder='내용을 입력하세요.' />
                  </li>

                  <li className='flex justify-center'>
                    <div className='w-full pt-5 flex justify-center'>
                      <div className='w-2/5 h-[60px] px-10 py-2 bg-slate-700 flex justify-center items-center rounded-lg'>
                        <p>등록</p>
                      </div>
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
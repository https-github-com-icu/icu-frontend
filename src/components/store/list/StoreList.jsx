import React, { useEffect, useState } from 'react'
import SideNav from '../../nav/SideNav'
import { Button } from '@material-tailwind/react'
import StoreRegistration from '../list/StoreRegistration'
import axios from 'axios';

const StoreList = () => {
  const [showView, setShowView] = useState(true)
  const [stores, setStores] = useState([]);

  useEffect(() => {
    // 매장 리스트를 불러오는 함수
    const fetchStores = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/store');
        setStores(response.data);
      } catch (error) {
        console.error('매장 리스트를 불러오는 중 오류 발생:', error);
      }
    };

    // 페이지가 로드될 때 매장 리스트를 불러옴
    fetchStores();
  }, [stores]);
  

  return (
    <>
    <div className='w-full flex font-[Pretendard] text-white justify-center'>
      {showView ? (
        <div className='w-full'>
      {/* 매장 리스트 */}
      <div className='w-full min-full flex-col '>
          <div className=' flex justify-between px-20 py-10'>
            <div className='min-w-80'>
            <div className='font-bold text-[38px] min-w-1/2'>매장 리스트 <p className='font-medium text-[18px]'>관리할 매장을 선택하세요</p></div>
            </div>
            <div className='flex min-w-[250px] space-x-5 items-center justify-between font-bold text-[20px]'>
            {/* 매장 등록 & 편집 버튼 그룹 */}
            <Button
              onClick={() => {
                setChangeView("storeRegistration")
              }} 
              className='w-full px-4 py-2 bg-slate-800 flex justify-center rounded-lg'>
            <p className='justify-center '>매장 등록</p>
            </Button>
            <Button className='w-full px-4 py-2 bg-slate-800 flex justify-center rounded-lg'>
              <p>편집</p>
            </Button>
              </div>
          </div>

          <div className='h-full w-full'>
        {/* 매장 리스트 블록 */}
        <div className='w-full flex justify-center'>
        <div className=' w-4/5 md:w-2/3 lg:w-1/2 flex-row px-4 md:px-8 lg:px-12 text-lg font-medium'>
            <div className=' w-full bg-slate-800 rounded-2xl p-7 space-y-3'>
            <li className='flex justify-between font-semibold'>
                <ul>매장명</ul>
                <div className='w-1/3 flex justify-center'>
                <ul>이상 감지 행동 알림</ul>
                </div>
            </li>
            <hr />
            {stores.map(store => (
                    <li key={store._id} className='flex justify-between items-center text-center'>
                      <ul>{store.name}</ul>
                      <div className='w-1/3 flex justify-center'>
                        <ul className='bg-red-500 rounded-[20px] px-3 py-1'>No alter</ul>
                      </div>
                    </li>
                  ))}
            </div>
          </div>
          </div>
          </div>
        </div>
        </div>
      ): (
        <StoreRegistration setShowView={setShowView}/>
      )}

    
        </div>
    </>
    
  )
}

export default StoreList
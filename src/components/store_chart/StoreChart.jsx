import React from 'react'
import SideNav from '../side_nav/SideNav'

const StoreChart = () => {
  return (
    <>
			<div className='w-full flex font-[Pretendard] text-white justify-center'>
				{/* 사이드 네비게이션 */}
				<SideNav />

				<div className='w-full'>
					{/* 마이페이지 정보 */}
					<div className='w-full min-full flex-col'>
						<div className='flex justify-start px-20 py-10'>
							<div className='min-w-[250px]'>
								<div className='font-bold text-[38px] min-w-1/2'>차트</div>
							</div>
						</div>
					</div>

					
				</div>
			</div> 
		</>
  )
}

export default StoreChart
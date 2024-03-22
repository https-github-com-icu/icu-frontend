import React from 'react'
import SideNav from '../side_nav/SideNav'

const UserInfo = () => {
  return (
    <>
			<div className='w-full flex font-[Pretendard] text-white justify-center'>
				{/* 사이드 네비게이션 */}
				<SideNav />

				<div className='w-4/5'>
					{/* 마이페이지 정보 */}
					<div className='w-full min-full flex-col'>
						<div className='flex justify-start p-20 pb-10'>
							<div className='min-w-[250px]'>
								<div className='font-bold text-[38px] min-w-1/2'>마이페이지</div>
							</div>
						</div>
					</div>

					<div className='w-full flex justify-center'>
						<div className='w-[60%] p-4 text-[20px] font-bold'>
							<ul className='w-full p-10 space-y-7'>
								<li className='flex justify-between items-center text-center'>
									<p>사용자</p>
									<div className='p-2'>
										<p>ID</p>
									</div>
								</li>

								<li className='flex justify-between items-center text-center'>
									<p>별명</p>
									<input className='border p-2 rounded-md text-black' placeholder='별명'/>
								</li>

								<li className='flex justify-between items-center text-center'>
									<p>전화번호</p>
									<div className='text-black'>
										<select className='w-[100px] mx-5'>
											<option>010</option>
											<option>011</option>
											<option>070</option>
										</select>
										<input className='w-[100px] border p-2 mx-5 rounded-md'/>
										<input className='w-[100px] border p-2 ml-5 rounded-md'/>
									</div>
								</li>
								
								<li className='flex justify-between items-center text-center'>
									<p>새 비밀번호</p>
									<input className='border p-2 rounded-md text-black' placeholder='새 비밀번호' type='password'/>
								</li>

								<li className='flex justify-between items-center text-center'>
									<p>비밀번호 확인</p>
									<input className='border p-2 rounded-md text-black'placeholder='비밀번호 확인' type='password'/>
								</li>

								<li className='flex justify-center'>
									<div className='w-full pt-5 flex justify-center'>
										<div className='w-3/5 px-10 py-2 bg-slate-700 flex justify-center rounded-lg'>
											<p>수정 완료</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div> 
		</>
  )
}

export default UserInfo
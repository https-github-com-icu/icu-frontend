import React from 'react'
import { Link } from 'react-router-dom'

const SigninPage = () => {
  return (
    <>
    <section className='sm:w-[500px] w-3/4  my-5 py-5 bg-white rounded-[50px] flex flex-col align-items justity-center items-center'>
    {/* Header */}
     <div className=' my-5  rounded-md flex flex-col align-items items-center'>
      <img src="src\assets\profile_icon.svg" alt="Description" />
      <p className='pt-3 text-[28px] font-bold'>환영합니다</p>
      <p className='text-[16px] font-medium'>로그인 계속하기</p>

    </div>
    

    {/* Input */}
    <div className=' my-8 space-y-8 bg-white rounded-md flex flex-col align-items justity-center items-center'>
      {/* ID Input */}
      <div className='w-[800px]py-3 flex-col align-items justity-center items-center'>
        <p className='text-[18px] font-bold '>ID</p>
            <input 
            className="sm:min-w-[320px] bg-gray-100 px-5 py-2 border rounded-md" 
            placeholder='아이디를 입력하세요' 
            type="id" />
        </div>
      {/* Password Input */}
        <div className='flex-col align-items justity-center items-center'>
        <p className='text-[18px] font-bold'>Password</p>
            <input 
            className="sm:min-w-[320px] bg-gray-100 px-5 py-2 border rounded-md" 
            placeholder='비밀번호를 입력하세요' 
            type="password" />
        </div>
    </div>

    {/* Footer */}
    <div className='sm:pt-10 pt-5 pb-20 px-2 bg-white rounded-md flex flex-col align-items justity-center items-center
      font-bold text-[18px]'>
       <div className='flex flex-row space-x-7'>
          <button className='sm:px-10 px-5 py-2 bg-slate-300 shadow-orange-200 rounded-md'>
            회원가입
            </button>
      <Link to="/home">
          <button className='sm:px-10 px-5 py-2 bg-slate-300 shadow-orange-200 rounded-md'>
            로그인
            </button>
      </Link> 
       </div>
     
      </div>
    </section>
  </>
  )
}

export default SigninPage
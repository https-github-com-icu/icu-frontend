import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Signin from '../../components/Signin';


const SigninPage = () => {
  return (
    <>
    <main className="h-screen py-20 bg-slate-900 font-[Pretendard] flex flex-col align-items items-center">
      {/* 로고 헤더 */}
      <div className='w-1/2 my-3  rounded-md flex flex-col align-items items-center'>
      <img src="src\assets\logo.svg" alt="Description" />
      </div>
      {/* 로그인 창 */}
      () : {
        <Signin />
      }

    </main>

    </>
    
  )
}

export default SigninPage
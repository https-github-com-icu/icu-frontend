import React, { useEffect } from 'react'




const SignupPage = () => {
  return (
    <>
    
    {/* Input */}
    <div className='w-3/4 my-5 py-5 bg-white rounded-md flex flex-col align-items justity-center items-center'>
      <div className='flex align-items justity-center items-center'>
        <p className='text-[18px] font-bold pr-5'>ID</p>
            <input 
            className="bg-gray-100 px-5 py-2 border rounded-md" 
            placeholder='아이디를 입력하세요' 
            type="text" />
        </div>
        <div className='flex align-items justity-center items-center'>
        <p className='text-[18px] font-bold pr-5'>ID</p>
            <input 
            className="bg-gray-100 px-5 py-2 border rounded-md" 
            placeholder='비밀번호를 입력하세요' 
            type="text" />
        </div>
    </div>
    </>
  )
}

export default SignupPage
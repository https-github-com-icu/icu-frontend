import React from 'react'
import { Link } from 'react-router-dom'

const Form = ({title}) => {
  return (
    <>

  <section className='max-w-full h-full flex justify-center items-center font-[Pretendard]'>
    
    <div className='px-10 py-10 bg-white rounded-[50px] flex-col items-center'>
    {/* Header */}
    <div className='flex flex-col  justify-center text-center'>
     <img className='px-20' src="src\assets\profile_icon.svg" alt="Description" />
     <p className='pt-3 text-[28px] font-bold'>환영합니다</p>
     <p className='text-[16px] font-bold'>{title} 계속하기</p>
     <div className='pb-5'>
     <p className='mx-5 my-2 text-start text-[16px] font-bold'>ID</p>
      <input 
        className="border mx-5 p-2 rounded-md" 
        placeholder='아이디를 입력하세요' 
        type="id" />
     </div>
      
      <p className='mx-5 my-2 text-start text-[16px] font-bold'>PASSWORD</p>
      <input 
        className="border mx-5 p-2 rounded-md" 
        placeholder='비밀번호를 입력하세요' 
        type="password" />


          <button className='mx-5 my-8 py-3 font-bold bg-slate-300 shadow-orange-200 rounded-md'>
            <Link to={'/homepage'}> {title} </Link>  
          </button>

          { title == '회원가입' ? 
          ( <p className='text-[16px] font-medium'> 계정이 존재합니까? 
              <Link className='font-bold' to={'/login'}>
                {" "} 로그인
              </Link> </p> ) : 
          ( <p className='text-[16px] font-medium'> 계정이 없습니까? 
            <Link className='font-bold' to={'/register'}>
              {" "} 회원가입
            </Link> </p> )
          }
      </div>
    </div>
  </section>
  </>
  )
}

export default Form
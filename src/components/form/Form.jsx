import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Form = ({title}) => {
  const {register, handleSubmit, formState: {errors}, reset } = useForm({
  })

  const [userData, setUserData] = useState({id: '', password:''})

  useEffect(() => {
    console.log(userData)
  }, [userData])
  

  const onSubmit = ({id, password}) => {
    // submit 시 reset을 사용해 form 비우기
    setUserData({id: id, password: password});
    reset();
  }

  const notify = (message) => {
    if(errors && errors.id && message == errors.id.message) {
      toast(`${message}`, { duration: 2000 })
    }
    if (errors && errors.password && message === errors.password.message) {
      toast(`${message}`, { duration: 2300 });
    }

  }

  const userID = {
    required: "아이디는 필수 필드입니다",
    pattern: {
      value: /^[a-zA-Z0-9]+$/,
      message: "아이디는 영문자와 숫자만 포함해야 합니다",
    },
    minLength: {
      value: 4,
      message: "아이디는 최소 4자입니다",
    },
    maxLength: {
      value: 13,
      message: "아이디는 최대 13자입니다",
    },
  }


  const userPassword = {
    required: "비밀번호는 필수 필드입니다",
    maxLength: {
      value: 13,
      message: "비밀번호는 최대 13자입니다",
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: "비밀번호는 최소 8자, 영문자와 숫자를 포함해야 합니다",
    },
   

  }


  return (
    <>
  <section className='max-w-full h-full flex justify-center items-center font-[Pretendard]'>
    
    <div className='px-10 py-10 bg-white rounded-[50px] flex-col items-center'>
    {/* Header */}
    <div className='flex flex-col  justify-center text-center'>
     <img className='px-20' src="src\assets\profile_icon.svg" alt="Description" />
     <p className='pt-3 text-[28px] font-bold'>환영합니다</p>
     <p className='text-[16px] font-bold'>{title} 계속하기</p>
     
     {/* Input */}

    <form onSubmit={handleSubmit(onSubmit)}>
      <p className='mx-5 my-2 text-start text-[16px] font-bold'>ID</p>
          <input 
              {...register("id", userID)}
              className="border mx-5 p-2 rounded-md" 
              placeholder='아이디를 입력하세요' 
              type="id" />

      <p className='mx-5 my-2 text-start text-[16px] font-bold'>PASSWORD</p>
          <input 
              {...register("password", userPassword)}
              className="border mx-5 p-2 rounded-md" 
              placeholder='비밀번호를 입력하세요' 
              type="password" />
      
      <div>
        <button className='px-10 my-8 py-3 font-bold bg-slate-300 shadow-orange-200 rounded-md'>
          {title}  
        </button>
      </div>
      </form>
          {/* ID 유효성 인증 실패 */}
          <Toaster />
          {errors?.id && notify(errors.id.message)}
         {errors?.password && notify(errors.password.message)}

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
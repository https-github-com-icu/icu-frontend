import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const UserInfo = ({title}) => {
    const {register, handleSubmit, formState: {errors}, reset } = useForm( {
    })

    const [userInfo, setUserInfo] = useState({id: '', name: '', password: '', newPassword: ''})

    useEffect(() => {
        console.log(userInfo)
    }, [userInfo])

    const onSubmit = ({id, name, password, newPassword}) => {
        setUserInfo({id: id, name: name, password: password, newPassword: newPassword});
        resizeTo();
    }

    return (
        <>
    <section className='max-w-full h-full flex justify-center items-center font-[Pretendard]'>
            <div className='px-10 py-10 bg-white rounded-[50px] flex-col items-center'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p className='mx-5 my-2 text-start text-[16px] font-bold'>ID</p>
                    <input 
                        className='border mx-5 p-2 rounded-md'
                        placeholder='아이디'
                        type="id" />

                    <p className='mx-5 my-2 text-start text-[16px] font-bold'>Name</p>
                    <input 
                        className='border mx-5 p-2 rounded-md'
                        placeholder='이름'
                        type="name" />
                        
                    <p className='mx-5 my-2 text-start text-[16px] font-bold'>Password</p>
                    <input 
                        className='border mx-5 p-2 rounded-md'
                        placeholder='비밀번호'
                        type="password" />

                    <p className='mx-5 my-2 text-start text-[16px] font-bold'>NewPassword</p>
                    <input 
                        className='border mx-5 p-2 rounded-md'
                        placeholder='비밀번호 확인'
                        type="NewPassword" />

                    <div>
                        <button className='px-10 my-8 py-3 font-bold bg-slate-300 shadow-orange-200 rounded-md'>
                            저장하기
                        </button>
                    </div>
                </form>
            </div>
        </section>
        </>
    )
}

export default UserInfo
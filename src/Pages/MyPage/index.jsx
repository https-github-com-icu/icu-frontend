import React, { useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import UserInfo from '../../components/user_info/UserInfo'

const MyPage = () => {
    useEffect(() => {

    }, [])

    return (
        <>
        <div className='h-screen bg-slate-900'>
            <Nav />
            <div className='flex'>
                <UserInfo />
            </div>
        </div>
        </>
    )
}

export default MyPage
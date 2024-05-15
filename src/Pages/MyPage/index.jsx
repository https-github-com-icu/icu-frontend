import React, { useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import SideNav from '../../components/side_nav/SideNav'
import UserInfo from '../../components/user_info/UserInfo'

const MyPage = () => {

    return (
        <>
        <div className='h-screen bg-slate-900'>
            <Nav />
            <div className='flex'>
                <SideNav />
                <UserInfo />
            </div>
        </div>
        </>
    )
}

export default MyPage
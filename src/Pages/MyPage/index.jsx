import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Input from './user-info/UserInfo'

const MyPage = () => {
    useEffect(() => {

    }, [])

    return (
        <>
        <div className='flex flex-col h-screen'>
            <Header />
            <Input />
            <Footer />
        </div>
        </>
    )
}

export default MyPage
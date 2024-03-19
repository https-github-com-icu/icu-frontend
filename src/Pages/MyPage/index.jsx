import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const MyPage = () => {
    useEffect(() => {

    }, [])

    return (
        <>
        <div className='flex flex-col h-screen'>
            <Header />
            <Footer />
        </div>
        </>
    )
}

export default MyPage
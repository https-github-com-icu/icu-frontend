import React from 'react'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'
import StoreList from '../../components/store_list/StoreList'
const HomePage = () => {
  return (
    <>
    <div className='h-screen bg-slate-900'>
        <Nav />
        <div className='flex'>
          <StoreList />
        </div>
    </div>
    </>
  )
}

export default HomePage
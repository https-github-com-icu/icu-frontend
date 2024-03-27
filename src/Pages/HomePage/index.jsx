import React, { useState } from 'react'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'
import StoreList from '../../components/store_list/StoreList'
import StoreRegistration from '../../components/store_registration/StoreRegistration'

const HomePage = () => {
  const [showView, setShowView] = useState(true)
  return (
    <>
    <div className='h-screen bg-slate-900'>
        <Nav />
        <div className='flex w-full'>
          {showView ? (<StoreList setShowView={setShowView}/>) : (<StoreRegistration setShowView={setShowView} />)}
        </div>
    </div>
    </>
  )
}

export default HomePage
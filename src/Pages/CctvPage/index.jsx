import React, { useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import StoreCctv from '../../components/store_cctv/StoreCctv'

const CctvPage = () => {
  useEffect(() => {

  }, [])

  return (
    <>
    <div className='min-h-screen bg-slate-900'>
      <Nav />
      <div className='flex'>
        <StoreCctv />
      </div>
    </div>
    </>
  ) 
}

export default CctvPage
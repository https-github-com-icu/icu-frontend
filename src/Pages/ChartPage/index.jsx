import React, { useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import StoreChart from '../../components/chart/Chart'

const Chart = () => {

  useEffect(() => {

  }, [])

  return (
    <>
    <div className='min-h-screen bg-slate-900'>
      <Nav />
      <div className='flex'>
        <StoreChart />
      </div>
    </div>
    </>
  ) 
}

export default Chart


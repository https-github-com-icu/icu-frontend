import React, { useEffect } from 'react';
import Nav from '../../components/nav/Nav';
import Chart from '../../components/chart/Chart';

const ChartPage = () => {
  useEffect(() => {

  }, [])

  return (
    <>
    <div className='min-h-screen bg-slate-900'>
      <Nav />
      <div className='flex'>
        <Chart />
      </div>
    </div>
    </>
  )
}

export default ChartPage
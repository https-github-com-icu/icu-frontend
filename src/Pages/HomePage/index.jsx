import React, { useEffect, useState } from 'react'
import Nav from '../../components/nav/Nav'
import SideNav from '../../components/nav/SideNav'
import StoreList from '../../components/store/StoreList'
import StoreChart from '../../components/store/StoreChart'
import StoreCctv from '../../components/store/StoreCctv'
const HomePage = () => {
  const [category, setCategory] = useState('showStorelist');

  useEffect(() => {
  
    return () => {
      
    }
  }, [category])

  return (
    <>
    <div className='min-h-screen bg-slate-900'>
        <Nav />
        <div className='flex w-full'>
        <SideNav setCategory={setCategory}/>
        {category == 'showStorelist' && <StoreList />}
        {category == 'showChart' && <StoreChart />}
        {category == 'showCctv' && <StoreCctv />}
        </div>
    </div>
    </>
  )
}

export default HomePage
import React, { useState } from 'react'
import Nav from '../../components/nav/Nav'
import SideNav from '../../components/side_nav/SideNav'
import StoreList from '../../components/store_list/StoreList'
import StoreRegistration from '../../components/store_registration/StoreRegistration'

import StoreChart from '../../components/chart/Chart'
import StoreCctv from '../../components/store_cctv/StoreCctv'

const HomePage = () => {
  const [changeView, setChangeView] = useState("storeList")

  return (
    <>
    <div className='h-screen bg-slate-900'>
        <Nav />
        <div className='flex w-full'>
          <SideNav setChangeView={setChangeView}/>
          {changeView === "storeList" && <StoreList setChangeView={setChangeView}/>}
          {changeView === "storeRegistration" && <StoreRegistration setChangeView={setChangeView}/>}
          {changeView === "storeChart" && <StoreChart/>}
          {changeView === "storeCctv" && <StoreCctv/>}
        </div>
    </div>
    </>
  )
}

export default HomePage
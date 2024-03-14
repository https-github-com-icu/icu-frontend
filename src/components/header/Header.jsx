import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../nav/Nav'

const Header = () => {
  return (
    <>
    <header className='z-0 bg-slate-900 h-full flex justify-center items-center'>
      <img className='m-10' src="src\assets\logo.svg" alt="" />
    </header>
    </>
     
  )
}

export default Header
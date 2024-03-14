import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import SignUp from '../RegisterPage/sign-up/SignUp'

const RegisterPage = () => {
  useEffect(() => {
  }, [])
  
  return (
    <>
    <div className='flex flex-col h-screen'>
      <Header />
      <SignUp />
      <Footer />
    </div>
    </>
    
  )
}

export default RegisterPage
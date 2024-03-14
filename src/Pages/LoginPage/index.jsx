import React from 'react'
import Header from '../../components/header/Header'
import SignIn from './sign-in/SignIn'
import Footer from '../../components/footer/Footer'

const LoginPage = () => {
  return (
    <>
    <div className='flex flex-col h-screen'>
      <Header />
      <SignIn />
      <Footer />
    </div>
    </>
  )
}

export default LoginPage
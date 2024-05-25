import React, { useEffect } from 'react'
import Form from '../../../components/form/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const nav = useNavigate()

  const formHandler = async ( data, encryptedData) => {
    try {
      const response = await fetch('http://localhost:10110/master/signin', {
      method: 'POST',  
      headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...encryptedData,
        })
      });
      if( response.ok ) {
        const responseData = await response.json();
        console.log(responseData)
        localStorage.setItem('userToken', responseData.token);
        nav('/homepage')
      } else {
        console.log('로그인 실패:', response.statusText)
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className='bg-slate-900 h-full'>
        <Form title={'로그인'} formHandler={formHandler}/>
      </div>
    </>
    
  )
}


export default SignIn
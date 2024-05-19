import React, { useEffect } from 'react'
import Form from '../../../components/form/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const nav = useNavigate()
  const formHandler = async ( data ) => {
    try {
      const res = await axios.post('http://localhost:8080/', data);
      if (res.status == 200) {
        console.log("로그인 성공", res.data);
        nav("/homepage");
      } else {
        console.log(res.status)
      }
    } catch (error) {
      console.log(error);
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
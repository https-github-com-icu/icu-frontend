import React from 'react'
import Form from '../../../components/form/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SignUp =  ( ) => {

  const nav = useNavigate()

  
  const formHandler = async (data) => {
    try {
      const res = await axios.post('http://localhost:8080/register', data);
          if(res.status === 201) {
            console.log('회원가입 성공', res.data);
            alert('회원가입에 성공했습니다!');
            nav('/login')
          }
    } catch (error) {
      console.error(error)
    }
  }
 

  return (
   <>
    <div className='bg-slate-900 h-full'>
      <Form title={'회원가입'} formHandler={formHandler}/>
    </div>
  </>
  )
}

export default SignUp
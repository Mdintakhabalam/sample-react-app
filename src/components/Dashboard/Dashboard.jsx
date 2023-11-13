import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate()
  const [userName, setUserName]= useState('');
  useEffect(()=> {
    let userEmail = sessionStorage.getItem('userEmail');
    setUserName(sessionStorage.getItem('userName'));
    if(userEmail === '' || userEmail === null){
      navigate('/login')
    }
  }, [])
  return (
    <div>
      <h1 className='mt-5'>Welcome to Dashboard...</h1>
      <h3 className='my-5'>{userName} Logged in successfully.</h3>
    </div>
  )
}

export default Dashboard
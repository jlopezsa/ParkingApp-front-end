
import React from 'react'
import Signup from './Signup';
import Login from './Login';

const HomePage = (props) =>{

  return(
    <div className="">
      <h1 className="">Hello ParkingApp from React</h1>
      <Signup />
      <Login />
    </div>
  )
}

export default HomePage

/* eslint-disable */
import React from 'react'

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Login from '../components/Login/Login';

function LoginPage(){
  return(
    <div className="container-login">
      <Header/>
      <Login />
      <Footer />
    </div>
  )
}

export default LoginPage;

/* eslint-disable */
import React from 'react'

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SignUp from '../components/Signup/Signup';

const SingUp = (props) =>{
  return(
    <div className="container-signup">
      <Header/>
      <SignUp/>
      <Footer />
    </div>
  )
}

export default SingUp;

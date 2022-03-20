/* eslint-disable */
import React from 'react'

import Footer from '../components/Footer/Footer';
import Views from '../components/Views/Views';
import ParkingList from '../components/ParkingList/ParkingList';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import Signup from '../components/Signup/Signup';
import Login from '../components/Login/Login';

const HomePage = (props) =>{
  return(
    <div className="container-home">
      <Header/>
      <SearchBar />
      <Views />
      <Footer />
      <ParkingList />
      <Signup />
      <Login />
    </div>
  )
}

export default HomePage


import React from 'react'

import Footer from '../components/Footer/Footer';
import Views from '../components/Views/Views';
import ParkingList from '../components/ParkingList/ParkingList';
import Menus from '../components/Menus/Menus';
import Signup from '../components/Signup/Signup';
import Login from '../components/Login/Login';
import Cities from '../components/Cities/Cities';


const HomePage = (props) =>{
  return(
    <div className="container-home">
      <h1 className="">Hello ParkingApp from React</h1>
        <Views />
        <Footer />
        <ParkingList />
        <Signup />
        <Login />
        <Menus />
        <Cities />
    </div>
  )
}

export default HomePage

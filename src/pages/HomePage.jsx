
import React from 'react'

import Footer from '../components/Footer/Footer';
import Views from '../components/Views/Views';
import ParkingList from '../components/ParkingList/ParkingList';
import Signup from './Signup';
import Login from './Login';
import Cities from './Cities';


const HomePage = (props) =>{
  return(
    <div className="container-home">
      <h1 className="">Hello ParkingApp from React</h1>
      {/*<Views />
      <Footer />
      <ParkingList />
      <Signup />
      <Login />*/}
      <Cities />
    </div>
  )
}

export default HomePage


import React from 'react'

import Footer from '../components/Footer/Footer';
import Views from '../components/Views/Views';
import ParkingList from '../components/ParkingList/ParkingList';
import Signup from './Signup';
import Login from './Login';
import SearchDayHour from '../components/Searchdayhour/Searchdayhour';


const HomePage = (props) =>{
  return(
    <div className="container-home">
      {/*<Views />
      <Footer />
      <ParkingList />
      <Signup />
      <Login />*/}
      <SearchDayHour />
    </div>
  )
}

export default HomePage

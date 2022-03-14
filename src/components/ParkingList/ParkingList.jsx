import React from "react";
import './ParkingList.scss'
import Parking from './Parking/Parking'

const ParkingList = (props) => {
  return(
    <div className="container-park">
        <ul className="container-park__list">
          <li key={1}><Parking/></li>
          <li key={2}><Parking/></li>
          <li key={3}><Parking/></li>
          <li key={4}><Parking/></li>
          <li key={5}><Parking/></li>
          <li key={6}><Parking/></li>
          <li key={7}><Parking/></li>
          <li key={8}><Parking/></li>
          <li key={9}><Parking/></li>
        </ul>
    </div>
  )
}

export default ParkingList;

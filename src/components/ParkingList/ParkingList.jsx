/* eslint-disable */
import React from "react";
import { useState, useEffect } from "react";
import './ParkingList.scss'
import Parking from './Parking/Parking'
import { getAllParkings } from "../../services/parkings";

const ParkingList = (props) => {
  const [parkings, setParkings] = useState([]);
  useEffect(()=>{
    const fetchParkings = async () => {
      const data = await getAllParkings();
      //console.log(data);
      setParkings(data);
    }
    fetchParkings();
  },[]);

  return(
    <div className="container-park">
        <ul className="container-park__list">
          {
            parkings.map((item,idx)=>{
              return(
                <li key={idx}><Parking parkings={item}/></li>
              )
            })
          }
        </ul>
    </div>
  )
}

export default ParkingList;

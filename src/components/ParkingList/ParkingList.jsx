/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './ParkingList.scss';
import Parking from './Parking/Parking';
import { getAllParkings } from '../../services/parkings';

function ParkingList(props) {
  const { searchCity } = props;
  const [parkings, setParkings] = useState([]);
  useEffect(() => {
    const fetchParkings = async () => {
      const data = await getAllParkings();
      const filterData = data.filter((item) => item.idciudad === Number(searchCity));
      setParkings(filterData);
    };
    fetchParkings();
  }, [searchCity]);



  return (
    <div className="container-park">
      <ul className="container-park__list">
        {
          parkings.map((item, idx) => (
            <li key={idx}><Parking parkings={item} /></li>
          ))
        }
      </ul>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './ParkingList.scss';
import Parking from './Parking/Parking';
import { filteringParkingByCity } from '../../services/parkings';

function ParkingList() {
  const inputCity = useSelector((state) => state.searchCity);

  const [parkings, setParkings] = useState([]);

  useEffect(() => {
    const fetchParkings = async () => {
      const data = await filteringParkingByCity(inputCity);
      setParkings(data);
    };
    fetchParkings();
  }, [inputCity]);

  return (
    <div className="container-park">
      <ul className="container-park__list">
        {
          parkings.map((item) => (
            <li key={item.name}><Parking parkings={item} /></li>
          ))
        }
      </ul>
    </div>
  );
}

export default ParkingList;

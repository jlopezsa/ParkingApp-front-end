import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './ParkingList.scss';
import Parking from './Parking/Parking';
import { filteringParkingByCity } from '../../services/parkings';

function ParkingList(props) {
  const { searchCity } = props;
  const [parkings, setParkings] = useState([]);

  useEffect(() => {
    const fetchParkings = async () => {
      const data = await filteringParkingByCity(searchCity);
      setParkings(data);
    };
    fetchParkings();
  }, [searchCity]);

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

ParkingList.propTypes = {
  searchCity: PropTypes.string.isRequired,
};

export default ParkingList;

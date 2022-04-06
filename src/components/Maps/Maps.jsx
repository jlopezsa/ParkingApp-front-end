import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import PropTypes from 'prop-types';

import { filetringParkingByCity } from '../../services/parkings';

const containerStyle = {
  width: '100%',
  height: '100%',
};

function Maps({ searchCity }) {
  const [parkings, setParkings] = useState([]);
  const [centerCoor, setCenterCords] = useState({ lat: 4.65, long: -74.1 });

  useEffect(() => {
    const fetchParkings = async () => {
      const data = await filetringParkingByCity(searchCity);
      setParkings(data);
      if (!searchCity) {
        setCenterCords({ lat: 4.65, long: -74.1 });
      } else {
        setCenterCords({
          lat: data[0].position.latitude,
          long: data[0].position.longitude,
        });
      }
    };
    fetchParkings();
  }, [searchCity]);

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_KEY_MAPS}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: centerCoor.lat,
          lng: centerCoor.long,
        }}
        zoom={11}
      >
        { /* Child components, such as markers, info windows, etc. */}
        {
          parkings.map((item) => (
            <Marker
              key={item.addres}
              position={{
                lat: item.position.latitude,
                lng: item.position.longitude,
              }}
            />
          ))
        }
      </GoogleMap>
    </LoadScript>

  );
}

Maps.propTypes = {
  searchCity: PropTypes.string.isRequired,
};

export default React.memo(Maps);

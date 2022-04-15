import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { filteringParkingByCity } from '../../services/parkings';

const containerStyle = {
  width: '100%',
  height: '100%',
};

function Maps() {
  // eslint-disable-next-line arrow-parens
  const inputCity = useSelector(state => state.searchCity);

  const [parkings, setParkings] = useState([]);
  const [centerCoor, setCenterCords] = useState({ lat: 4.65, long: -74.1 });

  useEffect(() => {
    const fetchParkings = async () => {
      const data = await filteringParkingByCity(inputCity);
      setParkings(data);
      if (!inputCity) {
        setCenterCords({ lat: 4.65, long: -74.1 });
      } else {
        setCenterCords({
          lat: data[0].position.latitude,
          long: data[0].position.longitude,
        });
      }
    };
    fetchParkings();
  }, [inputCity]);

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

export default React.memo(Maps);

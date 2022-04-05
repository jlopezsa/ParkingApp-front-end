/* eslint-disable*/
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import { getAllParkings } from '../../services/parkings';


const containerStyle = {
  width: '100%',
  height: '100%',
};

const onLoad = (marker) => {
};

function Maps(props) {
  const { searchCity } = props;

  const [parkings, setParkings] = useState([]);
  const [centerCoor, setCenterCords] = useState({"lat":4.65, "long":-74.1});

  useEffect(() => {
    const fetchParkings = async () => {
      const data = await getAllParkings();
      const filterData = data.filter((item)=> item.city.cityName === searchCity);
      setParkings(filterData);
      if(!searchCity){
        setCenterCords({"lat":4.65, "long":-74.1})
      }else{
        setCenterCords({"lat":filterData[0].city.latitude, "long":filterData[0].city.longitude})
      }
    };
    fetchParkings();
  }, [searchCity]);


  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDZWvEAZTx1jRNYgfn8hOBiR4MTI6wE1F8"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          "lat": centerCoor.lat,
          "lng": centerCoor.long
        }}
        zoom={11}
      >
        { /* Child components, such as markers, info windows, etc. */}
        {
          parkings.map((item) => (
            <Marker key={item.id} onLoad={onLoad} position={item.coords} />
          ))
        }
      </GoogleMap>
    </LoadScript>

  );
}

export default React.memo(Maps);

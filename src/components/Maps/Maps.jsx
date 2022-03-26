/* eslint-disable*/
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { getSingleCities } from '../../services/cities';
import { getAllParkings } from '../../services/parkings';


const containerStyle = {
  width: '100%',
  height: '100%',
};

const onLoad = (marker) => {
};

function Maps(props) {
  const { searchCity } = props;
  const [city, setCity] = useState([]);
  useEffect(() => {
    const fetchCities = async () => {
      const data = await getSingleCities(Number(searchCity));
      setCity(data);
    };
    fetchCities();
  },[searchCity]);

  const [parkings, setParkings] = useState([]);
  useEffect(() => {
    const fetchParkings = async () => {
      const data = await getAllParkings();
      const filterData = data.filter((item)=> item.idciudad === Number(searchCity));
      setParkings(filterData);
    };
    fetchParkings();
  }, [searchCity]);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDZWvEAZTx1jRNYgfn8hOBiR4MTI6wE1F8"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={city.coords}
        zoom={12}
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

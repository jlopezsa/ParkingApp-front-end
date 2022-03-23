/* eslint-disable*/
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = [
  {
    lat: 4.683683,
    lng: -74.096274,
  },
  {
    lat: 6.243929,
    lng: -75.577607,
  },
  {
    lat: 10.393158,
    lng: -75.485892,
  },
];

const position = [
  {
    id: 0,
    lat: 4.632507,
    lng: -74.080506,
  },
  {
    id: 1,
    lat: 4.636181,
    lng: -74.091321,
  },
  {
    id: 2,
    lat: 4.644539,
    lng: -74.078116,
  },
  {
    id: 3,
    lat: 4.645266,
    lng: -74.092536,
  },
];

const onLoad = (marker) => {
};

function Maps() {
  return (

    <LoadScript
      googleMapsApiKey="AIzaSyDZWvEAZTx1jRNYgfn8hOBiR4MTI6wE1F8
        "
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center[0]}
        zoom={12}
      >
        { /* Child components, such as markers, info windows, etc. */}
        {
          position.map((item) => (
            <Marker key={item.id} onLoad={onLoad} position={item} />
          ))
        }
      </GoogleMap>
    </LoadScript>

  );
}

export default React.memo(Maps);

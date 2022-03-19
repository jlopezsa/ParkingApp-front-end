import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

/* const containerStyle = {
  width: '240px',
  height: '150px',
}; */

const center = {
  lat: 4.683683,
  lng: -74.096274,
};

const position = {
  lat: 4.7,
  lng: -74.2,
};

const onLoad = (marker) => {
  console.log('marker: ', marker);
  console.log('ancho = ', window.innerWidth);
};

const sizeMap = () => {
  if (window.screen.width < 1440) {
    return {
      width: '440px',
      height: '250px',
    };
  }
  return {
    width: '800px',
    height: '910px',
  };
};

function Maps() {
  return (

    <LoadScript
      googleMapsApiKey="AIzaSyDZWvEAZTx1jRNYgfn8hOBiR4MTI6wE1F8
        "
    >
      <GoogleMap
        mapContainerStyle={sizeMap()}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */}
        <Marker
          onLoad={onLoad}
          position={position}
        />
      </GoogleMap>
    </LoadScript>

  );
}

export default React.memo(Maps);

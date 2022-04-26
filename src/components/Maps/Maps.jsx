import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

function Maps() {
  const parkings = useSelector((state) => state.parkingsFiltered);
  const targetParking = useSelector((state) => state.targetPosition);

  const [centerCoor, setCenterCords] = useState({ lat: 4.65, long: -74.1 });

  useEffect(() => {
    if (parkings.length === 0) {
      setCenterCords({ lat: 4.65, long: -74.1 });
    } else {
      setCenterCords({
        lat: parkings[0].position.latitude,
        long: parkings[0].position.longitude,
      });
    }
  }, [parkings]);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_KEY_MAPS}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: centerCoor.lat,
          lng: centerCoor.long,
        }}
        zoom={12}
      >
        { /* Child components, such as markers, info windows, etc. */}
        {
          parkings.map((item) => (
            <>
              <Marker
                key={item.addres}
                position={{
                  lat: item.position.latitude,
                  lng: item.position.longitude,
                }}
              />
              <Marker
                icon={{
                  path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
                  fillColor: '#00ff0d',
                  fillOpacity: 0.9,
                  scale: 1.1,
                  strokeColor: 'green',
                  strokeWeight: 4,
                }}
                position={{
                  lat: targetParking.latitude,
                  lng: targetParking.longitude,
                }}
              />

            </>
          ))
        }
      </GoogleMap>
    </LoadScript>

  );
}

export default React.memo(Maps);

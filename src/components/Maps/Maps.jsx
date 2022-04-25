import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

function Maps() {
  const parkings = useSelector((state) => state.parkingsFiltered);

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
                  path: 'M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z',
                  fillColor: 'green',
                  fillOpacity: 0.9,
                  scale: 2,
                  strokeColor: 'gold',
                  strokeWeight: 2,
                }}
                position={{
                  lat: item.position.latitude,
                  lng: item.position.longitude,
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

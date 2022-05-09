import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GoogleMap, LoadScript, Marker, InfoBox } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

function Maps() {
  const parkings = useSelector((state) => state.parkingsFiltered);
  const targetParking = useSelector((state) => state.targetPosition);

  const [centerCoor, setCenterCords] = useState({});
  const [coordParking, setCoordParking] = useState({});

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;

    setCenterCords({
      ...centerCoor,
      lat: crd.latitude,
      long: crd.longitude,
    });
  }

  useEffect(() => {
    if (parkings.length !== 0) {
      setCenterCords({
        lat: parkings[0].position.latitude,
        long: parkings[0].position.longitude,
      });
    } else {
      navigator.geolocation.getCurrentPosition(success, () => {}, options);
    }
  }, [parkings]);

  const onMouseOver = (e) => {
    const nameParking = parkings.find((item) => item.position.latitude === e.latLng.lat());
    setCoordParking({
      name: nameParking.name,
      latitude: e.latLng.lat(),
      longitude: e.latLng.lng(),
    });
  };

  const onMouseOut = () => {
    setCoordParking({
      name: '',
      latitude: 0,
      longitude: 0,
    });
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_KEY_MAPS}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: centerCoor.lat,
          lng: centerCoor.long,
        }}
        zoom={14}
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
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
            />
          ))
        }
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
        <InfoBox
          position={{
            lat: targetParking.latitude,
            lng: targetParking.longitude,
          }}
          options={{
            boxStyle: {
              width: 'auto',
            },
          }}
        >
          <div style={{ background: '#90E0EF', border: '1px solid #ccc', padding: 15 }}>
            <div style={{ fontSize: 16, fontColor: '#08233B' }}>
              {targetParking.name}
            </div>
          </div>
        </InfoBox>
        {
            Object.keys(coordParking).length
              ? (
                <InfoBox
                  position={{
                    lat: coordParking.latitude,
                    lng: coordParking.longitude,
                  }}
                  options={{
                    boxStyle: {
                      width: 'auto',
                    },
                  }}
                >
                  <div style={{ background: '#90E0EF', border: '1px solid #ccc', padding: 15 }}>
                    <div style={{ fontSize: 16, fontColor: '#08233B' }}>
                      <p>{coordParking.name}</p>
                    </div>
                  </div>
                </InfoBox>
              )
              : <div />
          }
      </GoogleMap>
    </LoadScript>

  );
}

export default React.memo(Maps);

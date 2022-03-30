import React from 'react';

function BookingSummary() {
  return (
    <div className="container-booksum">
      <h1>Parqueadero</h1>
      <div className="container-booksum--image">
        <p>image</p>
      </div>
      <div className="container-booksum--infoParking">
        <h5>Parking Name</h5>
        <p>Parking addres</p>
        <p>Parking value</p>
      </div>
      <div className="container-booksum--summary">
        <p>Input data and hour</p>
        <p>Output data and hour</p>
        <p>Total value</p>
      </div>

    </div>
  );
}

export default BookingSummary;

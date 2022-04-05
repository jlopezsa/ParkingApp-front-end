import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Parking.scss';
import '../../../pages/Booking';

const figParking = require('../../../figures/parking_reserva.png');

function Parking({ parkings }) {
  return (
    <div className="container-parking">
      <div className="container-parking__imagen">
        <img className="parking__imagen" src={figParking} alt="" />
      </div>
      <div className="container-parking__data">
        <h5>{parkings.name}</h5>
        <p>{parkings.addres}</p>
        <p>{parkings.city.cityName}</p>
        <div className="container-parking__data--qualy">
          <p>starts</p>
          <p>{parkings.mean}</p>
        </div>
      </div>
      <div className="container-parking__value">
        <p>Tarifa</p>
        <p>
          $
          {parkings.value}
        </p>
        <div className="parking-bottom">
          <button type="submit">
            <Link id="booking-page" to="/Booking">RESERVAR</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

Parking.propTypes = {
  parkings: PropTypes.shape({
    name: PropTypes.string.isRequired,
    addres: PropTypes.string.isRequired,
    mean: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    city: PropTypes.shape({
      cityName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Parking;

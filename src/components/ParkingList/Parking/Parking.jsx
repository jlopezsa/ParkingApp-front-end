import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Parking.scss';
import '../../../pages/Booking';
import { useDispatch } from 'react-redux';
import { bookingParking } from '../../../store/actions';

const figParking = require('../../../figures/parking_reserva.png');

function Parking({ parkings }) {
  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(bookingParking(parkings));
  };

  const handleMouseOver = () => {
    console.log(parkings.position.latitude);
    console.log(parkings.position.longitude);
  };
  const handleOnFocus = () => {
    console.log('fuera');
  };

  return (
    // eslint-disable-next-line no-void
    <div className="container-parking" onMouseOver={handleMouseOver} onFocus={handleOnFocus}>
      <div className="container-parking__imagen">
        <img className="parking__imagen" src={figParking} alt="" />
      </div>
      <div className="container-parking__data">
        <h5>{parkings.name}</h5>
        <p>{parkings.addres}</p>
        <p>{parkings.cityName}</p>
        <div className="container-parking__data--qualy">
          <p>starts</p>
          <p>{parkings.totalPlaces}</p>
        </div>
      </div>
      <div className="container-parking__value">
        <p>Tarifa</p>
        <p>
          $
          {parkings.hourValue}
        </p>
        <div className="parking-bottom">
          <button type="submit">
            <Link id="booking-page" to="/Booking" onClick={handlerClick}>RESERVAR</Link>
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
    hourValue: PropTypes.number.isRequired,
    totalPlaces: PropTypes.number.isRequired,
    cityName: PropTypes.string.isRequired,
    position: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Parking;

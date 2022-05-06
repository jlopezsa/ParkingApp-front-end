import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Parking.scss';
import '../../../pages/Booking';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { bookingParking, targetParkingPosition } from '../../../store/actions';

const token = localStorage.getItem('token');

function Parking({ parkings }) {
  const dispatch = useDispatch();

  const handlerClick = () => {
    if (token) {
      dispatch(bookingParking(parkings));
    } else {
      Swal.fire({
        title: 'Autenticación requerida',
        text: 'Por favor realizar Login para proceder con su reserva ...!',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/LogIn';
        }
      });
    }
  };

  const handleMouseOver = () => {
    const targetPosition = {
      name: parkings.name,
      latitude: parkings.position.latitude,
      longitude: parkings.position.longitude,
    };
    dispatch(targetParkingPosition(targetPosition));
  };

  const handleMouseOut = () => {
    const targetPosition = {
      latitude: 0,
      longitude: 0,
    };
    dispatch(targetParkingPosition(targetPosition));
  };

  const handleOnFocus = () => {
    const targetPosition = {
      latitude: 0,
      longitude: 0,
    };
    dispatch(targetParkingPosition(targetPosition));
  };
  const handleOnBlur = () => {
    const targetPosition = {
      latitude: 0,
      longitude: 0,
    };
    dispatch(targetParkingPosition(targetPosition));
  };

  return (
    // eslint-disable-next-line no-void
    <div className="container-parking" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onBlur={handleOnBlur} onFocus={handleOnFocus}>
      <div className="container-parking__imagen">
        <img className="parking__imagen" src={parkings.image !== undefined ? parkings.image : 'http://res.cloudinary.com/parkingapp/image/upload/v1651723718/eedyt2haqfvu0miqcxd4.png'} alt="" />
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
    image: PropTypes.string,
    position: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Parking;

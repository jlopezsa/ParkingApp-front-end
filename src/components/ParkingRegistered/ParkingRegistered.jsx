import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { deleteParking } from '../../services/parkings';
import './ParkingRegistered.scss';

function ParkingRegistered(props) {
  // eslint-disable-next-line react/prop-types
  const { parkingsAdmin, onChangeIsDeleted } = props;

  const fetchDeleteParking = async (idParking) => {
    await deleteParking(idParking);
    onChangeIsDeleted(true);
  };

  const handlerClick = () => {
    // eslint-disable-next-line no-underscore-dangle
    const response = fetchDeleteParking(parkingsAdmin._id);
    console.log('RESPONSE: ', response);
    if (response.status === 401) {
      Swal.fire({
        icon: 'error',
        title: 'Algo salió mal',
        text: 'Usuario o contraseña no válida...',
      });
    } else {
      Swal.fire(
        'Parqueadero eliminaddo',
        'Parqueadero fue eliminado corréctamente...!',
        'success',
      );
    }
  };
  return (
    <div className="contParkReg">
      <div className="contParkReg__figure">
        <img
          className="contParkReg__figure--img"
          src={parkingsAdmin.image !== undefined ? parkingsAdmin.image : 'http://res.cloudinary.com/parkingapp/image/upload/v1651723718/eedyt2haqfvu0miqcxd4.png'}
          alt="parkingFigure"
        />
      </div>
      <div className="contParkReg__information">
        <div className="contParkReg__information--qualify">
          Calificación y média
        </div>
        <div>
          <h2>{parkingsAdmin.name}</h2>
        </div>
        <div className="contParkReg__information--data">
          <p id="contParkReg-p__fixed">
            Dirección:
          </p>
          <p id="contParkReg-p__varible">
            {parkingsAdmin.addres}
          </p>
        </div>
        <div className="contParkReg__information--data">
          <p id="contParkReg-p__fixed">
            Ciudad:
          </p>
          <p id="contParkReg-p__varible">
            {parkingsAdmin.cityName}
          </p>
        </div>
        <div className="contParkReg__information--data">
          <p id="contParkReg-p__fixed">
            Tarifa:
          </p>
          <p id="contParkReg-p__varible">
            {parkingsAdmin.hourValue}
          </p>
        </div>
        <div className="contParkReg__information--data">
          <p id="contParkReg-p__fixed">
            Hora de apertura:
          </p>
          <p id="contParkReg-p__varible">
            {parkingsAdmin.openTime}
          </p>
        </div>
        <div className="contParkReg__information--data">
          <p id="contParkReg-p__fixed">
            Hora de cierre:
          </p>
          <p id="contParkReg-p__varible">
            {parkingsAdmin.closeTime}
          </p>
        </div>
        <div className="contParkReg__information--data">
          <p id="contParkReg-p__fixed">
            Total de cupos:
          </p>
          <p id="contParkReg-p__varible">
            {parkingsAdmin.totalPlaces}
          </p>
        </div>
        <div className="contParkReg__information--data">
          <p id="contParkReg-p__fixed">
            Cupos usados:
          </p>
          <p id="contParkReg-p__varible">
            {parkingsAdmin.busyPlaces}
          </p>
        </div>
        <div className="contParkReg__information--data">
          <p id="contParkReg-p__fixed">
            Cupos libres:
          </p>
          <p id="contParkReg-p__varible">
            {parkingsAdmin.totalPlaces - parkingsAdmin.busyPlaces}
          </p>
        </div>
      </div>
      <div className="contParkReg__buttons">
        <div>
          <button type="submit">
            <Link id="booking-page" to="/">Editar</Link>
          </button>
        </div>
        <div>
          <button type="submit" onClick={handlerClick}>
            Eliminar
            {/* <Link id="booking-page" >Eliminar</Link> */}
          </button>
        </div>
      </div>
    </div>
  );
}

ParkingRegistered.propTypes = {
  parkingsAdmin: PropTypes.shape({
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    addres: PropTypes.string.isRequired,
    hourValue: PropTypes.number.isRequired,
    totalPlaces: PropTypes.number.isRequired,
    cityName: PropTypes.string.isRequired,
    openTime: PropTypes.string.isRequired,
    closeTime: PropTypes.string.isRequired,
    busyPlaces: PropTypes.number.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default ParkingRegistered;

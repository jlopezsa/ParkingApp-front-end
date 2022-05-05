/* eslint-disable */
import { Link } from 'react-router-dom';
import { deleteParking } from '../../services/parkings';
import './ParkingRegistered.scss';

function ParkingRegistered({ parkingsAdmin }) {

  const fetchDeleteParking = async (idParking) => {
    const isDelete = await deleteParking(idParking);
  }

  const handlerClick = () => {
    fetchDeleteParking(parkingsAdmin._id);
  }
  console.log('PARKREGISTERED: ', parkingsAdmin.image)
  return (
    <div className="contParkReg">
      <div className="contParkReg__figure">
        <img
          className="contParkReg__figure--img"
          src={parkingsAdmin.image !== undefined ? parkingsAdmin.image : 'http://res.cloudinary.com/parkingapp/image/upload/v1651723718/eedyt2haqfvu0miqcxd4.png' }
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
          <button type="submit" onClick={handlerClick} >
            Eliminar
            {/*<Link id="booking-page" >Eliminar</Link>*/}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ParkingRegistered;

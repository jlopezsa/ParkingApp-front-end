import React, { useEffect } from 'react';
import './Booking.scss';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import PaymentsMethod from '../components/PaymentsMethod/PaymentsMethod';
import { bookingDateHour } from '../store/actions';

function Booking() {
  const dispatch = useDispatch();

  const parking = useSelector((state) => state.bookingParking);
  const dateHour = useSelector((state) => state.bookingInfo);

  const calculateValue = () => {
    const fecha1 = moment(`${dateHour.startDate} ${dateHour.startTime}`, 'YYYY-MM-DD HH:mm');
    const fecha2 = moment(`${dateHour.endDate} ${dateHour.endTime}`, 'YYYY-MM-DD HH:mm');
    const diff = fecha2.diff(fecha1, 'h'); // Diff in hours
    return diff;
  };

  useEffect(() => {
    const diffData = calculateValue();
    dispatch(bookingDateHour(
      {
        ...dateHour,
        valueBooking: (diffData * parking.hourValue),
      },
    ));
  }, []);

  return (
    <div className="container-booking">
      <Header />
      <div className="booking-body">
        <div className="booking-body__account">
          <h5>Información de cuenta</h5>
          <p>Registrado como: jhondoe@gmail.com</p>
          <p id="p_exit">Salir</p>
        </div>
        <div className="booking-body__aditional">
          <h5>Informaciones adicionales</h5>
          <div className="booking-body__aditional--inputs">
            <input id="contact_phone" type="tel" name="contactPhone" placeholder="Telefono" />
            <input id="placa_carro" type="input" name="placaCarro" placeholder="Placa del vehículo" />
            <textarea id="comments" type="input" name="userComments" placeholder="Observaciones adicionales" />
            <button id="buttonContinue" type="button">Continuar</button>
          </div>
        </div>
        <div className="booking-body__pay">
          <h5>Detalles del pago</h5>
          <p>
            Costo total de la reserva:
            <strong>
              {' COP '}
              {calculateValue() * parking.hourValue}
            </strong>
          </p>
          <div>
            <PaymentsMethod />
          </div>
        </div>
        <div className="booking-body__summary">
          <h1>Resumen de la reserva</h1>
          <div className="booking-body__summary--imagen">
            <img className="parking__imagen" src="https://d500.epimg.net/cincodias/imagenes/2020/01/22/lifestyle/1579693137_705498_1579693193_noticia_normal.jpg" alt="" />
          </div>
          <div className="booking-body__summary--infoParking">
            <h5>{ parking.name }</h5>
            <p>
              Dirección:
              {' '}
              <strong>{ parking.addres }</strong>
            </p>
            <p>
              Tarifa:
              {' COP '}
              <strong>
                {parking.hourValue}
                {' '}
                x hora
              </strong>
            </p>
          </div>
          <div className="booking-body__summary--summary">
            <h5>Información de la reserva</h5>
            <p>
              Fecha y hora de entrada:
              {' '}
              <strong>{dateHour.startDate}</strong>
              {' / '}
              <strong>{dateHour.startTime}</strong>
            </p>
            <p>
              Fecha y hora de salida:
              {' '}
              <strong>{dateHour.endDate}</strong>
              {' / '}
              <strong>{dateHour.endTime}</strong>
            </p>
            <p>
              Horas de la reserva:
              {' '}
              <strong>
                {calculateValue()}
                {' '}
                hora(s)
              </strong>
            </p>
            <p>
              Costo total de la reserva:
              {' '}
              COP
              {' '}
              <strong>{calculateValue() * parking.hourValue}</strong>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Booking;

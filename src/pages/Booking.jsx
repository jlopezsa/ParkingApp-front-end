import React from 'react';
import './Booking.scss';

import { useSelector } from 'react-redux';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import PaymentsMethod from '../components/PaymentsMethod/PaymentsMethod';

function Booking() {
  const parking = useSelector((state) => state.bookingParking);
  const dateHour = useSelector((state) => state.bookingInfo);

  const calculateValue = () => {
    const start = new Date(`${dateHour.startDate}, ${dateHour.startTime}`);
    const end = new Date(`${dateHour.endDate}, ${dateHour.endTime}`);
    const difference = Math.abs(start - end);
    const days = difference / (1000 * 3600 * 24);
    // const fecha1 = moment('2016-09-30 07:30:00', 'YYYY-MM-DD HH:mm:ss');
    // const fecha2 = moment('2016-10-03 07:30:00', 'YYYY-MM-DD HH:mm:ss');

    // const diff = fecha2.diff(fecha1, 'h'); // Diff in hours
    // console.log(diff);
    return (
      <div>
        <p>
          Valor de la reserva:
          {' '}
          {days}
        </p>
      </div>
    );
  };

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
            {' '}
            {3500}
            {' '}
            pesos
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
            <p>{ parking.addres}</p>
            <p>
              Tarifa:
              $
              {parking.hourValue}
              {' '}
              x hora
            </p>
          </div>
          <div className="booking-body__summary--summary">
            <h5>Información de la reserva</h5>
            <p>
              Fecha y hora de entrada:
              {' '}
              {dateHour.startDate}
              {' / '}
              {dateHour.startTime}
            </p>
            <p>
              Fecha y hora de salida:
              {' '}
              {dateHour.endDate}
              {' / '}
              {dateHour.endTime}
            </p>
            {calculateValue()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Booking;

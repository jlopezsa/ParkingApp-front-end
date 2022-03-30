import React from 'react';
import BookingSummary from '../components/BookingSummary/BookingSummary';
import './Booking.scss';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

function Booking() {
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
            <input id="contact_phone" type="tel" name="contactPhone" value="Telefono" />
            <input id="placa_carro" type="input" name="placaCarro" value="Placa del vehículo" />
            <textarea id="comments" type="input" name="userComments" value="Observaciones adicionales" />
          </div>
        </div>
        <div className="booking-body__pay">
          <h5>Detalles del pago</h5>
        </div>
        <div className="booking-body__summary">
          <BookingSummary />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Booking;

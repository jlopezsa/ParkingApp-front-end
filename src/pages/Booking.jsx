import React from 'react';
import './Booking.scss';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import cashIcon from '../figures/cash_icon.svg';
import cardIcon from '../figures/card_icon.svg';

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
          <div className="booking-body__pay-methods">
            <p>Métodos de pago</p>
            <div className="pay-methods">
              <img src={cashIcon} alt="cash icon" className="imagenPay" />
              <img src={cardIcon} alt="card icon" className="imagenPay" />
            </div>
          </div>
        </div>
        <div className="booking-body__summary">
          <h1>Resumen de la reserva</h1>
          <div className="booking-body__summary--imagen">
            <img className="parking__imagen" src="https://d500.epimg.net/cincodias/imagenes/2020/01/22/lifestyle/1579693137_705498_1579693193_noticia_normal.jpg" alt="" />
          </div>
          <div className="booking-body__summary--infoParking">
            <h5>La sucursal</h5>
            <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
            <p>Tarifa: $2500 x hora</p>
          </div>
          <div className="booking-body__summary--summary">
            <h5>Información de la reserva</h5>
            <p>Fecha y hora de entrada: </p>
            <p>Fecha y hora de salida: </p>
            <p>Valor total: </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Booking;

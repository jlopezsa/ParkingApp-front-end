/* eslint-disable */
import React from "react";
import './Parking.scss'

const Parking = (props) => {
  const {parkings} = props;
  return(
    <div className="container-parking">
      <div className="container-parking__imagen">
        <img className="parking__imagen" src={require('../../../figures/parking_reserva.png')} alt="" />
      </div>
      <div className="container-parking__data">
        <h5>{parkings.name}</h5>
        <p>{parkings.addres}</p>
        <p>{parkings.idciudad}</p>
        <div className="container-parking__data--qualy">
          <p>starts</p>
          <p>{parkings.mean}</p>
        </div>
      </div>
      <div className="container-parking__value">
        <p>Tarifa</p>
        <p>${parkings.value}</p>
        <div  className="parking-bottom">
          <button>
            RESERVAR
          </button>
        </div>
      </div>
    </div>
  )
}

export default Parking;

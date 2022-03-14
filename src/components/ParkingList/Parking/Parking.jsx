import React from "react";
import './Parking.scss'

const Parking = (props) => {
  return(
    <div className="container-parking">
      <div className="container-parking__imagen">
        <img className="parking__imagen" src={require('../../../figures/parking_reserva.png')} alt="" />
      </div>
      <div className="container-parking__data">
        <h5>Nombre</h5>
        <p>Dirección</p>
        <p>Barrio</p>
        <div className="container-parking__data--qualy">
          <p>starts</p>
          <p>meam</p>
        </div>
      </div>
      <div className="container-parking__value">
        <p>Tarifa</p>
        <p>$2500</p>
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

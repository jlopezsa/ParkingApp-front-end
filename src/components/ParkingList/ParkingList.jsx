import React from "react";
import './ParkingList.scss'
import Parking from './Parking/Parking'

const parkings = [
  {
    "imagePath": '../../../figures/parking_reserva.png',
    "name": "Parq. Sur1",
    "addres": "Calle 80",
    "barrio": "Engativa",
    "mean": 4.5,
    "value": 2500
  },
  {
    "imagePath": '../../../figures/parking_reserva.png',
    "name": "Parq. Sur2",
    "addres": "Calle 80",
    "barrio": "Engativa",
    "mean": 4.5,
    "value": 2500
  },
  {
    "imagePath": '../../figures/parking_reserva.png',
    "name": "Parq. SurA",
    "addres": "Calle 80",
    "barrio": "Engativa",
    "mean": 4.5,
    "value": 2500
  },
  {
    "imagePath": '../../figures/parking_reserva.png',
    "name": "Parq. SurB",
    "addres": "Calle 80",
    "barrio": "Engativa",
    "mean": 4.5,
    "value": 2500
  },
  {
    "imagePath": '../../figures/parking_reserva.png',
    "name": "Parq. SurC",
    "addres": "Calle 80",
    "barrio": "Engativa",
    "mean": 4.5,
    "value": 2500
  },
  {
    "imagePath": '../../figures/parking_reserva.png',
    "name": "Parq. SurX",
    "addres": "Calle 80",
    "barrio": "Engativa",
    "mean": 4.5,
    "value": 2500
  }
]

const ParkingList = (props) => {
  return(
    <div className="container-park">
        <ul className="container-park__list">
          {
            parkings.map((item,idx)=>{
              return(
                <li key={idx}><Parking parkings={item}/></li>
              )
            })
          }
        </ul>
    </div>
  )
}

export default ParkingList;

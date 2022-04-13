import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ParkingRegistered from '../components/ParkingRegistered/ParkingRegistered';
import SessionSettings from '../components/SessionSettings/SessionSettings';
import './AdminPage.scss';
import './CreateParkingsPage';

function AdminPage() {
  const parkingsAdmin = [
    {
      name: 'SECOND UPDATE',
      cityName: 'BOGOTÁ',
      addres: 'cl. 90 #17-45',
      phone: 315901745,
      openTime: '6h00m',
      closeTime: '19h00m',
      hourValue: 4250,
      totalPlaces: 60,
      busyPlaces: 0,
    },
    {
      name: 'PARQUEADERO VER',
      cityName: 'CALI',
      addres: 'cra. 6 #13104',
      phone: 3016013104,
      openTime: '6h00m',
      closeTime: '22h00m',
      hourValue: 3200,
      totalPlaces: 80,
      busyPlaces: 0,
    },
    {
      name: 'PARQUEADERO PUBLICO',
      cityName: 'CALI',
      addres: 'cra. 4 #13-84',
      phone: 3015401384,
      openTime: '6h00m',
      closeTime: '20h00m',
      hourValue: 3100,
      totalPlaces: 20,
      busyPlaces: 8,
    },
    {
      name: 'PARQUEADERO PLAZOLETA CENTRAL',
      cityName: 'CALI',
      addres: 'cra. 3 ##10-36',
      phone: 3015031036,
      openTime: '6h00m',
      closeTime: '22h00m',
      hourValue: 3000,
      totalPlaces: 100,
      busyPlaces: 0,
    },
    {
      name: 'PARQUEADERO PÚBLICO KR52',
      cityName: 'MEDELLÍN',
      addres: 'cra 52 #40-30',
      phone: 3135524030,
      openTime: '8h00m',
      closeTime: '20h00m',
      hourValue: 4100,
      totalPlaces: 75,
      busyPlaces: 0,
    },
  ];
  return (
    <div>
      <Header />
      <div className="container-admin">
        <div className="container-admin__settings">
          <SessionSettings />
        </div>
        <div className="container-admin__list">
          <div className="container-admin__list--header">
            <p id="container-admin_p1">Parqueaderos registrados:</p>
            <Link id="container-admin_p2" to="/CreateParkingsPage">Registrar nuevo parqueadero?</Link>
          </div>
          <div className="container-admin__list--parkings">
            <ul className="container-admin__list--parkings-scroll">
              {
                parkingsAdmin.map((item) => (
                  <li key={item.name}><ParkingRegistered parkingsAdmin={item} /></li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminPage;

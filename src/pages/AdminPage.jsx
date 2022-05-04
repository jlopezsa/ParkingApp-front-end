import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ParkingRegistered from '../components/ParkingRegistered/ParkingRegistered';
import SessionSettings from '../components/SessionSettings/SessionSettings';
import { getAllParkingsByAdmin } from '../services/parkings';
import './AdminPage.scss';
import './CreateParkingsPage';

function AdminPage() {
  const [parkingsAdmin, setParkingsAdmin] = useState([]);

  useEffect(() => {
    const fetchParkings = async () => {
      const data = await getAllParkingsByAdmin();
      setParkingsAdmin(data);
    };
    fetchParkings();
  }, []);

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
                parkingsAdmin.length !== 0
                  ? parkingsAdmin.map((item) => (
                    <li key={item.addres}><ParkingRegistered parkingsAdmin={item} /></li>
                  ))
                  : <h2 style={{ textAlign: 'center' }}>No hay parqueaderos registrados</h2>
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

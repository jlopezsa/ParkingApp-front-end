import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ParkingRegistered from '../components/ParkingRegistered/ParkingRegistered';
import SessionSettings from '../components/SessionSettings/SessionSettings';
import { getAllParkings } from '../services/parkings';
import './AdminPage.scss';
import './CreateParkingsPage';

function AdminPage() {
  const idAdmin = '624b3301f6c91597a24d6c21';
  const [parkingsAdmin, setParkingsAdmin] = useState([]);

  useEffect(() => {
    const fetchParkings = async () => {
      const data = await getAllParkings();
      const dataAdmin = data.filter((item) => item.user === idAdmin);
      setParkingsAdmin(dataAdmin);
    };
    fetchParkings();
  }, [parkingsAdmin]);

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

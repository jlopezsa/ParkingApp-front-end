import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ParkingRegistered from '../components/ParkingRegistered/ParkingRegistered';
import SessionSettings from '../components/SessionSettings/SessionSettings';
import './AdminPage.scss';
import './CreateParkingsPage';

function AdminPage() {
  return (
    <div className="container-admin">
      <Header />
      <h1>
        Admin Page
      </h1>
      <Link to="/CreateParkingsPage">CREAR PARQUEADERO</Link>
      <SessionSettings />
      <ParkingRegistered />
      <Footer />
    </div>
  );
}

export default AdminPage;

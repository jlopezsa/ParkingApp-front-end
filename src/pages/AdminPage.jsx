import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SessionSettings from '../components/SessionSettings/SessionSettings';
import './AdminPage.scss';

function AdminPage() {
  return (
    <div className="container-admin">
      <Header />
      <h1>
        Admin Page
      </h1>
      <SessionSettings />
      <Footer />
    </div>
  );
}

export default AdminPage;

/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ParkingRegistered from '../components/ParkingRegistered/ParkingRegistered';
import SessionSettings from '../components/SessionSettings/SessionSettings';
import { getAllParkingsByAdmin } from '../services/parkings';
// import { filteringUserByEmail } from '../services/users';
// import { saveAdminData } from '../store/actions';
import './AdminPage.scss';
import './CreateParkingsPage';

function AdminPage() {
  const dispatch = useDispatch();
  const [parkingsAdmin, setParkingsAdmin] = useState([]);
  const [adminToken, setAdminToken] = useState({});
  const [idAdmin, setIdAdmin] = useState('');
  const token = localStorage.getItem('token');

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const adminReg = await filteringUserByEmail(adminToken.email);
  //     console.log('ADMIN : ', adminReg);
  //     dispatch(saveAdminData(adminReg));
  //     setIdAdmin(adminReg._id);
  //   };
  //   // setAdminToken(jwtDecode(token));
  //   fetchUser();
  // }, []);

  useEffect(() => {
    const fetchParkings = async () => {
      const data = await getAllParkingsByAdmin();
      // const dataAdmin = data.filter((item) => item.user === idAdmin);
      setParkingsAdmin(data);
    };
    fetchParkings();
  }, []);

  return (
    <div>
      <Header />
      <div className="container-admin">
        <div className="container-admin__settings">
          <SessionSettings adminToken={adminToken} />
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
                  <li key={item.addres}><ParkingRegistered parkingsAdmin={item} /></li>
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

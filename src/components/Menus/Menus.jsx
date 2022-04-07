/* eslint-disable */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import SignupPage from '../../pages/sign-up';
import City from '../../pages/City';
import Search from '../../pages/Search';
import LoginPage from '../../pages/Login';
<<<<<<< HEAD
import CreateParkings from '../../pages/CreateParkingsPage';
=======
import Booking from '../../pages/Booking';
>>>>>>> develop
import './Menus.scss';
import NavBar from '../NavBar/NavBar';

function Menus() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LogUp" element={<SignupPage />} />
        <Route path="/LogIn" element={<LoginPage />} />
        <Route path="/Cities" element={<City />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Menus;

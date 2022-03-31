import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import SignupPage from '../../pages/sign-up';
import City from '../../pages/City';
import Search from '../../pages/Search';
import LoginPage from '../../pages/Login';
import CreateParkings from '../../pages/CreateParkings';
import './Menus.scss';

function Menus() {
  return (
    <BrowserRouter>
      <nav className="container-menu">
        <ul className="container-menu__list">
          <li><NavLink className="menu__list--inactive" to="/">Mi cuenta</NavLink></li>
          <li><NavLink className="menu__list--inactive" to="/createParking">Crear parqueaderos</NavLink></li>
          <li><NavLink className="menu__list--inactive" to="/LogIn">Ingresar</NavLink></li>
          <li><NavLink className="menu__list--inactive" to="/LogUp">Registrar</NavLink></li>
          <li><NavLink className="menu__list--inactive" to="/Cities">Ciudades</NavLink></li>
          <li><NavLink className="menu__list--inactive" to="/Search">Busqueda</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LogUp" element={<SignupPage />} />
        <Route path="/LogIn" element={<LoginPage />} />
        <Route path="/Cities" element={<City />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/createParking" element={<CreateParkings />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Menus;

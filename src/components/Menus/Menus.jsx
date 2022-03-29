/* eslint-disable */
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
// import { slide as Menu } from 'react-burger-menu'
import HomePage from '../../pages/HomePage';
import SignupPage from '../../pages/sign-up';
import City from '../../pages/City';
import Search from '../../pages/Search';
import LoginPage from '../../pages/Login';
import './Menus.scss';

function Menus() {
  return (
    <BrowserRouter>
      <nav className="container-menu">
        <ul className="container-menu__list">
          <li><NavLink className="menu__list--inactive" to="/">Mi cuenta</NavLink></li>
          <li><NavLink className="menu__list--inactive" to="/LogIn">Ingresar</NavLink></li>
          <li><NavLink className="menu__list--inactive" to="/LogUp">Registrar</NavLink></li>
          <li><NavLink className="menu__list--inactive" to="/Cities">Ciudades</NavLink></li>
          <li><NavLink className="menu__list--inactive" to="/Search">Busqueda</NavLink></li>
        </ul>
      </nav>

      <input type="checkbox" id="hamburger-input" className="burger-shower" />
      <label id="hamburger-menu" htmlFor="hamburger-input">
        <nav id="sidebar-menu">
          <h3>Menu</h3>
          <ul className="hamburguer-menu__list">
            <li><NavLink className="hamburguer__list--inactive" to="/">Mi cuenta</NavLink></li>
            <li><NavLink className="hamburguer__list--inactive" to="/LogIn">Ingresar</NavLink></li>
            <li><NavLink className="hamburguer__list--inactive" to="/LogUp">Registrar</NavLink></li>
            <li><NavLink className="hamburguer__list--inactive" to="/Cities">Ciudades</NavLink></li>
            <li><NavLink className="hamburguer__list--inactive" to="/Search">Busqueda</NavLink></li>
          </ul>
        </nav>
      </label>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LogUp" element={<SignupPage />} />
        <Route path="/LogIn" element={<LoginPage />} />
        <Route path="/Cities" element={<City />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Menus;

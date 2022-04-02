/* eslint-disable jsx-a11y/label-has-associated-control */
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  return (
    <div className="container-navbar">
      <nav className="container-menu">
        <ul className="container-menu__list">
          <li><NavLink className="menu__list--inactive" to="/">Mi cuenta</NavLink></li>
          <li><NavLink className="menu__list--inactive" to="/LogIn">Ingresar</NavLink></li>
          <li><NavLink className="menu__list--inactive" to="/LogUp">Registrar</NavLink></li>
          <li><NavLink className="menu__list--inactive" to="/Cities">Ciudades</NavLink></li>
          <li><NavLink className="menu__list--inactive" to="/Search">Busqueda</NavLink></li>
        </ul>
      </nav>

      <input className="burger-shower" type="checkbox" id="hamburger-input" />
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
    </div>
  );
}

export default NavBar;

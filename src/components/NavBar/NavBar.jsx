/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  const profile = useSelector((state) => state.userData);
  const [roleAccess, setRoleAccess] = useState('user');

  const checkRole = (pf) => {
    if (Object.keys(pf).length === 0) {
      const roleUser = 'user';
      setRoleAccess(roleUser);
    } else {
      const roleUser = pf.profile.role;
      setRoleAccess(roleUser);
    }
  };

  useEffect(() => {
    checkRole(profile);
  }, [profile]);

  return (
    <div>
      <nav className="container-menu">
        <ul className="container-menu__list">
          <li><NavLink className="menu__list--inactive" to="/">Home</NavLink></li>
          {roleAccess === 'admin' ? <li><NavLink className="menu__list--inactive" to="/AdminPage">Admin</NavLink></li> : null}
          <li><NavLink data-cy="click_login_link" className="menu__list--inactive" to="/LogIn">Ingresar</NavLink></li>
          <li><NavLink className="menu__list--inactive" to="/LogUp">Registrar</NavLink></li>
          <li><NavLink className="menu__list--inactive" to="/Search">Busqueda</NavLink></li>
        </ul>
      </nav>

      <input className="burger-shower" type="checkbox" id="hamburger-input" />
      <label id="hamburger-menu" htmlFor="hamburger-input">
        <nav id="sidebar-menu">
          <div id="sidebar-menu__title">
            <h3>Menu</h3>
          </div>
          <ul className="hamburguer-menu__list">
            <li><NavLink className="hamburguer__list--inactive" to="/">Home</NavLink></li>
            {roleAccess === 'admin' ? <li><NavLink className="menu__list--inactive" to="/AdminPage">Admin</NavLink></li> : null}
            <li><NavLink className="hamburguer__list--inactive" to="/LogIn">Ingresar</NavLink></li>
            <li><NavLink className="hamburguer__list--inactive" to="/LogUp">Registrar</NavLink></li>
            <li><NavLink className="hamburguer__list--inactive" to="/Search">Busqueda</NavLink></li>
          </ul>
        </nav>
      </label>
    </div>
  );
}

export default NavBar;

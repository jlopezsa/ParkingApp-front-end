import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import SignupPage from '../../pages/sign-up';
import City from '../../pages/City';
import Search from '../../pages/Search';
import './Menus.scss';

function Menus() {
  return (
    <BrowserRouter>
      <nav className="container-menu">
        <ul className="container-menu__list">
          <li><NavLink className="menu__list--inactive" exact to="/">Mi cuenta</NavLink></li>
          <li><NavLink className="menu__list--inactive" exact to="/LogIn">Ingresar</NavLink></li>
          <li><NavLink className="menu__list--inactive" exact to="/LogUp">Registrar</NavLink></li>
          <li><NavLink className="menu__list--inactive" exact to="/Cities">Ciudades</NavLink></li>
          <li><NavLink className="menu__list--inactive" exact to="/Search">Busqueda</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LogUp" element={<SignupPage />} />
        <Route path="/Cities" element={<City />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Menus;

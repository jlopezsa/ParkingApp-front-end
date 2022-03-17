import {BrowserRouter,Routes,Route,NavLink} from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import './Menus.scss';

function Menus() {
  return (
    <>
      <h1>Soy Menus</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li><NavLink to ="/home">Mi cuenta</NavLink></li>
            <li><NavLink to="/home">Ingresar</NavLink></li>
            <li><NavLink to="/home">Registrar</NavLink></li>
            <li><NavLink to="/home">Ciudades</NavLink></li>
            <li><NavLink to="/home">Busqueda</NavLink></li>
        </ul>
        </nav>
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default Menus;

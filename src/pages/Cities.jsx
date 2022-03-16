import {BrowserRouter,Routes,Route,NavLink} from 'react-router-dom';
import City from './City';

function Cities() {
  return (
    <>
      <BrowserRouter>
        <nav className="container">
          <ul>
            <li id="Bogota"><NavLink to ="/City" href="#">Bogotá</NavLink></li>
            <li><NavLink id="Cali" to="/City">Cali</NavLink></li>
            <li><NavLink id="Medellin" to="/City">Medellín</NavLink></li>
            <li><NavLink id="Cartagena" to="/City">Cartagena</NavLink></li>
            <li><NavLink id="Bucaramanga" to="/City">Bucaramanga</NavLink></li>
        </ul>
        </nav>
        <Routes>
          <Route path="/City" element={<City />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default Cities;

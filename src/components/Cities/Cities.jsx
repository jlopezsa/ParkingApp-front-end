import { Link } from 'react-router-dom';
import './Cities.scss';

function Cities() {
  return (
    <div className="container-cities">
      <Link className="cities__list" id="Bogota" to="/Cities">Bogotá</Link>
      <Link className="cities__list" id="Cali" to="/Cities">Cali</Link>
      <Link className="cities__list" id="Medellin" to="/Cities">Medellín</Link>
      <Link className="cities__list" id="Cartagena" to="/Cities">Cartagena</Link>
      <Link className="cities__list" id="Bucaramanga" to="/Cities">Bucaramanga</Link>
    </div>
  );
}
export default Cities;

import {NavLink} from 'react-router-dom';
function Cities() {
  return (
    <div className="container">
      <ul>
        <li id="Bogota"><NavLink to ="/Bogota" href="#">Bogotá</NavLink></li>
        <li><NavLink id="Cali" to="/Cali">Cali</NavLink></li>
        <li><NavLink id="Medellin" to="#">Medellín</NavLink></li>
        <li><NavLink id="Cartagena" to="#">Cartagena</NavLink></li>
        <li><NavLink id="Bucaramanga" to="#">Bucaramanga</NavLink></li>
      </ul>
    </div>
  )
}
export default Cities;

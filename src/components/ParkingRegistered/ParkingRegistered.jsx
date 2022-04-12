import { Link } from 'react-router-dom';
import './ParkingRegistered.scss';

function ParkingRegistered() {
  return (
    <div className="contParkReg">
      <div className="contParkReg__figure">
        <img
          className="contParkReg__figure--img"
          src="https://d500.epimg.net/cincodias/imagenes/2020/01/22/lifestyle/1579693137_705498_1579693193_noticia_normal.jpg"
          alt=""
        />
      </div>
      <div className="contParkReg__information">
        <div className="contParkReg__information--qualify">
          Calificación y média
        </div>
        <div>
          <h2>Nombre</h2>
        </div>
        <div className="contParkReg__information--data">
          <p id="contParkReg-p__fixed">
            Dirección:
          </p>
          <p id="contParkReg-p__varible">
            Calle 85 # 9-45
          </p>
        </div>
        <div className="contParkReg__information--data">
          <p id="contParkReg-p__fixed">
            Ciudad:
          </p>
          <p id="contParkReg-p__varible">
            Cali
          </p>
        </div>
        <div className="contParkReg__information--data">
          <p id="contParkReg-p__fixed">
            Tarifa:
          </p>
          <p id="contParkReg-p__varible">
            2500
          </p>
        </div>
        <div className="contParkReg__information--data">
          <p id="contParkReg-p__fixed">
            Hora de apertura:
          </p>
          <p id="contParkReg-p__varible">
            06h30
          </p>
        </div>
        <div className="contParkReg__information--data">
          <p id="contParkReg-p__fixed">
            Hora de cierre:
          </p>
          <p id="contParkReg-p__varible">
            18h30
          </p>
        </div>
        <div className="contParkReg__information--data">
          <p id="contParkReg-p__fixed">
            Total de cupos:
          </p>
          <p id="contParkReg-p__varible">
            120
          </p>
        </div>
        <div className="contParkReg__information--data">
          <p id="contParkReg-p__fixed">
            Cupos usados:
          </p>
          <p id="contParkReg-p__varible">
            100
          </p>
        </div>
        <div className="contParkReg__information--data">
          <p id="contParkReg-p__fixed">
            Cupos libres:
          </p>
          <p id="contParkReg-p__varible">
            20
          </p>
        </div>
      </div>
      <div className="contParkReg__buttons">
        <div>
          <button type="submit">
            <Link id="booking-page" to="/">Editar</Link>
          </button>
        </div>
        <div>
          <button type="submit">
            <Link id="booking-page" to="/">Eliminar</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ParkingRegistered;

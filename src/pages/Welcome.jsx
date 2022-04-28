import React from 'react';
import { Link } from 'react-router-dom';
import parkingTitle from '../figures/parking_title.svg';
import './Welcome.styles.scss';

function Welcome() {
  return (
    <div className="body__welcome">
      <div className="welcome">
        <img className="welcome__img" src={parkingTitle} alt="title" />
      </div>
      <div className="target">
        <div className="target__text">
          <h1 className="target__text__title">
            Bienvenido !
          </h1>
          <p className="target__text__description">
            Su cuenta de usuario se ha creado con éxito.
          </p>
        </div>
        <div className="target__buttons">
          <Link className="target__buttons__a" to="/Search">Continuar con mi reserva</Link>
          <Link className="target__buttons__b" to="/">Aceptar</Link>
        </div>
      </div>
    </div>
  );
}
export default Welcome;

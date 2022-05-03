import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './SessionSettings.scss';

function SessionSettings(props) {
  const { adminToken } = props;
  return (
    <div className="sessionsettings">
      <div className="sessionsettings__header">
        <div className="sessionsettings__header--figure">
          <img className="sessionsettings__header--figureImag" src="https://pickaface.net/gallery/avatar/unr_lieke_220315_1522_113e55.png" alt="" />
        </div>
        <div className="sessionsettings__header--info">
          <p>Mi cuenta (Administrador)</p>
          <Link to="https://github.com/makeitrealcamp/top-v20">Cambiar fotografia</Link>
        </div>
        <div className="sessionsettings__header--button">
          <button type="submit">Salir</button>
        </div>
      </div>
      <div className="sessionsettings__title">
        <p className="sessionsettings__title-p">Ajustes de sesión</p>
      </div>
      <div className="sessionsettings__data">
        <p className="sessionsettings__data-p">Nombre:</p>
        <div className="sessionsettings__data--name">
          <p>{adminToken.fullName}</p>
          <Link to="https://github.com/makeitrealcamp/top-v20">Cambiar</Link>
        </div>
        <p className="sessionsettings__data-p">Email:</p>
        <div className="sessionsettings__data--email">
          <p>{adminToken.email}</p>
          <Link to="https://github.com/makeitrealcamp/top-v20">Cambiar</Link>
        </div>
        <p className="sessionsettings__data-p">Password:</p>
        <div className="sessionsettings__data--password">
          <p>********</p>
          <Link to="https://github.com/makeitrealcamp/top-v20">Cambiar</Link>
        </div>
      </div>
    </div>
  );
}

SessionSettings.propTypes = {
  adminToken: PropTypes.shape({
    fullName: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default SessionSettings;

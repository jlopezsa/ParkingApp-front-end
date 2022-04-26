import React from 'react';
import parkingTitle from '../figures/parking_title.svg';
import './Welcome.styles.scss';

function Welcome() {
  return (
    <div className="container-welcome">
      <img src={parkingTitle} alt="title" />
      <p> Welcome to the Parking App!</p>
    </div>
  );
}
export default Welcome;

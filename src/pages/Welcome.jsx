import React from 'react';
import parkingTitle from '../figures/parking_title.svg';
import './Welcome.styles.scss';

function Welcome() {
  return (
    <div className="container-welcome">
      <img src={parkingTitle} alt="title" />
    </div>
  );
}
export default Welcome;

import React from "react";
import './ViewsFigTopLeft.scss';

const ViewsFigTopLeft = (props) => {
  return(
    <div className="container-top-left">
      <div className="container-top-left__title">
        <p className="container-top-left__title--top">{props.title}</p>
      </div>
      <div className="container-top-left__figure">
        <img className="top-figure" src={props.figure} alt="top figure"/>
      </div>
      <div className="container-top-left__text">
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default ViewsFigTopLeft

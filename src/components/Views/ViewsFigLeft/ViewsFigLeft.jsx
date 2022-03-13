import React from "react";
import './ViewsFigLeft.scss';


const ViewsFigLeft = (props) => {
  return(
    <div className="container-view">
      <div className="container-view__title">
        <p className="container-view__title--top">{props.title}</p>
      </div>
      <div className="container-view__figure">
        <img className="left-figure" src={props.figure} alt="left figure"/>
      </div>
      <div className="container-view__text">
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default ViewsFigLeft

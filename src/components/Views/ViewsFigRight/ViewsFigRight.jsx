/* eslint-disable */
import React from "react";
import './ViewsFigRight.scss';


const ViewsFigRight = (props) => {
  return(
    <div className="container-view-r">
      <div className="container-view-r__title">
        <p className="container-view-r__title--top">{props.title}</p>
      </div>
      <div className="container-view-r__figure">
        <img className="right-figure" src={props.figure} alt="left figure"/>
      </div>
      <div className="container-view-r__text">
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default ViewsFigRight

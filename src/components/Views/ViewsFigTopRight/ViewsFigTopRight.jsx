/* eslint-disable */
import React from "react";
import './ViewsFigTopRight.scss'

const ViewsFigTopRight = (props) =>{
  return(
    <div className="container-top-right">
      <div className="container-top-right__title">
        <p className="container-top-right__title--top">{props.title}</p>
      </div>
      <div className="container-top-right__figure">
        <img className="top-right-figure" src={props.figure} alt="top right figure"/>
      </div>
      <div className="container-top-right__text">
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default ViewsFigTopRight

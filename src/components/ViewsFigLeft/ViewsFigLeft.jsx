import React from "react";
import './ViewsFigLeft.scss';
import leftFig from '../../figures/views-Parking-bro.svg';

const ViewsFigLeft = () => {
  return(
    <div className="container-view">
      <div className="container-view__title">
        <p className="container-view__title--top">El problema</p>
      </div>
      <div className="container-view__figure">
        <img className="left-figure" src={leftFig} alt="left figure"/>
      </div>
      <div className="container-view__text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cupiditate nesciunt hic nam. Magni, illo. Dignissimos at adipisci consequatur? Esse vitae cumque eius vero nihil atque eveniet, nostrum autem voluptatum? Adipisci iste, vel rerum quidem vitae natus voluptas laboriosam atque repudiandae.</p>
      </div>
    </div>
  )
}

export default ViewsFigLeft

/* eslint-disable */
import React from "react";
import './Views.scss'
import ViewsFigLeft from './ViewsFigLeft/ViewsFigLeft';
import ViewsFigRight from './ViewsFigRight/ViewsFigRight';
import ViewsFigTopLeft from './ViewsFigTopLeft/ViewsFigTopLeft';
import ViewsHorizontal from './ViewsHorizontal/ViewsHorizontal';
import ViewsFigTopRight from './ViewsFigTopRight/ViewsFigTopRight';

import leftFig from '../../figures/views-Parking-bro.svg';
import rigthFig from '../../figures/views-navigator-cuate.svg';
import parkingWoman from '../../figures/views-Parking-woman.svg';
import parkingManSmartphone from '../../figures/views-Parking-man-smartphone.svg';
import parkingWomanBike from '../../figures/views-Parking-woman-bike.svg';
import datafonoMan from '../../figures/views-Datafono-man.svg';
import statisticsDoc from '../../figures/views-Statistics.svg';
import presentationMan from '../../figures/views-Presentation-man.svg';
import future from '../../figures/views-Future.svg';


const Views = () => {
  return(
    <div className="container-views">
      <ViewsFigLeft title={'El problema'} figure={leftFig} text={'Propietarios de vehículos suelen reclamar la falta de parqueaderos para ubicar sus carros en zonas congestionadas como el centro de la ciudad.'}/>

      <ViewsFigRight title={'¿Qué hacemos?'} figure={rigthFig} text={'Permitir realizar la conección entre usuarios que requieren estacionar sus vehículos y parqueaderos que tengan disponibilidad.'}/>

      <ViewsFigTopLeft title={'¿Cómo lo hacemos?'} figure={parkingWoman} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime assumenda soluta, quaerat mollitia sequi explicabo eaque dolor voluptatum animi dolorum magni beatae laboriosam? Quia, excepturi. Veniam doloremque aperiam deserunt nisi.'}/>
      <ViewsHorizontal titleLeft={''} figureLeft={parkingManSmartphone} textLeft={'dolor sit amet consectetur adipisicing elit. Maxime assumenda soluta, quaerat mollitia sequi explicabo eaque dolor voluptatum animi dolorum magni beatae laboriosam? Quia, excepturi.'} titleRight={''} figureRight={parkingWomanBike} textRight={'Quia, excepturi. Veniam doloremque aperiam deserunt nisi. g elit. Velit cupiditate nesciunt hic nam. Magni, illo.'} />

      <div className="container-title">
        <p>Proximamente...</p>
      </div>

      <ViewsHorizontal titleLeft={''} figureLeft={datafonoMan} textLeft={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime assumenda soluta, quaerat mollitia sequi explicabo eaque dolor voluptatum animi dolorum magni beatae laboriosam? Quia, excepturi. Veniam doloremque aperiam deserunt nisi.'} titleRight={''} figureRight={statisticsDoc} textRight={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cupiditate nesciunt hic nam. Magni, illo. Dignissimos at adipisci consequatur? Esse vitae cumque eius vero nihil atque eveniet, nostrum autem voluptatum? Adipisci iste, vel rerum quidem vitae natus voluptas laboriosam atque repudiandae.'} />

      <ViewsFigTopRight title={''} figure={presentationMan} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cupiditate nesciunt hic nam. Magni, illo. Dignissimos at adipisci consequatur? consectetur adipisicing elit. Velit cupiditate nesciunt hic nam. Magni, illo. Dignissimos at adipisci consequatur? Esse vitae cumque eius vero nihil atque eveniet, nostrum autem voluptatum? Adipisci iste, vel rerum quidem vitae'}/>

      <div className="container-title">
        <p></p>
      </div>
      <ViewsFigTopLeft title={''} figure={future} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime assumenda soluta, quaerat mollitia sequi explicabo eaque dolor voluptatum animi dolorum magni beatae laboriosam? Quia, excepturi. Veniam doloremque aperiam deserunt nisi.'}/>


    </div>
  )
}

export default Views

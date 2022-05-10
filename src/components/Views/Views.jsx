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

      <ViewsFigTopLeft title={'¿Cómo lo hacemos?'} figure={parkingWoman} text={'Haciendo uso de las diferentes herramientas tecnológicas y poniendolas a disposición del usuario, para que pueda buscar y seleccionar el parqueadero que cumpa con sus necesidades o requerimientos.'}/>

      <ViewsHorizontal titleLeft={''} figureLeft={datafonoMan} textLeft={'La posibilidad de incorporar pagos con tarjeta, así mismo permitir el cargue de estas transacciones a la pagina'} titleRight={''} figureRight={statisticsDoc} textRight={'El administrador tendrá informes y la opción de explorar sus transacciones en lapsos como días o semanas, '} />

      <div className="container-title">
        <p>Proximamente...</p>
      </div>

      <ViewsHorizontal titleLeft={''} figureLeft={parkingManSmartphone} textLeft={'Implementar un chat entre el usuario y el administrador con el fin de que exista una comunicación dirécta y segura a través de la aplicación.'} titleRight={''} figureRight={parkingWomanBike} textRight={'Una véz realizada la reserva la plataforma podrá guiar al usuario desde el origen hasta la dirección del parqueadero.'} />


      <ViewsFigTopRight title={''} figure={presentationMan} text={'Estadísticas, el administrador tendrá una data robusta como horas valle, horas pico, y listado o informes de usuarios que utilizan la plataforma. Con estos datos se podrán realizar predicciones de los días y horas de mayor concorrencia.'}/>

      <div className="container-title">
        <p></p>
      </div>
      <ViewsFigTopLeft title={''} figure={future} text={'Aumentar la cobertura, pensamos expandirnos a ciudades o poblaciones mas pequeñas teniendo una mayor cuota de mercado.'}/>


    </div>
  )
}

export default Views

/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './CreateParking.scss';

function CreateParking() {
  return (
    <div className="container-create">
      <h2>Ingrese datos del parqueadero</h2>
      <form id="form">
        <input className="container-create__input" type="text" name="name" placeholder="Nombre del parqueadero" />
        <input className="container-create__input" type="text" name="city" placeholder="Ciudad" />
        <input className="container-create__input" type="text" name="adress" placeholder="Dirección" />
        <input className="container-create__input" type="number" name="phone" placeholder="Teléfono" />
        <input className="container-create__input" type="number" name="price" placeholder="Valor hora" />
        <label htmlFor="startTime">Hora de apertura</label>
        <input className="container-create__input" id="startTime" type="time" name="startTime" placeholder="Hora" />
        <label name="endTime">Hora de cierre</label>
        <input className="container-create__input" type="time" name="endTime" placeholder="Hora de cierre" />
        <input className="container-create__input" type="number" name="sites" placeholder="Número de puestos" />
        <input className="container-create__input" type="number" name="length" placeholder="Longitud" />
        <input className="container-create__input" type="number" name="latitude" placeholder="Latitud" />
        <input className="container-create__input" type="text" name="image" placeholder="Imagen" />
        <button className="container-create__Button" type="submit">REGISTRAR</button>
        <button className="container-create__Button" type="submit">CANCELAR</button>
      </form>
    </div>
  );
}
export default CreateParking;

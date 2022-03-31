import React from 'react';
import './CreateParking.scss';

function CreateParking() {
  return (
    <div className="container">
      <h2>Ingrese datos del parqueadero</h2>
      <form id="form">
        <input className="container__input" type="text" name="name" placeholder="Nombre del parqueadero" />
        <input className="container__input" type="text" name="city" placeholder="Ciudad" />
        <input className="container__input" type="text" name="adress" placeholder="Dirección" />
        <input className="container__input" type="number" name="phone" placeholder="Teléfono" />
        <input className="container__input" type="number" name="price" placeholder="Valor hora" />
        <input className="container__input" type="time" name="startTime" placeholder="Hora de apertura" />
        <input className="container__input" type="time" name="endTime" placeholder="Hora de cierre" />
        <input className="container__input" type="number" name="sites" placeholder="Número de puestos" />
        <input className="container__input" type="number" name="length" placeholder="Longitud" />
        <input className="container__input" type="number" name="latitude" placeholder="Latitud" />
        <input className="container__image" type="imagen" name="image" placeholder="Imagen" />
        <button type="submit" className="container__Button">Registrar</button>
        <button type="submit" className="container__Button">Cancelar</button>
      </form>
    </div>
  );
}
export default CreateParking;

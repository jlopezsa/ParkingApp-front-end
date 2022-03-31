import React from 'react';

function CreateParking() {
  return (
    <div className="container">
      <h2>Ingrese datos del parqueadero</h2>
      <form className="container__form">
        <input className="container__form--input" type="text" name="name" placeholder="Nombre del parqueadero" />
        <input className="container__form--input" type="text" name="city" placeholder="Ciudad" />
        <input className="container__form--input" type="text" name="adress" placeholder="Dirección" />
        <input className="container__form--input" type="number" name="phone" placeholder="Teléfono" />
        <input className="container__form--input" type="number" name="price" placeholder="Valor hora" />
        <input className="container__form--input" type="time" name="startTime" placeholder="Hora de apertura" />
        <input className="container__form--input" type="time" name="endTime" placeholder="Hora de cierre" />
        <input className="container__form--input" type="number" name="sites" placeholder="Número de puestos" />
        <input className="container__form--input" type="number" name="length" placeholder="Longitud" />
        <input className="container__form--input" type="number" name="latitude" placeholder="Latitud" />
        <input className="container__form--input" type="imagen" name="image" placeholder="Imagen" />
        <button type="submit" className="container__form--Button">Registrar</button>
        <button type="submit" className="container__form--Button">Cancelar</button>
      </form>
    </div>
  );
}
export default CreateParking;

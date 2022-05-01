/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState } from 'react';
import './CreateParking.scss';

function CreateParking() {
  const [parkingData, setParkingData] = useState({});
  const [parkingImage, setParkingImage] = useState(null);

  const handleChange = (e) => {
    if (!e.target.files) {
      setParkingData({
        ...parkingData,
        [e.target.name]: e.target.value,
      });
    } else {
      setParkingImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', parkingImage);

    const payload = {
      method: 'POST',
      body: formData,
    };

    try {
      const result = await fetch('http://localhost:3035/api/upload/image', payload);
      console.log('RESULTADO: ', result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-create">
      <h2>Ingrese datos del parqueadero</h2>
      <form id="form" onChange={handleChange} onSubmit={handleSubmit}>
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
        <label htmlFor="image">Subir imagen de parqueadero</label>
        <input className="container-create__input" type="file" name="image" placeholder="Imagen" accept="image/*" />
        <button className="container-create__Button" type="submit">REGISTRAR</button>
        <button className="container-create__Button" type="submit">CANCELAR</button>
      </form>
    </div>
  );
}
export default CreateParking;

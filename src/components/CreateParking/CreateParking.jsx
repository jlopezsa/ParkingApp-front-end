import { React, useState } from 'react';
import './CreateParking.scss';
import { useDispatch } from 'react-redux';
import { newParkingRegistered } from '../../store/actions';

function CreateParking() {
  const dispatch = useDispatch();
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
    console.log('TO SUBMIT: ', parkingData);
    const formData = new FormData();
    formData.append('file', parkingImage);
    const payload = {
      method: 'POST',
      body: formData,
    };

    try {
      const result = await fetch(`${process.env.REACT_APP_LOCAL_URL}/api/upload/image`, payload);
      const { url } = await result.json();
      setParkingData({
        ...parkingData,
        image: url,
      });
      dispatch(newParkingRegistered({
        parkingData,
      }));
    } catch (error) {
      throw new Error(error.message);
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
        <label htmlFor="startTime">
          Hora de apertura
          <input className="container-create__input" id="startTime" type="time" name="startTime" placeholder="Hora" />
        </label>
        <label htmlFor="endTime">
          Hora de cierre
          <input className="container-create__input" type="time" name="endTime" placeholder="Hora de cierre" />
        </label>
        <input className="container-create__input" type="number" name="sites" placeholder="Número de puestos" />
        <input className="container-create__input" type="number" step="any" name="latitude" placeholder="Latitud" />
        <input className="container-create__input" type="number" step="any" name="longitude" placeholder="Longitud" />
        <label htmlFor="image">
          Subir imagen de parqueadero
          <input className="container-create__input" type="file" name="image" placeholder="Imagen" accept="image/*" />
        </label>
        <button className="container-create__Button" type="submit">REGISTRAR</button>
        <button className="container-create__Button" type="submit">CANCELAR</button>
      </form>
    </div>
  );
}
export default CreateParking;

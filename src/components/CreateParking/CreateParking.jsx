import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newParkingRegistered } from '../../store/actions';
import './CreateParking.scss';

function CreateParking() {
  const dispatch = useDispatch();
  const adminData = useSelector((state) => state.userData);
  const [parkingData, setParkingData] = useState({});
  const [position, setPosition] = useState({});
  const token = localStorage.getItem('token');
  const formData = new FormData();

  useEffect(() => {
    setParkingData({
      ...parkingData,
      user: adminData.id,
    });
  }, []);
  const handleChange = async (e) => {
    if (e.target.name === 'latitude' || e.target.name === 'longitude') {
      setPosition({
        ...position,
        [e.target.name]: e.target.value,
      });
      setParkingData({
        ...parkingData,
        position,
      });
    } else if (!e.target.files) {
      setParkingData({
        ...parkingData,
        [e.target.name]: e.target.value,
      });
    } else {
      const parkingImage = e.target.files[0];
      formData.append('file', parkingImage);
      const payload = {
        method: 'POST',
        body: formData,
      };
      const result = await fetch(`${process.env.REACT_APP_URL}/api/upload/image`, payload);
      const { url } = await result.json();
      setParkingData({
        ...parkingData,
        image: url,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(newParkingRegistered(parkingData, token));
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div className="container-create">
      <h2>Ingrese datos del parqueadero</h2>
      <form id="form" onChange={handleChange} onSubmit={handleSubmit}>
        <input className="container-create__input" type="text" name="name" placeholder="Nombre del parqueadero" />
        <input className="container-create__input" type="text" name="cityName" placeholder="Ciudad" />
        <input className="container-create__input" type="text" name="addres" placeholder="Dirección" />
        <input className="container-create__input" type="number" name="phone" placeholder="Teléfono" />
        <input className="container-create__input" type="number" name="hourValue" placeholder="Valor hora" />
        <label htmlFor="startTime">
          Hora de apertura
          <input className="container-create__input" id="startTime" type="time" name="openTime" placeholder="Hora" />
        </label>
        <label htmlFor="endTime">
          Hora de cierre
          <input className="container-create__input" type="time" name="closeTime" placeholder="Hora de cierre" />
        </label>
        <input className="container-create__input" type="number" name="totalPlaces" placeholder="Número de puestos" />
        <input className="container-create__input" type="number" step="any" name="latitude" placeholder="Latitud" />
        <input className="container-create__input" type="number" step="any" name="longitude" placeholder="Longitud" />
        <label htmlFor="image">
          Subir imagen de parqueadero
          <input className="container-create__input" type="file" name="image" placeholder="Imagen" accept="image/*" />
        </label>
        <button className="container-create__Button" type="submit">REGISTRAR</button>
        <button className="container-create__Button" type="submit">REGRESAR</button>
      </form>
    </div>
  );
}
export default CreateParking;

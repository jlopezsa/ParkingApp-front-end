import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { newParkingRegistered } from '../../store/actions';
import './CreateParking.scss';

function CreateParking() {
  const dispatch = useDispatch();
  const adminData = useSelector((state) => state.userData);
  const [parkingData, setParkingData] = useState({});
  const [position, setPosition] = useState({});
  const token = localStorage.getItem('token');
  const formData = new FormData();
  const navigate = useNavigate();

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
      const { response } = await dispatch(newParkingRegistered(parkingData, token));
      if (response.status === 500) {
        Swal.fire({
          icon: 'error',
          title: 'Algo salió mal',
          text: 'Intente nuevamente.',
        });
      } else {
        Swal.fire(
          'Parqueadero registrado exitosamente',
          'Vea su registro!',
          'success',
        );
        navigate('/AdminPage');
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div className="container-create">
      <h2>Ingrese datos del parqueadero</h2>
      <form id="form" onChange={handleChange} onSubmit={handleSubmit}>
        <input data-cy="input_parking_name" className="container-create__input" type="text" name="name" placeholder="Nombre del parqueadero" />
        <input data-cy="input_parking_cityName" className="container-create__input" type="text" name="cityName" placeholder="Ciudad" />
        <input data-cy="input_parking_addres" className="container-create__input" type="text" name="addres" placeholder="Dirección" />
        <input data-cy="input_parking_phone" className="container-create__input" type="number" name="phone" placeholder="Teléfono" />
        <input data-cy="input_parking_value" className="container-create__input" type="number" name="hourValue" placeholder="Valor hora" />
        <label htmlFor="startTime">
          Hora de apertura
          <input data-cy="input_parking_start" className="container-create__input" id="startTime" type="time" name="openTime" placeholder="Hora" />
        </label>
        <label htmlFor="endTime">
          Hora de cierre
          <input data-cy="input_parking_close" className="container-create__input" type="time" name="closeTime" placeholder="Hora de cierre" />
        </label>
        <input data-cy="input_parking_places" className="container-create__input" type="number" name="totalPlaces" placeholder="Número de puestos" />
        <input data-cy="input_parking_latitude" className="container-create__input" type="number" step="any" name="latitude" placeholder="Latitud" />
        <input data-cy="input_parking_longitude" className="container-create__input" type="number" step="any" name="longitude" placeholder="Longitud" />
        <label htmlFor="image">
          Subir imagen de parqueadero
          <input className="container-create__input" type="file" name="image" placeholder="Imagen" accept="image/*" />
        </label>
        <button className="container-create__Button" type="submit">REGISTRAR</button>
        <button className="container-create__Button" type="button" onClick={() => { navigate('/AdminPage'); }}>REGRESAR</button>
      </form>
    </div>
  );
}
export default CreateParking;

/* eslint-disable */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Searchdayhour.scss';
import { searchCity } from '../../store/actions';

function SearchDayHour() {
  const dispatch = useDispatch();

  const [inputCity, setInputCity] = useState('');

  const handleClick = (e) => {
    dispatch(searchCity(inputCity));
  }

  const handleChange = (e) => {
    setInputCity(e.target.value);
  }
  return (
    <div className="dayhour">
      <p id="titlesearch">Encuentre su parqueadero mas cercano</p>
      <div className="search-button">
        <input id="search-input" type="search" name="city-direction" placeholder="Ciudad, Dirección" onChange={handleChange} />
        <button id="botonSearch" onClick={handleClick}>Buscar</button>
      </div>

      <label id="entrada">Entrada</label>
      <label id="salida">Salida</label>
      <input id="fechaini" type="date" name="stardate" />
      <input id="fechafin" type="date" name="enddate" />
      <input id="horaini" type="time" name="starttime" />
      <input id="horafin" type="time" name="endtime" />
    </div>
  );
}
export default SearchDayHour;

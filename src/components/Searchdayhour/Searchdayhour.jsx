/* eslint-disable */
import { useState } from 'react';
import './Searchdayhour.scss';

function SearchDayHour(props) {
  const [searchCity, setSearchCity] = useState('');

  const handleClick = (e) => {
    props.onHandleChange(searchCity);
  }

  const handleChange = (e) => {
    setSearchCity(e.target.value);
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

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Searchdayhour.scss';
import { searchCity } from '../../store/actions';

function SearchDayHour() {
  const dispatch = useDispatch();

  const [inputCity, setInputCity] = useState('');

  const handleClick = () => {
    dispatch(searchCity(inputCity));
  };

  const handleChange = (e) => {
    setInputCity(e.target.value);
  };
  return (
    <div className="dayhour">
      <p id="titlesearch">Encuentre su parqueadero mas cercano</p>
      <div className="search-button">
        <input id="search-input" type="search" name="city-direction" placeholder="Ciudad, Dirección" onChange={handleChange} />
        <button id="botonSearch" type="submit" onClick={handleClick}>Buscar</button>
      </div>

      <p id="entrada">Entrada</p>
      <p id="salida">Salida</p>
      <input id="fechaini" type="date" name="stardate" />
      <input id="fechafin" type="date" name="enddate" />
      <input id="horaini" type="time" name="starttime" />
      <input id="horafin" type="time" name="endtime" />
    </div>
  );
}
export default SearchDayHour;

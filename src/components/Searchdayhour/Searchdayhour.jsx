import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Searchdayhour.scss';
import {
  searchCity,
  bookingDateHour,
} from '../../store/actions';

function SearchDayHour() {
  const dispatch = useDispatch();

  const [inputCity, setInputCity] = useState('');
  const [dateHourInfo, setDateHourInfo] = useState(
    {
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
    },
  );

  const handleClick = () => {
    dispatch(searchCity(inputCity));
  };

  const handleChange = (e) => {
    setInputCity(e.target.value);
  };

  const handleChangeDataIn = (e) => {
    console.log(e.currentTarget.value);
    setDateHourInfo({ ...dateHourInfo, [e.target.name]: e.target.value });
    dispatch(bookingDateHour(dateHourInfo));
  };

  const handleChangeDataOut = (e) => {
    setDateHourInfo({ ...dateHourInfo, [e.target.name]: e.target.value });
    dispatch(bookingDateHour(dateHourInfo));
  };

  const handleChangeHourIn = (e) => {
    setDateHourInfo({ ...dateHourInfo, [e.target.name]: e.target.value });
    dispatch(bookingDateHour(dateHourInfo));
  };

  const handleChangeHourOut = (e) => {
    setDateHourInfo({ ...dateHourInfo, [e.target.name]: e.target.value });
    dispatch(bookingDateHour(dateHourInfo));
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
      <input id="fechaini" type="date" name="startDate" onChange={handleChangeDataIn} />
      <input id="fechafin" type="date" name="endDate" onChange={handleChangeDataOut} />
      <input id="horaini" type="time" name="startTime" onChange={handleChangeHourIn} />
      <input id="horafin" type="time" name="endTime" onChange={handleChangeHourOut} />
    </div>
  );
}
export default SearchDayHour;

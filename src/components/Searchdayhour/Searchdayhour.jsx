/* eslint-disable */
import './Searchdayhour.scss'

function SearchDayHour() {
  return (
    <div className="dayhour">
      <p id="titlesearch">Encuentre su parqueadero mas cercano</p>
      <input id="search-input" type="search" name="email" placeholder="Ciudad, Dirección" />
      <button id="botonSearch">Buscar</button>
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

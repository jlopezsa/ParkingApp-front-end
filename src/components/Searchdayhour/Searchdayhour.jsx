import './Searchdayhour.scss';

function SearchDayHour(){
  return(
    <div className="container">
      <label id='entrada'>Entrada</label>
      <label id='salida'>Salida</label>
      <input id='fechaini' type="date" name="stardate" placeholder="ingrese fecha" />
      <input id='fechafin' type="date" name="enddate" placeholder="ingrese fecha" />

      <input id='horaini' type="time" name="starttime" placeholder="ingrese hora" />
      <input id='horafin' type="time" name="endtime" placeholder="ingrese hora" />
    </div>
  )
}
export default SearchDayHour;

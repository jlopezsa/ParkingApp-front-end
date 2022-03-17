import './Searchdayhour.scss';

function SearchDayHour(){
  return(
    <div className="container">
      <label id='entrada'>Entrada</label>
      <label id='salida'>Salida</label>
      <input type="date" name="stardate" placeholder="ingrese fecha" />
      <input type="date" name="enddate" placeholder="ingrese fecha" />

      <input type="time" name="starttime" placeholder="ingrese hora" />
      <input type="time" name="endtime" placeholder="ingrese hora" />
    </div>
  )
}
export default SearchDayHour;

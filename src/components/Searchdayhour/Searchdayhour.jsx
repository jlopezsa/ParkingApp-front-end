function SearchDayHour(){
  return(
    <Div className="container">
      <label>Entrada</label>
      <label>Salida</label>
      <input type="date" name="stardate" placeholder="ingrese fecha" />
      <input type="date" name="enddate" placeholder="ingrese fecha" />

      <input type="time" name="startime" placeholder="ingrese hora" />
      <input type="time" name="endtime" placeholder="ingrese hora" />
    </Div>
  )
}
export default SearchDayHour;

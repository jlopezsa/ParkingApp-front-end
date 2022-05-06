import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Cities.scss';
import { searchCity } from '../../store/actions';

function Cities() {
  const dispatch = useDispatch();

  // const handleClickCali = () => {
  //   // const string = e.target.name;
  //   // e.preventDefault();
  //   // const cityClick = e.target.name;
  //   // console.log(typeof cityClick);
  //   dispatch(searchCity('cali'));
  //   // window.location.href = '/Search';
  // };

  return (
    <div className="container-cities">
      <Link className="cities__list" id="Bogota" onClick={() => { dispatch(searchCity('bogotá')); }} to="/Search">Bogotá</Link>
      <Link className="cities__list" id="Cali" onClick={() => { dispatch(searchCity('cali')); }} to="/Search">Cali</Link>
      <Link className="cities__list" id="Medellin" onClick={() => { dispatch(searchCity('medellín')); }} to="/Search">Medellín</Link>
      <Link className="cities__list" id="Cartagena" onClick={() => { dispatch(searchCity('cartagena')); }} to="/Search">Cartagena</Link>
      <Link className="cities__list" id="Bucaramanga" onClick={() => { dispatch(searchCity('bucaramanga')); }} to="/Search">Bucaramanga</Link>
    </div>
  );
}
export default Cities;

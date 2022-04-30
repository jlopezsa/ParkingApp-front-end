import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCity } from '../../store/actions';

import './SearchBar.scss';

function SearchBar() {
  const dispatch = useDispatch();
  const [inputCity, setInputCity] = useState('');

  const handleClick = () => {
    dispatch(searchCity(inputCity));
  };

  const handleChange = (e) => {
    setInputCity(e.target.value);
  };

  return (
    <form className="form-search">
      <input className="form-search__input" type="search" name="email" placeholder="Ciudad, Dirección" onChange={handleChange} />
      <Link to="/Search">
        <button className="form-search__button" onClick={handleClick} type="submit">Buscar</button>
      </Link>
    </form>
  );
}

export default SearchBar;

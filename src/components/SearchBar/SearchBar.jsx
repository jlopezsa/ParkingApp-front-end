import './SearchBar.scss';

function SearchBar() {
  return (
    <form className="form-search">
      <input className="form-search__input" type="search" name="email" placeholder="Ciudad, Dirección" />
      <button className="form-search__button" type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;

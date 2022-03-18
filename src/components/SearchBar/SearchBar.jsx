import './SearchBar.scss';

function SearchBar() {
  return (
    <form className="form-search">
      <input className="form-search__input" type="search" name="email" placeholder="Ciudad, Dirección" />
      <input className="form-search__submit" type="submit" name="submit" value="Buscar" />
    </form>
  );
}

export default SearchBar;

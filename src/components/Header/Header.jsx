import './Header.scss';
import parkingTitle from '../../figures/parking_title.svg';

function Header() {
  return (
    <div className="container-header">
      <div className="container-header__img" />
      <div className="container-header__title">
        <img className="" src={parkingTitle} alt="title" />
      </div>
      <div className="container-header__menu" />
    </div>
  );
}

export default Header;

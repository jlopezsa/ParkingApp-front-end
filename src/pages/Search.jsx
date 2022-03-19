import React from 'react';
import './Search.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ParkingList from '../components/ParkingList/ParkingList';
import Maps from '../components/Maps/Maps';

function Search() {
  return (
    <div className="cont-search">
      <Header />
      <div className="body-search">
        <div className="body-search__map">
          <Maps />
        </div>
        <div className="body-search__filter">
          Search and filter
        </div>
        <div className="body-search__parking">
          <ParkingList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Search;

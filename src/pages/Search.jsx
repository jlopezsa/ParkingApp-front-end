import React from 'react';
import './Search.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ParkingList from '../components/ParkingList/ParkingList';
import Maps from '../components/Maps/Maps';
import Searchdayhour from '../components/Searchdayhour/Searchdayhour';

function Search() {
  return (
    <div className="cont-search">
      <Header />
      <div className="body-search">
        <div className="body-search__map">
          <Maps />
        </div>
        <div className="body-search__filter">
          <Searchdayhour />
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

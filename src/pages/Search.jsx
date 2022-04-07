import React, { useState } from 'react';
import './Search.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ParkingList from '../components/ParkingList/ParkingList';
import Maps from '../components/Maps/Maps';
import Searchdayhour from '../components/Searchdayhour/Searchdayhour';

function Search() {
  const [searchCity, setSearchCity] = useState('');
  return (
    <div className="cont-search">
      <Header />
      <div className="body-search">
        <div className="body-search__map">
          <Maps searchCity={searchCity} />
        </div>
        <div className="body-search__filter">
          <Searchdayhour onHandleChange={setSearchCity} />
        </div>
        <div className="body-search__parking">
          <ParkingList searchCity={searchCity} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Search;

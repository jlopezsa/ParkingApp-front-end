import React from 'react';
import './HomePage.scss';

import Footer from '../components/Footer/Footer';
import Views from '../components/Views/Views';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import Cities from '../components/Cities/Cities';

function HomePage() {
  return (
    <div className="container-home">
      <Header />
      <div className="container-home__citysearch">
        <Cities />
        <SearchBar />
      </div>
      <Views />
      <Footer />
    </div>
  );
}

export default HomePage;

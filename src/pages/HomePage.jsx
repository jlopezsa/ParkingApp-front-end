/* eslint-disable */
import React from 'react'

import Footer from '../components/Footer/Footer';
import Views from '../components/Views/Views';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import Cities from '../components/Cities/Cities'

const HomePage = (props) =>{
  return(
    <div className="container-home">
      <Header/>
      <Cities />
      <SearchBar />
      <Views />
      <Footer />
    </div>
  )
}

export default HomePage

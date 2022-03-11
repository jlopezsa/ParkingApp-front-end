import React from 'react'
import Footer from '../components/Footer/Footer';
import './Search';

const Search = (props) =>{

  const cities = [
    { "hrefLink": "https://es.reactjs.org/", "ciudad": "Bogotá" },
    { "hrefLink": "https://es.reactjs.org/", "ciudad": "Cali" },
    { "hrefLink": "https://es.reactjs.org/", "ciudad": "Medellín" },
    { "hrefLink": "https://es.reactjs.org/", "ciudad": "Bucaramanga" },
    { "hrefLink": "https://es.reactjs.org/", "ciudad": "Santa Marta" },
    { "hrefLink": "https://es.reactjs.org/", "ciudad": "Cartagena" },
    { "hrefLink": "https://es.reactjs.org/", "ciudad": "Barranquilla" }]

  return(
    <div className="">
      <Footer cities={cities} />
    </div>
  )
}

export default Search

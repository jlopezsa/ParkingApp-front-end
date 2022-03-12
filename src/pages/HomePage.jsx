import './HomePage.scss';
import React from 'react'
import Footer from '../components/Footer/Footer';
import ViewsFigLeft from '../components/ViewsFigLeft/ViewsFigLeft';

const cities = [
  { "hrefLink": "https://es.reactjs.org/", "ciudad": "Bogotá" },
  { "hrefLink": "https://es.reactjs.org/", "ciudad": "Cali" },
  { "hrefLink": "https://es.reactjs.org/", "ciudad": "Medellín" },
  { "hrefLink": "https://es.reactjs.org/", "ciudad": "Bucaramanga" },
  { "hrefLink": "https://es.reactjs.org/", "ciudad": "Santa Marta" },
  { "hrefLink": "https://es.reactjs.org/", "ciudad": "Cartagena" },
  { "hrefLink": "https://es.reactjs.org/", "ciudad": "Barranquilla" }]

const HomePage = (props) =>{


  return(
    <div className="">
      <h1 className="">Hello ParkingApp from React</h1>
      <ViewsFigLeft />
      <Footer cities={cities} />
    </div>
  )
}

export default HomePage

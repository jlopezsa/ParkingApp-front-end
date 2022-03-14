import './HomePage.scss';
import React from 'react'
import Footer from '../components/Footer/Footer';
import Views from '../components/Views/Views';
import ParkingList from '../components/ParkingList/ParkingList';

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
    <div className="container-home">
      <h1 className="">Hello ParkingApp from React</h1>
      <Views />
      <Footer cities={cities} />
      <ParkingList />
    </div>
  )
}

export default HomePage

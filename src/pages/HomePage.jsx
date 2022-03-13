import './HomePage.scss';
import React from 'react'
import Footer from '../components/Footer/Footer';
import ViewsFigLeft from '../components/ViewsFigLeft/ViewsFigLeft';
import ViewsFigRight from '../components/ViewsFigRight/ViewsFigRight';
import ViewsFigTopLeft from '../components/ViewsFigTopLeft/ViewsFigTopLeft';
import ViewsFigTopRight from '../components/ViewsFigTopRight/ViewsFigTopRight';
import leftFig from '../figures/views-Parking-bro.svg';
import rigthFig from '../figures/views-navigator-cuate.svg';
import parkingWoman from '../figures/views-Parking-woman.svg';
import ViewsHorizontal from '../components/ViewsHorizontal/ViewsHorizontal';




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
      <ViewsFigLeft title={'El problema'} figure={leftFig} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cupiditate nesciunt hic nam. Magni, illo. Dignissimos at adipisci consequatur? Esse vitae cumque eius vero nihil atque eveniet, nostrum autem voluptatum? Adipisci iste, vel rerum quidem vitae natus voluptas laboriosam atque repudiandae.'}/>

      <ViewsFigRight title={'¿Qué hacemos?'} figure={rigthFig} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cupiditate nesciunt hic nam. Magni, illo. Dignissimos at adipisci consequatur? Esse vitae cumque eius vero nihil atque eveniet, nostrum autem voluptatum? Adipisci iste, vel rerum quidem vitae natus voluptas laboriosam atque repudiandae.'}/>

      <ViewsFigTopLeft title={'¿Cómo lo hacemos?'} figure={parkingWoman} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime assumenda soluta, quaerat mollitia sequi explicabo eaque dolor voluptatum animi dolorum magni beatae laboriosam? Quia, excepturi. Veniam doloremque aperiam deserunt nisi.'}/>

      <ViewsHorizontal />


      <Footer cities={cities} />
    </div>
  )
}

export default HomePage

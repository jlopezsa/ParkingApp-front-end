import React from "react";
import './Footer.scss'

const Footer = (props) => {
  const {cities} = props
  return (
    <div className="container">
      <div className="container__ciudades">
        <label>Ciudades</label><br />
        {
          cities.map((item,idx) => {
            return (
              <div key={idx} className="">
                <a key={idx} href={item.hrefLink}>{item.ciudad}</a>
              </div>
            )
          })
        }
      </div>
      <div className="container__parking">
        <label>ParkingApp</label><br />
        <a href="">Sobre nosotros</a><br />
        <a href="">Contactenos</a><br />
        <a href="">Preguntas?</a><br />
      </div>
      <div className="container_redes">
        <label>Nuestras Redes</label>
      </div>
    </div>
  )
}

export default Footer;

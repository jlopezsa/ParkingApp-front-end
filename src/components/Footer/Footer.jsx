import React from "react";
import './Footer.scss'
import IconFacebook from '../../figures/facebook_icon.svg';
import IconYoutube from '../../figures/youtube_icon.svg';
import IconInstagram from '../../figures/instagram_icon.svg';
import IconTwitter from '../../figures/twitter_icon.svg';

const Footer = (props) => {
  const {cities} = props
  return (
    <div className="container">
      <div className="container__cities">
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
      <div className="container__networks">
        <label>Nuestras Redes</label><br />
        <div className="container__icons">
          <img src={IconFacebook} alt="facebook icon" className="imagen" />
          <img src={IconYoutube} alt="youtube icon" className="imagen" />
          <img src={IconInstagram} alt="instagram icon" className="imagen" />
          <img src={IconTwitter} alt="twitter icon" className="imagen" />
        </div>
      </div>
    </div>
  )
}

export default Footer;

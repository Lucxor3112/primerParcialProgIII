import React, {useState} from 'react';
import { Link } from 'react-scroll';

function Banner() {
    return (
      <>
        <div id='banner'></div>
        <div className="banner">
          <div className="capa"></div>
          <div className="info">
              <h1>En Hugos, sos nuestra prioridad. Deléitate con la mejor comida y disfruta de un servicio excepcional <br /> ¡Te esperamos con gusto y pasión!</h1>
              <hr/>
              <Link to='Card' spy={true} smooth={true} offset={50} duration={500}>Explora nuestro menú</Link>
          </div>
        </div>
      </>
    )
  }
  
  export default Banner
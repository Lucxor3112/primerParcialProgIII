import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <>
        <footer>
            <div>
                <div className='redes'>
                <a className='face' href=""> 
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="">  
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                
                </div>
                <h3 className='logo'>Hugos <FontAwesomeIcon icon={faUtensils} /></h3>
                <p className='copyright'>Copyright© 2022 Hugos, Inc</p>
                <div className='detalle'>
                    <a href="#">Informacion legal</a>
                    <a href="#">Politica de privacidad</a>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
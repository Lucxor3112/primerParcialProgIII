import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll';

function Header() {
  return (
   <>
   <header>
    <div className='logo'>
        <h1>Antojos <FontAwesomeIcon icon={faUtensils} /></h1>
    </div>
    <div className='links'>
       <a href="#">Inicio</a>
       <Link to='Card' spy={true} smooth={true} offset={50} duration={500}>Menu</Link>
       <Link to='Ofertas' spy={true} smooth={true} offset={50} duration={500}>Ofertas</Link>
       <Link to='Tragos' spy={true} smooth={true} offset={50} duration={500}>Tragos</Link>
       <Link to='Formulario' spy={true} smooth={true} offset={50} duration={500}>Formulario</Link>
    </div>
   </header>
   </>
  )
}

export default Header
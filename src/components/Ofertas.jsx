import React from 'react'
import hamburguesa from '../../public/img/hamburguesa.jpg'

function Ofertas() {
  return (
    <>
    <div id='Ofertas'></div>
    <h1 className='subtitulo dos'>Oferta del día</h1>
    <div className='contenedor' >
      <div className='contenedor2'>
          <img src={hamburguesa} alt="lol" />
          <div className='informacion'>
              <h1>Delicia Ibérica</h1>
              <p><span>¡Por tiempo limitado, aprovecha nuestra oferta especial!</span> Por la compra de una Delicia Ibérica, te ofrecemos un <span>20% de descuento</span> en tus acompañamientos favoritos, como nuestras crujientes papas fritas o refrescante ensalada.</p>
              <p>No pierdas la oportunidad de saborear la auténtica esencia de la cocina española con nuestra Delicia Ibérica. <span>¡Visítanos hoy mismo y déjate seducir por esta oferta irresistible!</span></p>        
          </div>
      </div>
    </div>
    
    </>
  )
}

export default Ofertas
import React from 'react'
import sapo from "../../public/img/sapohamberguesa.jpg"

function Ofertas() {
  return (
    <>
    <div className='contenedor' >
    <div className='contenedor2'>
        <img src={sapo} alt="lol" />
        <div className='info'>
            <h1>Delicia Ibérica</h1>
            <p>¡Por tiempo limitado, aprovecha nuestra oferta especial! Por la compra de una Delicia Ibérica, te ofrecemos un 20% de descuento en tus acompañamientos favoritos, como nuestras crujientes papas fritas o refrescante ensalada.</p>
             <p>No pierdas la oportunidad de saborear la auténtica esencia de la cocina española con nuestra Delicia Ibérica. ¡Visítanos hoy mismo y déjate seducir por esta oferta irresistible!</p>        
        </div>
    </div>
    </div>
    
    </>
  )
}

export default Ofertas

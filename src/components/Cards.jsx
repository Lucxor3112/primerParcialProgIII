import React from 'react'
import sangucheVeggie from '../../public/img/sangucheVeggie.jpg'
import hamburguesa from '../../public/img/hamburguesa.jpg'
import sangucheLomo from '../../public/img/sangucheLomo.jpg'
import asado from '../../public/img/asado.jpg'

function Cards() {
  return (
    <>
      <div id='Card'></div>
      <h1 className='subtitulo uno'>Menu</h1>
      <div className='containerCard'>
            <div className='card'>
                <img src={sangucheVeggie} alt="Sanguche"/>
                <div className='detail'>
                  <div>
                    <p className='par uno'>Sandwich</p>
                    <p className='par dos'>Vegano</p>
                  </div>
                  <h4>Veggie Bliss</h4>
                  <p><span>¿Eres vegetariano y buscas una deliciosa opción sin carne?</span> Prueba un platillo único y sabroso preparado con proteína vegetal, cebolla, pimiento, tomate y especias.</p>
                </div>
            </div>
            <div className='card'>
                <img src={hamburguesa} alt="Hamburguesa"/>
                <div className='detail'>
                  <div>
                    <p className='par tres'>Hamburguesa</p>
                    <p className='par cuatro'>España</p>
                  </div>
                  <h4>Delicia Ibérica</h4>
                  <p><span>Disfruta de la auténtica comida española con nosotros.</span> Quesito, morroncitos, tomatito y orégano a la plancha. ¡Delicioso y con muchisimo sabor!</p>
                </div>
            </div>
            <div className='card'>
                <img src={sangucheLomo} alt="Lomito"/>
                <div className='detail'>
                  <div>
                    <p className='par uno'>Sandwich</p>
                  </div>
                  <h4>American cut</h4>
                  <p>Si buscas amor a primera mordida, probá nuestro Lomo Americano. Jugoso y lleno de sabor, este lomito se convertirá en tu favorito. <span>¡No esperes más para probarlo!</span></p>
                </div>
            </div>
            <div className='card'>
                <img src={asado} alt="Asado"/>
                <div className='detail'>
                  <div>
                    <p className='par cinco'>Parrila</p>
                    <p className='par seis'>Argentina</p>
                  </div>
                  <h4>Parrilla criolla</h4>
                  <p><span>¡Ven a disfrutar del sabor auténtico de Argentina en cada bocado!</span> Nuestro asado a la parrilla te espera, ¡sera una experiencia culinaria inolvidable!</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cards
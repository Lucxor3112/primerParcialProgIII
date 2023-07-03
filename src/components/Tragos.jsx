import {useState, useCallback, useEffect} from 'react';
import axios from 'axios';

function Tragos(){
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

    const fetchCocktailHandler = useCallback(()=> {
     setLoading(true);

     axios
     .get(url)
     .then(res=> {
        console.log(res.data);
        setData(res.data.drinks);
     })
     .catch(e => console.log(e))
     .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
       fetchCocktailHandler();
    }, [fetchCocktailHandler]);

    if(loading){
        return <h2 className='cargando'>Cargando...</h2>;
    }

    return( 
        <>
            <h2 id='Tragos' className='subtitulo tragosSubtitulo'>Tragos</h2>
            <div className='containerGeneral'>
                <div className= "tragosContainer">
                    {data.map((cocktail) => (
                        <div className="containerImagen" key={cocktail.idDrink}>
                            <img src={cocktail.strDrinkThumb} alt="#"/>
                        </div>
                    ))}
                    
                    {data.map((cocktail) => (
                        <div className='containerInfo' key={cocktail.idDrink}>
                            <h2 className= "tragosNombre">{cocktail.strDrink}</h2>
                            <p className= "tragosInfo2"> <span>¡Descubre nuestra variedad de tragos artesanales y cócteles clásicos!</span> Desde los clásicos atemporales hasta nuestras propias creaciones de autor, cada trago es una obra maestra de la mixología. <span>También ofrecemos opciones sin alcohol</span> y una selección de cervezas, vinos y licores para maridar con tu comida. <span>¡Ven y disfruta de una experiencia única en nuestro acogedor y elegante entorno!</span></p>
                            {/* <button onClick={fetchCocktailHandler}>Siguiente trago</button> */}
                            <input className='tragosBoton' onClick={fetchCocktailHandler} type="submit" value="Siguiente trago" />
                        </div>
                    ))}     
                </div>
            </div>
        </> 
    );
}

export default Tragos;
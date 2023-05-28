import '../styles/App.css'
import '../styles/Media.css'
import Cards from './Cards.jsx'
import Footer from './Footer'
import Banner from './Banner.jsx'
import Header from './Header'
import Ofertas from './Ofertas'

function App() {
  return (
    <>
      <Banner></Banner>
      <Cards></Cards>
      <Footer></Footer>
      <Header />
      <Ofertas />
     </>
  )
}

export default App

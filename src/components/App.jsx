import '../styles/App.css'
import '../styles/Banner.css'
import '../styles/Cards.css'
import '../styles/Footer.css'
import '../styles/Form.css'
import '../styles/Header.css'
import '../styles/Ofertas.css'
import '../styles/Media.css'
import '../styles/Tragos.css'
import Cards from './Cards.jsx'
import Footer from './Footer'
import Banner from './Banner.jsx'
import Header from './Header'
import Ofertas from './Ofertas'
import Form from './Form'
// import Tragos from './Tragos'

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Cards></Cards>
      <Ofertas></Ofertas>
      {/* <Tragos></Tragos> */}
      <Form></Form>
      <Footer></Footer>
     </>
  )
}

export default App

import Cards  from './components/Cards'
import Footer from './components/footer/Footer';
import UserCarousel from "./components/header/UserCarousel";
import Navbar from './components/navbar/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <>
          <Navbar/>
          <UserCarousel />
          <Cards/>
          <Footer/>
    </>
  )
}

export default App

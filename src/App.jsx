
import Cards  from './components/Cards'
import Footer from './components/footer/Footer';
import UserCarousel from "./components/header/UserCarousel";
import Navbar from './components/navbar/Navbar';

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

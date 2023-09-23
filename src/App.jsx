import "./assets/index.css"

import {CustomerReviews} from "./components/Customer"
import Footer from './components/footer'
import Blog from "./components/Blog"
import {Team} from "./components/Team"
import HowTo from "./components/HowToBuilding"
import ContactForm from "./components/Form"
import Slide from "./components/Slide"
import Header from "./components/Header"

function App() {

  return (
    <>
    <Header/>
    <Slide/>
    <HowTo/>
    <Team/>
    <Blog/>
    <CustomerReviews/>
    <ContactForm/>
    <Footer/>
    
    </>
  )
}

export default App

import react from 'react'
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Contact from "./components/Contact/Contact"
import Experience from "./components/Experience/Experience"
import About from "./components/About/About"
import Portfolio from "./components/Portfolio/Portfolio"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/> 
      <Footer/>
    </>
  )
}

export default App
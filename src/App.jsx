import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';


function App() {
  return (
    <>
      <div>
        <Header />

        <main className="main">
          <Home />
          <About />
          <Skills />
          <Services />
          <Qualification />
          <Testimonials />
          <Contact />
          
        </main>

        <Footer />
        <ScrollUp />
      </div>
    </>
  )
}

export default App

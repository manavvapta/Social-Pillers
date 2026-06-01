import './style.css'
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Lamp from './components/lamp';
import Gallery from './components/Gallery';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

function App() {
  return (
    
     <div style={{ backgroundColor: "#000000" }}>

      <div id="home">
        <Navbar />
        <Hero />
      </div>

      <div id="about">
        <Lamp />
      </div>

      <div id="services">
        <FeatureGrid />
      </div>

      <div id="projects">
        <Gallery />
      </div>

      <div id="contact">
        <Footer />
      </div>

    </div>

  );
}

export default App;
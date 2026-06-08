import './style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Lamp from "./components/Lamp";
import Gallery from './components/Gallery';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';
import Projects from './projects/Projects';

function Home() {
  return (
    <div style={{ backgroundColor: "#000000" }}>
      <div id="home">
        <Navbar />
        <Hero />
      </div>
      <div id="about">
        <Lamp />
      </div>
      <div id="projects">
        <Gallery />
      </div>
      <div id="services">
        <FeatureGrid />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
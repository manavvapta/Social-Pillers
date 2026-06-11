import './style.css'
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Lamp from "./components/Lamp";
import Gallery from './components/Gallery';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';
import Projects from './projects/Projects';
import Preloader from './components/Preloader';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

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
// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CurrentMission from './components/CurrentMission';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-darker text-white">
      <Navbar />
      <Hero />
      <About />
      <CurrentMission />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

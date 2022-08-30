// sito components
import SitoContainer from "sito-container";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Buy from "./sections/Buy";
import Contact from "./sections/Contact";

import "./App.css";

function App() {
  return (
    <SitoContainer>
      <Navbar />
      <Hero />
      <About />
      <Buy />
      <Contact />
      <Footer />
    </SitoContainer>
  );
}

export default App;

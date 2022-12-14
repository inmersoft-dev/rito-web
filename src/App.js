// sito components
import SitoContainer from "sito-container";

// @mui components
import { ThemeProvider, CssBaseline } from "@mui/material";

// theme
import dark from "./assets/theme/dark";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// layouts
import Boss from "./layouts/Boss";

// sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Buy from "./sections/Buy";
import Contact from "./sections/Contact";

import "./App.css";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />
      <SitoContainer flexDirection="column">
        <Navbar />
        <Hero />
        <About />
        <Buy />
        <Boss />
        <Contact />
        <Footer />
      </SitoContainer>
    </ThemeProvider>
  );
}

export default App;

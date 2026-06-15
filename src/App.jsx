import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/project";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects/>

      {/* Selected Works will go here later */}

      <Experience />
      <Certificates />
      <Contact />
      <Footer/>


    </>
  );
}

export default App;
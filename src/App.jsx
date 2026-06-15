import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/project";
import { FaWhatsapp } from "react-icons/fa";


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
      
      <Contact />
      <Footer/>

      <a
  href="https://wa.me/918139055063"
  target="_blank"
  rel="noreferrer"
  className="
    fixed
    bottom-5
    right-5
    w-14
    h-14
    bg-[#8FA684]
    text-white
    rounded-full
    shadow-lg
    flex
    items-center
    justify-center
    hover:scale-110
    transition
    z-50
  "
>
  <FaWhatsapp size={28} />
</a>
    </>
    
  );
  
}

export default App;
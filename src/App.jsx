import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      
    </div>
  );
};

export default App;

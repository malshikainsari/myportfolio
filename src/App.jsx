import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Header />
      <main>
        <section id="home" >
          <Hero />
        </section>
        <section id="skills" >
          <Skills />
        </section>
        <section id="projects" >
          <Projects />
        </section>
        <section id="contact" >
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
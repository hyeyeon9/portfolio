import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <div id="about" className="pt-20">
        <Hero />
      </div>

      <div id="projects" className="pt-20">
        <Projects />
      </div>

      <div id="contact" className="pt-20">
        <Contact />
      </div>
    </div>
  );
}

export default App;

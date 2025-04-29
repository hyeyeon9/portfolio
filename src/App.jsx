import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div >
      <div id="about">
        <Hero />
      </div>

      <div id="projects">
        <Projects />
      </div>
    </div>
  );
}

export default App;

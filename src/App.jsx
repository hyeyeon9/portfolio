import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <div id="about" className="mt-20">
        <Hero />
      </div>

      <div id="projects" className="mt-20">
        <Projects />
      </div>
    </div>
  );
}

export default App;

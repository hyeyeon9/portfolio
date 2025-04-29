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
    </div>
  );
}

export default App;

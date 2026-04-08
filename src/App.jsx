import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f1a] text-gray-200 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500 opacity-20 blur-3xl "></div>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <TechStack />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

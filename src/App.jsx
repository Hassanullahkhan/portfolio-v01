import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;

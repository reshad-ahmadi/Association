import Navbar from "./components/Nav"
import Navigation from "./components/navigation";
import About from "./pages/About";
import Campanys from "./pages/Campanys";
import HeroSection from "./pages/Herosection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import { About } from "./pages/About";
// import { HeroSection } from "./pages/Herosection"

function App() {
  return (
    <div className="bg-[#050505]">
      <Navbar />
      <HeroSection />
      <Navigation/>
      <Campanys/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

import Navbar from "../components/Nav"
import Navigation from "../components/navigation";
import About from "../pages/About";
import Campanys from "../pages/Campanys";
import HeroSection from "../pages/Herosection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-brand-bg">
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

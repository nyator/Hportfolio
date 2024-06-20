import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";



export default function App() {
  return (
    <div className="min-h-screen bg-[#e0eaf4] overflow-hidden font-grotesk">
      <div className="max-w-screen-2xl px-10 mx-auto">
      <Navbar />
      <Hero />
      <Skills />
      <Project /> 
      </div>
      <div className="px-0 mx-auto">
      <Footer />
      </div>
    </div>
  )
}
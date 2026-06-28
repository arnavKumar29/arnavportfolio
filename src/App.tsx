import Nav from './components/Nav';
import Hero from './components/Hero';
import Now from './components/Now';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Ticker from './components/Ticker';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <CustomCursor />
      <Nav />
      <Hero />
      <Now />
      <Ticker text="RAG Pipelines / Autonomous Agents / Full-Stack AI / Product Building / Ship Fast" />
      <About />
      <Experience />
      <Ticker text="Discovery / Spec / Build / Measure / Deploy / Iterate" />
      <Projects />
      <Skills />
      <Ticker text="Open to Work / Let's Collaborate / Building the Future" />
      <Contact />
      <Footer />
    </div>
  );
}

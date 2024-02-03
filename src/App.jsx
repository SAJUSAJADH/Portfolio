import "./App.css";
import Hero from "../src/components/hero";
import Nav from "../src/components/nav";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-slate-100">
      <div className="flex justify-center">
        <Nav />
      </div>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

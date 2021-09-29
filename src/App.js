import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className="body-font bg-cover" style={{ backgroundImage: `url(${"./bg.jpg"})` }}>
      <Navbar />
      <About />
      <Skills />
      <Projects />      
      <Testimonials />
      <Contact />
    </main>
  );
}

import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import WebFont from 'webfontloader';

WebFont.load({
    custom: {
      families: ['Kristi'],
    },
  });

export default function App() {
  return (
    <main className="body-font">
      <Navbar />
      <About />
      <Skills />
      <Projects />      
      <Testimonials />
      <Contact />
    </main>
  );
}

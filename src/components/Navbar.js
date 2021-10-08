import React from "react";
import Zoom from 'react-reveal/Zoom';

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10 text-center pb-6 ">
      <Zoom>
        <a href="#contact"> 
          <img className="mx-auto" src="./slava.webp"/>
        </a>
      </Zoom>
      <nav className="text-green-400 pt-6">
        <a href="#projects" className="mr-5 hover:text-white">
          תיק עבודות
        </a>
        <a href="#skills" className="mr-5 hover:text-white">
          ידע
        </a>
        <a href="#testimonials" className="mr-5 hover:text-white">
          תגובות
        </a>
      </nav>        
    </header>
  );
}

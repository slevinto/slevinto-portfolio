import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10 text-center py-6 ">
           <a href="#about" className="text-7xl text-white font-serif">
          Slava Levinton
         </a>
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

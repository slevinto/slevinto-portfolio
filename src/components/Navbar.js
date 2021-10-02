import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="#about" className="m2-3 text-7xl p-7 text-white mb-4 md:mb-1 font-serif">
          Slava Levinton
          </a>
        <nav className="md:ml-5 md:py-1 md:px-2 md:pl-4 md:border-r md:border-gray-400 flex flex-wrap items-center justify-center text-green-400">
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
      </div>
    </header>
  );
}

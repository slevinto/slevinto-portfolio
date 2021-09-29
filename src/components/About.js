import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center pt-10">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-green-700 float-right">
            פיתוח תוכנה, ווב, מובייל           
            </h1>
          <div className="flex justify-center py-4">
            <a
              href="#contact"
              className="inline-flex text-black bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
             בואו נשוחח                  
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 pt-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              תיק עבודות
            </a>
          </div>
        </div>        
      </div>
    </section>
  );
}

import { CursorClickIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import Fade from 'react-reveal/Fade';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container pb-24 mx-auto">
      <div className="flex flex-wrap -m-4"></div>   
        <div className="text-center text-gray-800">
          <CursorClickIcon className="w-10 inline-block mb-4"/>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
              הפרויקטים שלי 
          </h1>          
        </div>        
          <div className="text-center max-w-sm rounded shadow-lg mx-auto">
            {projects.map((project) => (
              <Fade right cascade>
                <a href={project.link} key={project.image} className="p-4">
                  <img className="mx-auto w-16 h-16" src={project.image}/>                
                  <h1 className="title-font text-lg font-medium text-black mb-3 pt-4">
                      {project.title}
                  </h1>
                  <h2 className="tracking-widest text-md title-font font-semibold text-gray-800 mb-1 pb-1">
                      {project.subtitle}
                  </h2>
                  <p className="leading-relaxed pb-4">{project.description}</p>
                </a>
              </Fade>
            ))}
          </div>          
        </div>      
     </section>
  );
}


import React from "react";
import { projects } from "../data";
import { faMousePointer } from "@fortawesome/free-solid-svg-icons";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Zoom from 'react-reveal/Zoom';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container pb-24 mx-auto">
      <div className="flex flex-wrap -m-4"></div>   
        <div className="text-center text-gray-800">
        <FontAwesomeIcon icon={faMousePointer} className="w-10 inline-block mb-4 text-3xl"/>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
              הפרויקטים שלי 
          </h1>          
        </div>        
          <div className="text-center max-w-sm rounded shadow-lg mx-auto">
            {projects.map((project) => (
              <Zoom right cascade>
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
              </Zoom>
            ))}
          </div>          
        </div>      
     </section>
  );
}

import { CursorClickIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-800 body-font">
        <div className="text-center pt-20 pb-10 text-gray-800">
          <CursorClickIcon className="mx-auto w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            הפרויקטים שלי
          </h1>          
        </div>
        <div className="bg-gradient-to-r from-gray-400 rounded-md shadow-md mx-10 text-center lg:mx-20">
          {projects.map((project) => (
            <a href={project.link} key={project.image} className="p-4">
                <img className="mx-auto pb-4" src={project.image}/>                
                <h1 className="title-font text-lg font-medium text-black mb-3">
                    {project.title}
                </h1>
                <h2 className="tracking-widest text-md title-font font-semibold text-gray-800 mb-1 pb-1">
                    {project.subtitle}
                </h2>
                <p className="leading-relaxed pb-4">{project.description}</p>
            </a>
          ))}
        </div>
     </section>
  );
}

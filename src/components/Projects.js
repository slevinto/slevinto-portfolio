import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-black body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex-col w-full mb-20">
          <CodeIcon className="mx-auto w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black">
            פרויקטים שלי
          </h1>          
        </div>
        <div className="flex flex-wrap">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="lg:w-1/4 w-1/2 w-100 p-4">
              <div className="flex flex-wrap">
                <img
                  alt="gallery"
                  className="w-min-full h-min-full object-center object-contain mb-4 pr-8"
                  src={project.image}
                />
                <div className="relative">
                  <h2 className="tracking-widest text-sm title-font font-semibold text-green-600 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import { AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">      
        <div className="text-center pt-20 pb-10 text-gray-800">
          <AcademicCapIcon className="w-10 inline-block mb-4"/>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            ידע &amp; כלים
          </h1>          
        </div>
        <div className="bg-gray-100 rounded-md shadow-md mx-10 text-center lg:mx-20">
          {skills.map((skill) => (
            <div key={skill} className="p-2">
                <span className="title-font font-medium text-gray-800">
                  {skill}
                </span>
              </div>
            
          ))}
        </div>      
    </section>
  );
}

import React from "react";
import { skills } from "../data";
import { AcademicCapIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from 'react-reveal/Fade';

export default function Skills() {
  return (
    <section id="skills">   
    <div className="container py-24 mx-auto">
      <div className="flex flex-wrap -m-4"></div>   
        <div className="text-center text-gray-800">
          <AcademicCapIcon className="w-10 inline-block mb-4"/>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            ידע &amp; כלים
          </h1>          
        </div>
        <Fade right cascade>
          <div className="text-center max-w-sm rounded shadow-lg mx-auto">
            {skills.map((skill) => (
              <div key={skill.title} className="bg-gray-800 my-8 pt-4">
                  <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <FontAwesomeIcon icon={skill.skillIcon} className="text-green-400 text-3xl"/>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 text-gray-100">
                        {skill.title}
                      </div>
                      <p className="text-gray-400 text-base">
                      {skill.description}
                      </p>
                    </div>                  
                  </div>
              </div>
            ))}
          </div> 
        </Fade> 
        </div>      
    </section>
  );
}

import React from "react";
import { UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";
import Fade from 'react-reveal/Fade';

export default function Testimonials() {
  
  return (
    <section id="testimonials">
      <div className="container pb-24 mx-auto">
      <div className="flex flex-wrap -m-4"></div>   
        <div className="text-center text-gray-800">
          <UsersIcon className="w-10 inline-block mb-4"/>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
              תגובות 
          </h1>          
        </div>
        <Fade right>
          <div className="text-center max-w-sm rounded shadow-lg mx-auto">
            {testimonials.map((testimonial) => (
              <img key={testimonial.image} src={testimonial.image} className="mx-auto m-4 p-4"/>                  
            ))}            
          </div> 
        </Fade> 
        </div>      
    </section>    
  );
}

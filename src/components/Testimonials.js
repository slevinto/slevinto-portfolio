import React from "react";
import { UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4 text-white" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          תגובות
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full" key={testimonial.image}>
              <div className="h-full rounded">
                <div className="flex">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="object-cover object-center"                    
                  />                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>      
    </section>
    
  );
}

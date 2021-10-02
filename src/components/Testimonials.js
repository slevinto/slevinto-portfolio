import React from "react";
import { UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  
  return (
    <section id="testimonials">
      <div className="text-center pt-20 pb-10 text-gray-800">
        <UsersIcon className="w-10 inline-block mb-4"/>
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
          תגובות
        </h1>
        <div className="bg-gray-100 rounded-md shadow-md mx-10 text-center lg:mx-20">
          {testimonials.map((testimonial) => (
            <img key={testimonial.image} src={testimonial.image} className="mx-auto m-4 p-4"/>                  
            ))}
        </div>
      </div>      
    </section>
    
  );
}

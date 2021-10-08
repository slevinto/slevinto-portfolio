import React from "react";
import { UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const properties = {
  duration: 2000,
  transitionDuration: 1000,
  infinite: true,
  arrows: null
};

export default function Testimonials() {  
  return (
    <section id="testimonials">
      <div className="container pb-24 mx-auto">
        <div className="flex flex-wrap -m-4"></div>   
        <div className="text-center text-gray-800">
            <UsersIcon className="w-10 inline-block mb-4"/>
            <h1 className="sm:text-4xl text-3xl font-medium title-font pb-10">
                תגובות 
            </h1>          
        </div>        
        <Slide {...properties}>
           {testimonials.map(testimonial => 
            <div key={testimonial.image}>
                <img className="mx-auto" src={testimonial.image}/>
            </div>            
           )}            
      </Slide>
      </div>      
    </section>    
  );
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";  
import { testimonials } from "../data";
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';

const CarouselUI = ({ children }) => <div className="container mx-auto relative">{children}</div>;
const Carousel = makeCarousel(CarouselUI);

export default function Testimonials() {  
  return (
    <section id="testimonials">
      <div className="container mx-auto">
        <div className="flex flex-wrap -m-4"></div>   
        <div className="text-center text-gray-800">
        <FontAwesomeIcon icon={faUserFriends} className="w-10 inline-block mb-4 text-3xl"/>
            <h1 className="sm:text-4xl text-3xl font-medium title-font pb-10">
                תגובות 
            </h1>          
        </div>        
        <Carousel defaultWait={3000}>
           {testimonials.map(testimonial => 
            <Slide right>
              <div key={testimonial.image}>
                <img className="mx-auto" src={testimonial.image}/>
            </div>  
            </Slide>          
           )}            
        </Carousel>      
      </div>       
    </section>    
  );
}

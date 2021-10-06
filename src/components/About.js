import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto">
        <img className="h-48 w-full object-cover object-center" src="./bg.jpg"/>      
          <div className="rounded shadow-md bg-gray-800 text-center">   
            <h1 className="text-3xl text-green-400 py-8">
                  פיתוח תוכנה, ווב, מובייל           
            </h1>
            <p className="text-center text-gray-400 pb-3">
                  שלום, אני סלבה לוינטון, מהנדסת תוכנה 
            </p>
            <p className="text-center text-gray-400 pb-3">
                  B.Sc in Computer Science, Technion
            </p>
            <p className="text-center text-gray-400 pb-8">          
                  בעלת 20 שנות ניסיון בפיתוח תוכנה
            </p>              
            <div className="py-8 focus:outline-none text-lg">
              <a
                href="#contact"
                className="bg-green-400 hover:bg-green-700 hover:text-white py-2 px-6 rounded">
                       בואו נשוחח                  
              </a>
              <a
                href="#projects"
                className="text-gray-800 bg-gray-400 hover:bg-gray-600 hover:text-white py-2 px-6 rounded">
                       תיק עבודות
              </a>
            </div>
      <div className="rounded shadow-md justify-center flex flex-wrap bg-gray-800">            
        <div className="inline-block w-1/2 text-center">
          <h2 className="text-xl text-green-400 pt-8">
             דוא"ל
          </h2>
          <p className="text-gray-400 py-4"> 
             slevinto@gmail.com
          </p>
        </div>         
        <div className="inline-block w-1/2 text-center">
          <h2 className="text-xl text-green-400 pt-8">
             טלפון
          </h2>
          <p className="text-gray-400 pt-4 pb-8">052-279-6275</p>            
        </div> 
      </div>   
      </div>   
      </div> 
    </section>
  );
}

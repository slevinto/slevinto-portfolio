import React from "react";

export default function About() {
  return (
    <section id="about" className="pt-24  min-h-screen max-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${"./bg.webp"})` }}>      
      <div className="rounded shadow-md">   
      <h1 className="text-3xl text-green-400 bg-gray-800 text-center py-8">
            פיתוח תוכנה, ווב, מובייל           
      </h1>
      <p className="text-center bg-gray-800 text-gray-400 pb-3">
             שלום, אני סלבה לוינטון, מהנדסת תוכנה 
      </p>
      <p className="text-center bg-gray-800 text-gray-400 pb-3">
             B.Sc in Computer Science, Technion
      </p>
      <p className="text-center bg-gray-800 text-gray-400 pb-8">          
            בעלת 20 שנות ניסיון בפיתוח תוכנה
      </p>    
      </div>      
      <div className="py-24 text-center">
            <a
              href="#contact"
              className="text-black bg-green-500 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
             בואו נשוחח                  
            </a>
            <a
              href="#projects"
              className="text-gray-400 bg-gray-800 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
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
    </section>
  );
}

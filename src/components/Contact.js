import React from "react";
import { useState } from 'react';
import { send } from 'emailjs-com';

export default function Contact() {

  const textName = React.useRef();
  const textEmail = React.useRef();
  const textTelephone = React.useRef();
  const textMessage = React.useRef();

  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    telephone: '',
    message: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_o62ibfp',
      'template_t7cxkv2',
      toSend,
      'user_8aS9Bn1TKdaoa72Y7ybKr'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        textName.current.value = "";
        textEmail.current.value = "";
        textTelephone.current.value = "";
        textMessage.current.value = "";
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });    
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative bg-gray-100">
      
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
      <form onSubmit={onSubmit}
          netlify="true"
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 pr-8 pl-20">          
          <h2 className="text-black sm:text-4xl text-3xl mb-1 font-medium title-font">
            בואו נדבר!
          </h2>
          <p className="leading-relaxed mb-5">
            תשאירו פרטים ואחזור אליכם בהקדם 
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              שם
            </label>
            <input
              ref={textName}
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-200 rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={toSend.name}
              onChange={handleChange}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              דוא"ל
            </label>
            <input
              ref={textEmail}
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-200 rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={toSend.email}
              onChange={handleChange}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="telephone" className="leading-7 text-sm text-gray-400">
              טלפון
            </label>
            <input
              ref={textTelephone}
              type="telephone"
              id="telephone"
              name="telephone"
              className="w-full bg-gray-200 rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={toSend.telephone}
              onChange={handleChange}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              הודעה
            </label>
            <textarea
              ref={textMessage}
              id="message"
              name="message"
              className="w-full bg-gray-200 rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              value={toSend.message}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            שלח
          </button>
        </form>
        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">          
          <div className="bg-gray-200 rounded shadow-md px-4">            
              <h2 className="title-font font-semibold text-gray tracking-widest text-xs mt-4">
                כתובת
              </h2>
              <a className="text-indigo-700 leading-relaxed">
                קיבוץ אל-רום 
              </a> 
              <br></br>
              <a className="text-indigo-700 leading-relaxed">
                ד.נ. צפון רמת הגולן 12466
              </a>           
              <h2 className="title-font font-semibold text-gray tracking-widest text-xs mt-4">
                דוא"ל
              </h2>
              <a className="text-indigo-700 leading-relaxed">
                slevinto@gmail.com
              </a>
              <h2 className="title-font font-semibold text-gray tracking-widest text-xs mt-4">
                טלפון
              </h2>
              <p className="leading-relaxed text-indigo-700">052-279-6275</p>            
          </div>
          <iframe
            width="50%"
            height="50%"
            title="map"
            className="border-2"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            src="https://www.google.com/maps/embed/v1/place?q=Zimmer+el-rom&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>        
      </div>
    </section>
  );
}
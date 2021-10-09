import React from "react";
import { useState } from 'react';
import { send } from 'emailjs-com';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";  

export default function Contact() {

  const textName = React.useRef();
  const textEmail = React.useRef();
  const textTelephone = React.useRef();
  const textMessage = React.useRef();
  const btnSubmit = React.useRef();

  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    telephone: '',
    message: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    btnSubmit.current.setAttribute("disabled", "disabled");
    btnSubmit.current.style.backgroundColor = "gray";
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
        btnSubmit.current.removeAttribute("disabled");
        btnSubmit.current.style.backgroundColor = "indigo";
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });    
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact">     
      <div className="container mx-auto relative top-48 lg:top-80">
         
        <div className="text-center text-gray-800">
        <FontAwesomeIcon icon={faPhone} className="w-10 inline-block mb-4 text-3xl"/>
            <h1 className="sm:text-4xl text-3xl font-medium title-font pb-2">
            בואו נדבר! 
            </h1>     
            <p className="leading-relaxed text-gray-400">
          השאירו פרטים ואחזור אליכם בהקדם 
          </p>     
        </div>        
      <form onSubmit={onSubmit} netlify="true" name="contact"
          className="lg:w-1/3 md:w-1/2 mt-8 mx-auto px-6">          
          
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
          <div className="pb-4">
            <button
            ref={btnSubmit}
            type="submit"
            className="text-green-900 bg-green-400 py-2 border-0 px-6 rounded text-lg">
            שלח
          </button>
          </div>  
        </form>  
        </div>            
      </section>
  );
}
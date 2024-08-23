"use client"
import Image from "next/image";
import { useState } from "react";

const Form = () => {

  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });


  // handle changes
  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData (prevFormData => {
      return {
        ...prevFormData,
        [name] : value
      }
    })
  }

  // hand submit
  
  return (
    <section className='relative w-full h-[450px] lg:h-[350px]'>

      {/* Image as Background */}
      <Image 
        src="/Vector.png"
        layout="fill"
        // objectFit="contain"
        alt="background image"
        className="object-contain"
      /> 
      
      {/* Form positioned on top of the image */}
      <form className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center  ">
        
        {/* name and Phone */}
        <div className="flex flex-wrap mb-6 w-full max-w-lg">
          <div className="w-full lg:w-1/2 px-3 mb-6 lg:mb-0">
            <input 
              className="appearance-none block w-full text-white bg-white bg-opacity-25 border border-light-blue-600 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:bg-opacity-50 focus:border-blue-500"  
              type="text" 
              placeholder="Full Name" 
              required
              name='name'
              value={formData.full_name}
              onChange={handleChange}
            />
          </div>
          <div className="w-full lg:w-1/2 px-3">
            <input 
              className="appearance-none block w-full text-white bg-white bg-opacity-25 border border-light-blue-600 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:bg-opacity-50 focus:border-blue-500" 
              type="number"
              placeholder="Enter Phone No"
              required
              name='phone'
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Phone and Email */}
        <div className="flex flex-wrap mb-6 w-full max-w-lg">
          <div className="w-full lg:w-1/2 px-3 mb-6 lg:mb-0">
            <input 
              className="appearance-none block w-full text-white bg-white bg-opacity-25 border border-light-blue-600 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:bg-opacity-50 focus:border-blue-500"  
              type="email" 
              placeholder="Enter Email Address" 
              required
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="w-full lg:w-1/2 px-3">
            <input 
              className="appearance-none block w-full text-white bg-white bg-opacity-25 border border-light-blue-600 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:bg-opacity-50 focus:border-blue-500" 
              type="text"
              placeholder="Subject"
              required
              name='subject'
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Message */}
        <div className="w-full max-w-lg mb-6 px-3">
          <textarea 
            id="message" 
            rows="4" 
            className="appearance-none block w-full text-white bg-white bg-opacity-25 border border-light-blue-600 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:bg-opacity-50 focus:border-blue-500" 
            placeholder="Leave a Message..." 
            required
            name='message'
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className='flex justify-center w-full px-3'>
          <button 
            type="submit" 
            className="w-full lg:w-2/4 text-white bg-gradient-to-r from-cyan-300 to-light-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:text-xl px-5 py-2 text-center"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;

"use client"
import Image from "next/image";

const Form = () => {
  return (
    <section className='relative w-full h-[450px] lg:h-[350px]'>
      {/* Image as Background */}
      <Image 
        src="/Vector.png"
        layout="fill"
        objectFit="contain"
        alt="background image"
        className="object-contain"
      />  
      
      {/* Form positioned on top of the image */}
      <form className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center  ">
        {/* Name */}
        <div className="flex flex-wrap mb-6 w-full max-w-lg">
          <div className="w-full px-3">
            <input 
              className="appearance-none block w-full text-white bg-white bg-opacity-25 border border-light-blue-500 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:bg-opacity-50 focus:border-blue-500" 
              type="text" 
              placeholder="Full Name" 
              name="full_name"
              required
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
            />
          </div>
          <div className="w-full lg:w-1/2 px-3">
            <input 
              className="appearance-none block w-full text-white bg-white bg-opacity-25 border border-light-blue-600 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:bg-opacity-50 focus:border-blue-500" 
              type="number"
              placeholder="Enter Phone No"
              required
              name='phone'
            />
          </div>
        </div>
        {/* Message */}
        <div className="w-full max-w-lg mb-6 px-3">
          <textarea 
            id="message" 
            rows="4" 
            className="block w-full p-2 text-sm text-white bg-white bg-opacity-25 rounded-lg border border-light-blue-600 focus:ring-blue-500 focus:outline-none focus:border-blue-500 focus:bg-white focus:bg-opacity-50" 
            placeholder="Leave a Message..." 
            required
            name='message'
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

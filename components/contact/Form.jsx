"use client"
import Image from "next/image";
import { useState } from "react";

const Form = () => {
  // State for form data
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle changes in form fields
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update state only if value has changed
    setFormData((prevFormData) => {
      if (prevFormData[name] !== value) {
        return { ...prevFormData, [name]: value };
      }
      return prevFormData;
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation check (basic example)
    if (!formData.full_name || !formData.email || !formData.message) {
      console.error("Please fill out all required fields.");
      // Optionally show a user-friendly message here
      return;
    }

    try {
      // Post data to server
      const response = await fetch("https://portfolio-backend-1kqj.onrender.com/api/Contacts/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to Submit!");
      }

      const result = await response.json();
      console.log(result);

      // Reset form data
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Show success toast
      // toast.success("Form submitted successfully!");

    } catch (error) {
      console.error("Error submitting form:", error);

      // Show error toast
      // toast.error("Apologies, there seems to be an error in processing your request. Please try again later.");
    }
  };

  return (
    <section className='relative w-full h-[450px] lg:h-[350px]'>

      {/* Image as Background */}
      <Image 
        src="/Vector.png"
        layout="fill"
        alt="background image"
        className="object-contain"
      />

      {/* Form positioned on top of the image */}
      <form  onSubmit={handleSubmit} className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center" >

        {/* Name and Phone */}
        <div className="flex flex-wrap mb-6 w-full max-w-lg">
          <div className="w-full lg:w-1/2 px-3 mb-6 lg:mb-0">
            <input
              className="appearance-none block w-full text-white bg-white bg-opacity-25 border border-light-blue-600 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:bg-opacity-50 focus:border-blue-500"
              type="text"
              placeholder="Full Name"
              required
              name='full_name'
              aria-label="Full Name"
              value={formData.full_name}
              onChange={handleChange}
            />
          </div>
          <div className="w-full lg:w-1/2 px-3">
            <input
              className="appearance-none block w-full text-white bg-white bg-opacity-25 border border-light-blue-600 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:bg-opacity-50 focus:border-blue-500"
              type="tel"
              placeholder="Enter Phone No"
              required
              name='phone'
              aria-label="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Email and Subject */}
        <div className="flex flex-wrap mb-6 w-full max-w-lg">
          <div className="w-full lg:w-1/2 px-3 mb-6 lg:mb-0">
            <input
              className="appearance-none block w-full text-white bg-white bg-opacity-25 border border-light-blue-600 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:bg-opacity-50 focus:border-blue-500"
              type="email"
              placeholder="Enter Email Address"
              required
              name='email'
              aria-label="Email Address"
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
              aria-label="Subject"
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
            aria-label="Message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
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

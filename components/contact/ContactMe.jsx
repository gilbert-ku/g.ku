"use client"
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactMe = () => {
  return (
    <>
        <section className='mx-24 bg-gray-900 rounded-lg text-white mt-10'>

            <div className="mx-5 w-1/3 py-5"> 
                <h1 className="font-serif text-2xl">Get in Touch.</h1>
                <h1 className="font-serif text-3xl font-semibold">Let’s Talk For your <span className="text-light-blue-600">Next Projects</span></h1>
                <p className="md:text-xl">To discuss a project or just to say hi, feel free to connect with me via email, phone call, or through my social media handles.</p>
                <h1 className="md:text-xl my-3">Tel: +254 726545820</h1>
                <h1 className="md:text-xl my-3">Email: gilbert45ku@gmail.com</h1>

                {/* icons */}
                <div className="flex text-blue-500 mt-1 md:mt-3">
                <FaGithub className="me-2 md:me-3 text-2xl text-blue-500"/>
                <FaLinkedinIn className="mx-2 md:mx-3 text-2xl md:text-3xl"/>
                <FaTwitter className="mx-2 md:mx-3 text-2xl md:text-3xl"/>
                <FaWhatsapp className="mx-2 md:mx-3 text-2xl md:text-3xl"/>
                <MdEmail className="ms-2 md:ms-3 text-2xl md:text-3xl "/>
              </div>
            </div>

        </section>
    </>
  )
}

export default ContactMe
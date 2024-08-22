
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { MdCall, MdOutlineMarkAsUnread } from "react-icons/md";
import { MdEmail } from "react-icons/md";

import Form from "./Form";
import Link from "next/link";

const ContactMe = () => {
  return (
    <section className='mx-5 md:mx-12 lg:mx-24 bg-gray-900 rounded-lg text-white mt-10 p-5 lg:flex justify-between items-center' id="Contacts">
      <div className="lg:w-1/3 py-5">
        <h1 className="font-serif text-2xl pb-2 lg:pb-5">Get in Touch.</h1>
        <h1 className="font-serif text-3xl font-semibold pb-2 lg:pb-5">Let’s Talk About Your <span className="text-light-blue-600">Next Project</span></h1>
        <p className="md:text-xl">To discuss a project or just to say hi, feel free to connect with me via email, phone call, or through my social media handles.</p>

        <h1 className="md:text-xl my-2 flex items-center"> 
          <span className="pr-5 text-3xl"><MdCall /></span>Tel: +254 726545820
        </h1>
        <h1 className="md:text-xl my-2 flex items-center"> 
          <span className="pr-5 text-3xl"><MdOutlineMarkAsUnread/></span>Email: gilbert45ku@gmail.com
        </h1>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start mx-auto mt-3 md:mt-6">
            <div className="flex  mt-1 md:mt-3">
              <Link href="https://github.com/gilbert-ku" target="_blank" className="text-light-blue-600 hover:text-white hover:-translate-y-1 hover:scale-110 duration-300"> 
                <FaGithub className="mx-2 text-2xl md:text-3xl" aria-label="GitHub" />
              </Link>
                <Link href="https://www.linkedin.com/in/gilbert-kutoto/" target="_blank" className="text-light-blue-600 hover:text-white hover:-translate-y-1 hover:scale-110 duration-300"> 
              <FaLinkedinIn className="mx-2 text-2xl md:text-3xl" aria-label="LinkedIn" />
              </Link>
              <Link href="https://x.com/gilbert45dope/" target="_blank" className="text-light-blue-600 hover:text-white hover:-translate-y-1 hover:scale-110 duration-300"> 
                <FaTwitter className="mx-2 text-2xl md:text-3xl" aria-label="Twitter" />
              </Link>
              <Link href="https://wa.me/phonenumber?text=Hi%20Gilbert!%20I%20came%20across%20your%20portfolio%20and%20was%20really%20impressed.%20I'd%20love%20to%20connect%20and%20learn%20more%20about%20your%20work!" target="_blank" className="text-light-blue-600 hover:text-white hover:-translate-y-1 hover:scale-110 duration-300"> 
                <FaWhatsapp className="mx-2 text-2xl md:text-3xl" aria-label="WhatsApp" />
              </Link>
              <Link href="mailto: gilbert45ku@gmail.com" target="_blank" className="text-light-blue-600 hover:text-white hover:-translate-y-1 hover:scale-110 duration-300"> 
                <MdEmail className="mx-2 text-2xl md:text-3xl" aria-label="Email" />
              </Link>
              
            </div>
          </div>
      </div>
      <div className="lg:w-2/3 mt-5 lg:mt-0">
        <Form />
      </div>
    </section>
  );
};

export default ContactMe;
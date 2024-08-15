
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { MdCall, MdOutlineMarkAsUnread } from "react-icons/md";
import Form from "./Form";

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

        {/* Social Icons */}
        <div className="flex text-blue-500 mt-4 md:mt-8 space-x-3">
          <FaGithub className="text-2xl md:text-3xl"/>
          <FaLinkedinIn className="text-2xl md:text-3xl"/>
          <FaTwitter className="text-2xl md:text-3xl"/>
          <FaWhatsapp className="text-2xl md:text-3xl"/>
        </div>
      </div>
      <div className="lg:w-2/3 mt-5 lg:mt-0">
        <Form />
      </div>
    </section>
  );
};

export default ContactMe;
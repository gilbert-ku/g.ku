

// import ProjectsLists  from './ProjectsLists'
import { MdNavigateNext } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";


const Projects = () => {
  return (
    <>
      <div className='text-white container mx-auto mt-5 md:mt-12' id='Projects'>
        <h1 className=' mx-5 text-center text-xl md:text-3xl lg:text-5xl my-5 md:my-12 font-semibold'>
          Latest Works 
          <br />
          Explore My Popular <span className='text-light-blue-600 '>Projects</span>
        </h1>
        {/* <ProjectsLists /> */}

        {/* storeFront web app*/}
        <div className="md:flex px-4 md:px-0">
          <Image
          src="/storefront.png"
          width={500}
          height={300}
          alt="EstateEase Mobile App"
          loading="lazy"
          className="w-full md:w-1/2"
          />

            <div className='md:ml-5 lg:ml-10 my-auto md:pr-5 lg:pr-3'>
              <h1 className='text-xl md:text-2xl text-light-blue-600 font-semibold mb-2 md:mb-5'>StoreFront e-commerce</h1>
              <p className='md:text-xl lg:text-2xl'>Storefront is a web-based e-commerce app built with React.js, TypeScript, and Tailwind CSS. It fetches product data from a fake API and includes features like product display, a detailed product page, add-to-cart functionality, and local storage for state management. The project showcases efficient state handling and a responsive UI.</p>
              
            <Link href="https://storefront-vcdx.onrender.com/" target='_blank' 
              className='text-light-blue-600 text-xl md:text-2xl font-semibold md:font-bold mt-1 md:mt-5 lg:mt-9 p-1 bg-blue-gray-900 w-full md:w-16 h-full md:h-16 rounded-2xl flex justify-center items-center align-bottom'> 
                <button className='pr-4 my-auto font-serif font-bold text-xl text-light-blue-600 md:hidden'>go live</button><FaExternalLinkAlt />
            </Link>
            </div>
        </div>

        {/* projects blue eye insurance */}
        <div className="md:flex mt-3 md:mt-12 px-4 md:px-0">

          {/* responsive */}

          <Image
          src="/blueinsu.png"
          width={500}
          height={300}
          alt="blue eye insurance"
          loading="lazy"
          className="w-full md:w-1/2 md:hidden block"
          />

          <div className='md:ml-5 lg:ml-0 my-auto md:pr-5 lg:pr-3'>
            <h1 className='text-xl md:text-2xl text-light-blue-600 font-semibold mb-2 md:mb-5'>Blue Eye Insurance Agency</h1>
            <p className='md:text-xl lg:text-2xl'>Blue Eye Insurance Agency is a web app for financial advisors that allows them to generate personalized leads, schedule meetings, and share financial content with clients through a blog section.</p>
            {/* <button className='mt-3 md:mt-5 lg:mt-9 p-3 bg-blue-gray-900 w-full md:w-16 h-full md:h-16 rounded-full flex justify-center items-center align-bottom'>
              <h1 className='pr-4 my-auto font-serif font-bold text-xl text-light-blue-600 md:hidden'>go live</h1>
              <Link href="https://blue-eye-insurance-agency.vercel.app/" target='_blank' className='text-light-blue-600 text-xl md:text-2xl font-semibold md:font-bold flex'> <h1 className='pr-4 my-auto font-serif font-bold text-xl text-light-blue-600 md:hidden'>go live</h1><FaExternalLinkAlt /></Link>
            </button> */}
            <Link href="https://blue-eye-insurance-agency.vercel.app/" target='_blank' 
            className='text-light-blue-600 text-xl md:text-2xl font-semibold md:font-bold mt-1 md:mt-5 lg:mt-9 p-1 bg-blue-gray-900 w-full md:w-16 h-full md:h-16 rounded-2xl flex justify-center items-center align-bottom'> 
              <button className='pr-4 my-auto font-serif font-bold text-xl text-light-blue-600 md:hidden'>go live</button><FaExternalLinkAlt />
            </Link> 
          </div>

          <Image
          src="/blueinsu.png"
          width={500}
          height={300}
          alt="blue eye insurance"
          loading="lazy"
          className="w-full md:w-1/2 hidden md:block"
          />
        </div>
        
        {/* estateease web app */}
        <div className="md:flex mt-3 md:mt-12 px-4 md:px-0">
          <Image
          src="/estateweb.png"
          width={500}
          height={300}
          alt="EstateEase Mobile App"
          loading="lazy"
          className="w-full md:w-1/2"
          />

            <div className='md:ml-5 lg:ml-10 my-auto md:pr-5 lg:pr-3'>
              <h1 className='text-xl md:text-2xl text-light-blue-600 font-semibold mb-2 md:mb-5'>EstateEase App (Web App)</h1>
              <p className='md:text-xl lg:text-2xl'>A real estate management platform with secure user authentication, property browsing, and listing capabilities. Tenants can manage leases, make online payments, and access invoices through a dedicated dashboard.</p>
              
              <Link href="https://estateeaseapp.onrender.com/" target='_blank' 
              className='text-light-blue-600 text-xl md:text-2xl font-semibold md:font-bold mt-1 md:mt-5 lg:mt-9 p-1 bg-blue-gray-900 w-full md:w-16 h-full md:h-16 rounded-2xl flex justify-center items-center align-bottom'> 
                <button className='pr-4 my-auto font-serif font-bold text-xl text-light-blue-600 md:hidden'>go live</button><FaExternalLinkAlt />
              </Link>
            </div>
        </div>

        {/* projects stigma support */}
        <div className="md:flex mt-3 md:mt-12 px-4 md:px-0">

          {/* responsive image */}

          <Image
          src="/stigma.png"
          width={500}
          height={300}
          alt="stigma support"
          loading="lazy"
          className="w-full md:w-1/2 md:hidden block"
          />

          <div className='md:ml-5 lg:ml-0 my-auto md:pr-5 lg:pr-3'>
            <h1 className='text-xl md:text-2xl text-light-blue-600 font-semibold mb-2 md:mb-5'>HIV/AIDS Stigma Support Group</h1>
            <p className='md:text-xl lg:text-2xl'>Together, we can end the stigma! We envision a world where no one faces discrimination for having HIV/AIDS. We aim to foster compassion and understanding by sharing stories and raising voices. Join us in creating a stigma-free world.</p>
            {/* <button className='mt-3 md:mt-5 lg:mt-9 p-3 bg-blue-gray-900 w-full md:w-16 h-full md:h-16 rounded-full flex justify-center items-center align-bottom'> */}
              {/* <h1 className='pr-4 my-auto font-serif font-bold text-xl text-light-blue-600 md:hidden'>go live</h1> */}
              <Link href="https://stigmasupport.onrender.com/" target='_blank' 
              className='text-light-blue-600 text-xl md:text-2xl font-semibold md:font-bold mt-1 md:mt-5 lg:mt-9 p-1 bg-blue-gray-900 w-full md:w-16 h-full md:h-16 rounded-2xl flex justify-center items-center align-bottom'> 
                <button className='pr-4 my-auto font-serif font-bold text-xl text-light-blue-600 md:hidden'>go live</button><FaExternalLinkAlt />
              </Link>
            {/* </button> */}
          </div>

          <Image
          src="/stigma.png"
          width={500}
          height={300}
          alt="stigma support"
          loading="lazy"
          className="w-full md:w-1/2 hidden md:block"
          />
        </div>


        <div className="md:flex mt-3 md:mt-12 px-4 md:px-0">
          <Image
          src="/estateApp.png"
          width={500}
          height={300}
          alt="EstateEase Mobile App"
          loading="lazy"
          className="w-full md:w-1/2"
          />

            <div className='md:ml-5 lg:ml-10 my-auto md:pr-5 lg:pr-3'>
              <h1 className='text-xl md:text-2xl text-light-blue-600 font-semibold mb-2 md:mb-5'>EstateEase App (IOS/Android)</h1>
              <p className='md:text-xl lg:text-2xl'>A real estate management platform with secure user authentication, property browsing, and listing capabilities. Tenants can manage leases, make online payments, and access invoices through a dedicated dashboard. Still under development.</p>
              
            <Link href="https://github.com/gilbert-ku/EstateEase-mobileApp" target='_blank' 
              className='text-light-blue-600 text-xl md:text-2xl font-semibold md:font-bold mt-1 md:mt-5 lg:mt-9 p-1 bg-blue-gray-900 w-full md:w-16 h-full md:h-16 rounded-2xl flex justify-center items-center align-bottom'> 
                <button className='pr-4 my-auto font-serif font-bold text-xl text-light-blue-600 md:hidden'>go live</button><FaExternalLinkAlt />
            </Link>
            </div>
        </div>
        
        <div className='my-5 flex justify-center items-center md:mt-10'>
          <Link href="projects">
          <button className=" p-2 rounded-md font-semibold my-3 nd:my-5 px-5 bg-gradient-to-r from-cyan-300 to-light-blue-600 flex">View More Projects <MdNavigateNext className='my-auto font-extrabold'/></button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Projects



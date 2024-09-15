

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

        {/* projects mobile app */}
        <div className="md:flex">
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
              <button className='mt-3 md:mt-5 lg:mt-9 p-3 bg-blue-gray-900 w-full md:w-16 h-full md:h-16 rounded-full flex justify-center items-center align-bottom'>
                {/* <h1 className='pr-4 my-auto font-serif font-bold text-xl text-light-blue-600 md:hidden'>go live</h1> */}
                <Link href="https://github.com/gilbert-ku/EstateEase-mobileApp" target='_blank' className='text-light-blue-600 text-xl md:text-2xl font-semibold md:font-bold flex'> <h1 className='pr-4 my-auto font-serif font-bold text-xl text-light-blue-600 md:hidden'>go live</h1><FaExternalLinkAlt /></Link>
              </button>
            </div>
        </div>

        {/* projects blue eye insurance */}
        <div className="md:flex mt-12">

          <div className='md:ml-5 lg:ml-10 my-auto md:pr-5 lg:pr-3'>
            <h1 className='text-xl md:text-2xl text-light-blue-600 font-semibold mb-2 md:mb-5'>Blue Eye Insurance Agency</h1>
            <p className='md:text-xl lg:text-2xl'>Blue Eye Insurance Agency is a web app for financial advisors that allows them to generate personalized leads, schedule meetings, and share financial content with clients through a blog section.</p>
            <button className='mt-3 md:mt-5 lg:mt-9 p-3 bg-blue-gray-900 w-full md:w-16 h-full md:h-16 rounded-full flex justify-center items-center align-bottom'>
              {/* <h1 className='pr-4 my-auto font-serif font-bold text-xl text-light-blue-600 md:hidden'>go live</h1> */}
              <Link href="https://blue-eye-insurance-agency.vercel.app/" target='_blank' className='text-light-blue-600 text-xl md:text-2xl font-semibold md:font-bold flex'> <h1 className='pr-4 my-auto font-serif font-bold text-xl text-light-blue-600 md:hidden'>go live</h1><FaExternalLinkAlt /></Link>
            </button>
          </div>

          <Image
          src="/blueinsu.png"
          width={500}
          height={300}
          alt="blue eye insurance"
          loading="lazy"
          className="w-full md:w-1/2"
          />
        </div>
        
        <div className='my-5 flex justify-center items-center'>
          <Link href="projects">
          <button className=" p-2 rounded-md font-semibold my-3 nd:my-5 px-5 bg-gradient-to-r from-cyan-300 to-light-blue-600 flex">View More Projects <MdNavigateNext className='my-auto font-extrabold'/></button>
          </Link>
          
        </div>
      </div>
    </>
  )
}

export default Projects



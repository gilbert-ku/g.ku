

import ProjectsLists  from './ProjectsLists'
import { MdNavigateNext } from "react-icons/md";

const Projects = () => {
  return (
    <>
      <div className='text-white container mx-auto mt-5 md:mt-12' id='Projects'>
        <h1 className=' mx-5 text-center text-xl md:text-3xl lg:text-5xl my-5 md:my-12 font-semibold'>
          Latest Works 
          <br />
          Explore My Popular <span className='text-light-blue-600 '>Projects</span>
        </h1>
        <ProjectsLists />
        <div className='my-5 flex justify-center items-center'>
          <button className=" p-2 rounded-md font-semibold my-3 nd:my-5 px-5 bg-gradient-to-r from-cyan-300 to-light-blue-600 flex">View More Projects <MdNavigateNext className='my-auto font-extrabold'/></button>
        </div>
      </div>
    </>
  )
}

export default Projects



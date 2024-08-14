

import ProjectsLists  from './ProjectsLists'

const Projects = () => {
  return (
    <>
      <div className='text-white container mx-auto'>
        <h1 className=' mx-5 md:text-center text-xl md:text-2xl lg:text-3xl my-5 font-semibold'>
          Latest Works 
          <br />
          Explore My Popular <span className='text-light-blue-600 '>Projects</span>
        </h1>
        <ProjectsLists />
      </div>
    </>
  )
}

export default Projects



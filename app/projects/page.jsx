// import Projects from '@/components/projects/Projects'
// import  from '@/components/projects/ProjectsLists';
import dynamic from 'next/dynamic';
const Projects = dynamic(() => import("@/components/projects/Projects"));
const ProjectsLists = dynamic(() => import("@/components/projects/ProjectsLists"));


const ProjectsPage = () => {
  return (
    <>
    {/* <Projects/> */}
    <ProjectsLists />
    </>
  )
}

export default ProjectsPage
// import Projects from '@/components/projects/Projects'
import dynamic from 'next/dynamic';
const Projects = dynamic(() => import("@/components/projects/Projects"));


const ProjectsPage = () => {
  return (
    <>
    <Projects/>
    </>
  )
}

export default ProjectsPage
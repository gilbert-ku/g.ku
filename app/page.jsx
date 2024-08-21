
import dynamic from 'next/dynamic';
const HomePage = dynamic(() => import("@/components/home/HomePage"));
const About = dynamic(() => import("@/components/about/About"));
const Skills = dynamic(() => import("@/components/skills/Skills"));
const ServicesOffered = dynamic(() => import("@/components/servicesOffered/Services"));
const Projects = dynamic(() => import("@/components/projects/Projects"));
const ContactMe = dynamic(() => import("@/components/contact/ContactMe"));



const Home= () => {
  return (
    
    <>
      <HomePage />
      <About />
      <Skills />
      <ServicesOffered />
      <Projects />
      <ContactMe />
     
    </>
  );
}

export default Home



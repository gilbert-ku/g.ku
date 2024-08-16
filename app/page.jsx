
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import ServicesOffered from "@/components/servicesOffered/Services";
import Projects from "@/components/projects/Projects";
import HomePage from "@/components/home/HomePage";
import ContactMe from "@/components/contact/ContactMe";
import Footer  from "@/components/footer/Footer";


const Home= () => {
  return (
    
    <>
      <HomePage />
      <About />
      <Skills />
      <ServicesOffered />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default Home



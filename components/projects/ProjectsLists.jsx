
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";


const getProjects = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/Projects/', {
        // next: {
        //     revalidate:0
        // }
      });
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await res.json();
      if (data.projects && Array.isArray(data.projects)) {
        return data.projects;
      } else {
        throw new Error('Expected an array of projects, but got something else');
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  };

const ProjectsLists = async () => {
  const projects = await getProjects();

  if (Array.isArray(projects)) {
    return (
      <section className="text-white">
        
        {projects.map((project) => (
          <div key={project.uuid} className="text-white mx-5 lg:mx-0 lg:flex my-5">
            <Image 
            src={`http://127.0.0.1:8000${project.image}`}
            width={500}
            height={400}
            alt={project.title}
            />
            <div className='md:ml-5 lg:ml-10 my-auto md:pr-5 lg:pr-3'>
              <h1 className='text-xl md:text-2xl text-light-blue-600 font-semibold mb-2 md:mb-5'>{project.title}</h1>
              <p className='md:text-xl lg:text-2xl'>{project.desctiption}</p>
              <button className='mt-3 md:mt-5 lg:mt-9 p-3 bg-blue-gray-900 w-full md:w-16 h-full md:h-16 rounded-full flex justify-center items-center align-bottom'>
                {/* <h1 className='pr-4 my-auto font-serif font-bold text-xl text-light-blue-600 md:hidden'>go live</h1> */}
                <Link href={project.url_link} target='_blank' className='text-light-blue-600 text-xl md:text-2xl font-semibold md:font-bold flex'> <h1 className='pr-4 my-auto font-serif font-bold text-xl text-light-blue-600 md:hidden'>go live</h1><FaExternalLinkAlt /></Link>
              </button>
            </div>
          </div>
        ))}
      </section>
    );
  } else {
    return <p>Invalid data: {JSON.stringify(projects)}</p>;
  }
};

export default ProjectsLists;
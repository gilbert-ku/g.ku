
import Image from 'next/image';
import React from 'react';

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
        <h1>Projects lists</h1>
        {projects.map((project) => (
          <div key={project.uuid} className="text-white">
            <h1>{project.title}</h1>
            <Image 
            src={`http://127.0.0.1:8000${project.image}`}
            width={500}
            height={400}
            alt='real estate'
            />
            <p>{project.desctiption}</p>
            <a href={project.url_link}> Link</a>
          </div>
        ))}
      </section>
    );
  } else {
    return <p>Invalid data: {JSON.stringify(projects)}</p>;
  }
};

export default ProjectsLists;
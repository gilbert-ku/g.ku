"use client";

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const BlogDetails = () => {
  const { blog } = useParams();

  const [blogData, setBlogData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!blog) return;

    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/Blog/${blog}`);
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);

        const data = await response.json();
        setBlogData(data.blogs); // Update the state with the nested 'blogs' object
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBlog();
  }, [blog]);

  if (!blogData && !error) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
    <div className='text-white'>
      <Image 
        src={`http://127.0.0.1:8000${blogData.image}`}
        width={500}
        height={200}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading='lazy'
        alt={blog.title}
        className="object-scale-down w-full md:h-72 object-center"
        />
      <h1>{blogData.title}</h1>
      <p>{blogData.blog_text}</p>
      {/* You can also render other details like date, image, etc. */}
      <p>Created on: {new Date(blogData.date).toLocaleDateString()}</p>
    </div>
      
      {/* <img src={blogData.image} alt={blogData.title} /> */}
    </>
  );
};

export default BlogDetails;

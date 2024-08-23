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
        const response = await fetch(`https://portfolio-backend-1kqj.onrender.com/api/Blog/${blog}`);
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
    <section className='container mx-auto text-xl flex flex-col justify-center items-center'>
      <div className='text-white'>

      <h1 className='text:2xl md:text-5xl my-7 text-center md:text-left block font-serif font-extrabold underline underline-offset-8 md:mr-24 px-4'>{blogData.title}.</h1>

      <h1 className='my-5'><em className='text-light-blue-600 font-semibold px-5 text-center md:text-left'>By Gilbert Kutoto <span className='text-white'> : {new Date(blogData.date).toLocaleDateString()}</span></em></h1>
      
      <div className=' border-none md:border border-light-blue-600 md:h-96 md:w-4/5 relative my-7'>
        <Image 
            src={`https://portfolio-backend-1kqj.onrender.com${blogData.image}`}
            width={500}
            height={100}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading='lazy'
            alt={blogData.title}
            className="object-fill  w-full object-center md:h-96 md:w-full md:absolute bottom-4 left-4 px-5 md:px-2"
            />
      </div>
      <div className='border-l-2 border-light-blue-600 ms-12 px-5'>
        <p className='md:text-xl  md:ms-12'>
          {blogData.blog_text}
        </p>

        {/* <div>{blogData.blog_body}</div> */}
        <div dangerouslySetInnerHTML={{ __html: blogData.blog_body }} />
      </div>
      </div>
    </section>
    </>
  );
};

export default BlogDetails;



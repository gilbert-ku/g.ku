"use client"


import { useParams } from 'next/navigation';


const BlogDetails = () => {
  const { blog } = useParams();

  console.log(blog);
  return (
    <div className='text-8xl text-white'>
      BlogDetails
    </div>
  );
}

export default BlogDetails;


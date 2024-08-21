import Image from "next/image";
// import ButtonLink from "./ButtonLink";
import Link from 'next/link';
import { GrLinkNext } from "react-icons/gr";




const getBlogs = async () => {
    try{
        const res = await fetch("http://127.0.0.1:8000/api/Blogs/", {
            next: {
                revalidate:3600
            }
        });
        if (!res.ok) {
            throw new Error("Failed to Fetch Blogs");

        }
        // covert data to array
        const data = await res.json();

        if (data.blogs && Array.isArray(data.blogs)){
            return data.blogs
        } 
        else {
            throw new Error('Expected an array of blogs, but got something else');

        }
        // error
    } catch (error) {
        console.error('Error fetching blogs:', error);

        return[];
    }
}

const BlogList =  async() => {

    // call our fetch function
    const blogs = await getBlogs()

    if (Array.isArray(blogs) && blogs.length > 0 ){
       return (
            <>
                <section className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-11  gap-y-5 mt-3 mx-5 md:mx-12 lg:mx-24 ">
                    {
                        blogs.map((blog) => (
                            
                            <div key={blog.uuid} className="text-white rounded-xl px-2 py-1">
                                <div className="">
                                    <Image 
                                    src={`http://127.0.0.1:8000${blog.image}`}
                                    width={500}
                                    height={200}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    loading='lazy'
                                    alt={blog.title}
                                    className="object-scale-down w-full md:h-72 object-center rounded-2xl md:px-5"
                                    />
                                </div>
                                
                                <div className=' my-auto pe-2'>
                                    <h1 className='text-xl md:text-2xl text-light-blue-600 font-semibold mb-2 md:mb-5'>{blog.title}</h1>
                                    <p className='md:text-xl lg:text-2xl'>{blog.blog_text.slice(0, 200)}...</p>
                                    {/* <p>date {blog.created_date}</p> */}
                                    {/* <p>date {blog.user}</p> */}
                                </div>

                                <div className="flex justify-between font-semibold my-2 pe-2">
                                    <Link href={`/blogs/${blog.uuid}`}>
                                    <button className="py-1 px-3 bg-gray-900 hover:bg-gradient-to-r from-cyan-300 to-light-blue-600 flex rounded-md"><span>Read more</span> <GrLinkNext className="my-auto ml-1"/></button>
                                    </Link>

                                    <p className="font-semibold my-auto">Posted <span className="text-light-blue-600">:</span> {blog.created_date}</p>
                                </div>
                                {/* <ButtonLink blog={blog} /> */}
                            </div>
                        ))
                    }
                </section>
            </>
        ) 
    } else {
        return <p className=" text-center p-24 text-8xl text-white">Invalid data: {JSON.stringify(blogs)}</p>;
    }
}

export default BlogList
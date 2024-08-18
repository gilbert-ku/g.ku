import Image from "next/image";


const getBlogs = async () => {
    try{
        const res = await fetch("http://127.0.0.1:8000/api/Blogs/", {
            next: {
                revalidate:0
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
            <h1 className="text-7xl text-white">hello Welcome</h1>
                <section className="text-white">
                    {
                        blogs.map((blog) => (
                            <div key={blog.uuid} className="text-white ">
                                <Image 
                                src={`http://127.0.0.1:8000${blog.image}`}
                                width={500}
                                height={400}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                loading='lazy'
                                alt={blog.title}
                                />

                                <h1 className="text-white text-4xl">{blog.title}</h1>

                                <div className='md:ml-5 lg:ml-10 my-auto md:pr-5 lg:pr-3'>
                                    <h1 className='text-xl md:text-2xl text-light-blue-600 font-semibold mb-2 md:mb-5'>{blog.title}</h1>
                                    <p className='md:text-xl lg:text-2xl'>{blog.blog_text}</p>
                                    <p>date {blog.created_date}</p>
                                </div>
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
import Blogs from "@/components/blogsComp/Blogs"


const BlogPage = () => {
  return (
    <>
      <main className="min-h-[450px] md:min-h-[600px] mx-5 lg:mx-20 bg-no-repeat bg-cover md:rounded-3xl flex justify-center items-center bg-gradient-to-b from-white to-blue-gray-500" style={{ backgroundImage: `url("/blogbg.jpeg")` }}>
        <div className="bg-black bg-opacity-70 p-6 md:p-12 md:rounded-3xl w-full max-w-screen-lg mx-auto text-white font-serif">
          <h1 className="text-5xl md:text-7xl font-extrabold text-center">Welcome to My Blog</h1>
          <p className="text-2xl md:text-3xl mt-4 text-center">Sharing insights, stories, and tips</p>
          <p className="text-lg md:text-xl mt-8 leading-relaxed text-center">
            I'm thrilled to have you here. Whether you're interested in personal stories, tech insights, or personal finance tips, this is the place for you. I share my experiences, knowledge, and thoughts on topics that I'm passionate about. So, grab a cup of coffee, dive in, and let's explore these journeys together!
          </p>
        </div>
      </main>

      <Blogs />

    </>
  )
}

export default BlogPage






{/* <main className='text-white  min-h-[450] md:min-h-[600px] mx -5 lg:mx-20 bg-no-repeat bg-cover md:rounded-3xl  flex justify-center items-center bg-gradient-to-b from-white to-blue-gray-500' style={{backgroundImage:`url("/blogbg.jpeg")`}}>
    <main className='text-white bg-gradient-to-r from-transparent from-50% via-light-blue-500 via-30%  to-light-blue-600 to-30% h-96 w-full relative'>
    <main className='text-white bg-gradient-to-t from-[rgba(117,157,185,0.5)] via-[#627380] to-[#000000] h-96 w-full relative'>
      <Image 
      src="/blogbg.jpeg" 
      // height="100%"
      // width="100%"
      alt="blog BG"
      layout="fill"
      // objectFit="cover"
      className="object-cover absolute  object-left-topx mix-blend-overlay "
      />

      <div className="text-white p-5 font-serif container  bg-black bg-opacity-70 md:p-11 md:rounded-3xl w-full  ">
        <h1 className="text-4xl md:text-8xl font-extrabold text-center ">Blogs</h1>
        <p className="font-semibold text-2xl md:text-3xl"></p>
        <p className="text-xl md:text-4xl mt-8">
          I'm thrilled to have you here. 
          Whether you're interested in personal stories, tech insights, or personal finance tips, this is the place for you. I share my experiences, 
          knowledge, and thoughts on topics that I'm passionate about. So, grab a cup of coffee, dive in, and let's explore these journeys together!
        </p>
      </div>
      
    </main> */}
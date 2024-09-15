"use client"
import { GoArrowDownRight } from "react-icons/go";
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="min-h-screen lg:flex w-full justify-center items-center ">

      {/* Background Image (Top Left) */}
      <Image
        src="/top.png"
        height={200}
        width={200}
        loading="lazy"
        alt="Background graphic"
        className="absolute top-0 left-0"
        
      />

      {/* Freelancer Section */}
      <div className="lg:flex lg:flex-row justify-evenly items-center min-w-full">
        
        {/* Text Section */}
        <div className="text-white flex flex-col items-center justify-center md:block md:mx-5 md:ml-14 w-full md:w-1/3">
          <GoArrowDownRight className="text-3xl my-5 text-light-blue-600 font-semibold" aria-label="Arrow Icon" />
          <h1 className="text-2xl md:text-4xl mb-5">Freelancer</h1>
          <p className="text-3xl md:text-2xl lg:text-5xl mb-5">
            Software Engineer<span className="text-light-blue-600">.</span>
          </p>
          <Link href="cv.pdf" download="gilbert kutoto">
            <button className="py-2 px-5 md:px-8 bg-light-blue-600 rounded-xl font-semibold">
              Download Resume
            </button>
          </Link>
          
        </div>

        {/* Image Section */}
        <div className="flex flex-col items-center justify-center w-full lg:w-1/3">
          <Image
            src="/gilbert.png"
            height={500}
            width={400}
            loading="lazy"
            alt="Gilbert Kutoto"
            className="px-5 md:px-0 md:mx-auto mt-2 md:mt-24 md:my-4"
            
          />
          <h1 className="text-2xl md:text-4xl lg:text-6xl text-white font-extrabold mx-auto mt-7">
            Gilbert Kutoto
          </h1>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start mx-auto mt-3 md:mt-6">
            <div className="flex  mt-1 md:mt-3">
              <Link href="https://github.com/gilbert-ku" target="_blank" className="text-light-blue-600 hover:text-white hover:-translate-y-1 hover:scale-110 duration-300"> 
                <FaGithub className="mx-2 text-2xl md:text-3xl" aria-label="GitHub" />
              </Link>
                <Link href="https://www.linkedin.com/in/gilbert-kutoto/" target="_blank" className="text-light-blue-600 hover:text-white hover:-translate-y-1 hover:scale-110 duration-300"> 
              <FaLinkedinIn className="mx-2 text-2xl md:text-3xl" aria-label="LinkedIn" />
              </Link>
              <Link href="https://x.com/gilbert45dope/" target="_blank" className="text-light-blue-600 hover:text-white hover:-translate-y-1 hover:scale-110 duration-300"> 
                <FaTwitter className="mx-2 text-2xl md:text-3xl" aria-label="Twitter" />
              </Link>
              <Link href="https://wa.me/phonenumber?text=Hi%20Gilbert!%20I%20came%20across%20your%20portfolio%20and%20was%20really%20impressed.%20I'd%20love%20to%20connect%20and%20learn%20more%20about%20your%20work!" target="_blank" className="text-light-blue-600 hover:text-white hover:-translate-y-1 hover:scale-110 duration-300"> 
                <FaWhatsapp className="mx-2 text-2xl md:text-3xl" aria-label="WhatsApp" />
              </Link>
              <Link href="mailto: gilbert45ku@gmail.com" target="_blank" className="text-light-blue-600 hover:text-white hover:-translate-y-1 hover:scale-110 duration-300"> 
                <MdEmail className="mx-2 text-2xl md:text-3xl" aria-label="Email" />
              </Link>
              
            </div>
          </div>
        </div>

        {/* What I Do Section */}
        <div className=" hidden md:flex justify-around lg:flex-col items-center lg:justify-center w-full lg:w-1/3">
          
          {/* Designer */}
          <div className="flex flex-col items-center my-6">
            <Image
              src="/design.png"
              height={200}
              width={110}
              loading="lazy"
              alt="Designer"
              className="mx-auto"
            />
            <h1 className="md:text-2xl text-white font-extrabold mx-auto">
              Designer
            </h1>
          </div>

          {/* Web Developer */}
          <div className="flex flex-col items-center my-6">
            <Image
              src="/web.png"
              height={80}
              width={100}
              loading="lazy"
              alt="Web Developer"
              className="mx-auto"
            />
            <h1 className="md:text-2xl text-white font-extrabold mx-auto">
              Web Developer
            </h1>
          </div>

          {/* Mobile Developer */}
          <div className="flex flex-col items-center my-6">
            <Image
              src="/mobile.png"
              height={100}
              width={100}
              loading="lazy"
              alt="Mobile Developer"
              className="mx-auto"
            />
            <h1 className="md:text-2xl text-white font-extrabold">
              Android/IOS Developer
            </h1>
          </div>
        </div>
      </div>
    </main>

  )
}

export default HomePage






// import Image from "next/image";
// import { TypeAnimation } from 'react-type-animation';
// import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";

// const HomePage = () => {
//   return (
//     <>
//         <main className="home-pg flex justify-center items-center min-h-screen text-white"> 
        
//         <div className="lg:flex justify-evenly my-4 md:my-12">
//             <div className="px-5 md:px-8 lg:px-24 lg:w-1/2">
//               <h1 className="text-xl md:text-2xl">Hello, My Name is,</h1>

//               <h1 className="text-3xl md:text-6xl font-bold md:mb-3 text-center md:text-left">Gilbert <span className="text-light-blue-400" >Kutoto,</span></h1>

//               <div className="flex justify-center md:justify-start">
//                 <TypeAnimation
//                   sequence={[
//                     Same substring at the start will only be typed once, initially
//                     'I am a Software Engineer,',
//                     1000,
//                     'I am a UX/UI Designer,',
//                     1000,
//                     'I am a Web Developer,',
//                     1000,
//                     'I am an Android/iOS Developer.',
//                     1000,
//                   ]}
//                   speed={30}
//                   // style={{ fontSize: '2em' }}
//                   className="text-xl md:text-4xl my-0 md:my-2 font-semibold text-center md:text-left"
//                   repeat={Infinity}
//                 />
//               </div>
              
//               <p className="md:text-2xl lg:text-3xl my-2 lg:my-4 text-center md:text-left">From Nairobi Kenya,I have a rich experience in development cycle form dynamic Web Application, 
//                 Mobile App development and I am also proficient in UX/UI design.
//               </p>
//                 <div className="flex justify-center md:justify-start">
//                   <button className=" py-2 md:py-4 rounded-md font-semibold my-3 md:my-5 px-6 bg-gradient-to-r from-cyan-300 to-light-blue-600 md:text-xl">
//                   Download Resume
//                   </button>
//                 </div>

//                 <div className="flex justify-center md:justify-start">
//                   <div className="flex text-blue-500 mt-1 md:mt-3">
//                     <FaGithub className="me-2 md:me-3 text-2xl text-blue-500"/>
//                     <FaLinkedinIn className="mx-2 md:mx-3 text-2xl md:text-3xl"/>
//                     <FaTwitter className="mx-2 md:mx-3 text-2xl md:text-3xl"/>
//                     <FaWhatsapp className="mx-2 md:mx-3 text-2xl md:text-3xl"/>
//                     <MdEmail className="ms-2 md:ms-3 text-2xl md:text-3xl "/>
//                   </div>
//                 </div>
              
//             </div>
//             <Image 
//             src="/profile-image.png"
//             width={450}
//             height={450}
//             alt="profile image"
//             className="px-5 md:pr-0 mt-5 lg:mt-0 items-center"
//             loading="lazy"
//             />
//         </div>
        
//       </main>
//     </>
//   )
// }

// export default HomePage
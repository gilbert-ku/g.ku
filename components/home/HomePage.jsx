"use client"


import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const HomePage = () => {
  return (
    <>
        <main className="home-pg flex justify-center items-center min-h-screen text-white"> 
        
        <div className="lg:flex justify-evenly my-4 md:my-12">
            <div className="px-5 md:px-8 lg:px-24 lg:w-1/2">
              {/* <h1 className="text-xl md:text-2xl">Hello, My Name is,</h1> */}

              <h1 className="text-3xl md:text-6xl font-bold md:mb-3 text-center md:text-left">Gilbert <span className="text-light-blue-400" >Kutoto,</span></h1>

              <div className="flex justify-center md:justify-start">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    'I am a Software Engineer,',
                    1000,
                    'I am a UX/UI Designer,',
                    1000,
                    'I am a Web Developer,',
                    1000,
                    'I am an Android/iOS Developer.',
                    1000,
                  ]}
                  speed={30}
                  // style={{ fontSize: '2em' }}
                  className="text-xl md:text-4xl my-0 md:my-2 font-semibold text-center md:text-left"
                  repeat={Infinity}
                />
              </div>
              
              <p className="md:text-2xl lg:text-3xl my-2 lg:my-4 text-center md:text-left">From Nairobi Kenya,I have a rich experience in development cycle form dynamic Web Application, 
                Mobile App development and I am also proficient in UX/UI design.
              </p>
                <div className="flex justify-center md:justify-start">
                  <button className=" py-2 md:py-4 rounded-md font-semibold my-3 md:my-5 px-6 bg-gradient-to-r from-cyan-300 to-light-blue-600 md:text-xl">
                  Download Resume
                  </button>
                </div>

                <div className="flex justify-center md:justify-start">
                  <div className="flex text-blue-500 mt-1 md:mt-3">
                    <FaGithub className="me-2 md:me-3 text-2xl text-blue-500"/>
                    <FaLinkedinIn className="mx-2 md:mx-3 text-2xl md:text-3xl"/>
                    <FaTwitter className="mx-2 md:mx-3 text-2xl md:text-3xl"/>
                    <FaWhatsapp className="mx-2 md:mx-3 text-2xl md:text-3xl"/>
                    <MdEmail className="ms-2 md:ms-3 text-2xl md:text-3xl "/>
                  </div>
                </div>
              
            </div>
            <Image 
            src="/profile-image.png"
            width={450}
            height={450}
            alt="profile image"
            className="px-5 md:pr-0 mt-5 lg:mt-0 items-center"
            loading="lazy"
            />
        </div>
        
      </main>
    </>
  )
}

export default HomePage
"use client"

import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";



export default function Home() {
  return (
    // <main className=" home-pg flex min-h-screen flex-col items-center justify-between" >
    <main className="home-pg  min-h-screen text-white"> 
      <div className="md:flex justify-evenly my-12">
        <div className=" w-1/2">
          <h1 className="text-2xl">Hello, My Name is,</h1>

          <h1 className="text-2xl md:text-6xl font-bold">Gilbert <span className="text-light-blue-400" >Kutoto,</span></h1>

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
            speed={40}
            // style={{ fontSize: '2em' }}
            className="md:text-4xl my-2"
            repeat={Infinity}
          />

          <p className="text-2xl my-5">From Nairobi Kenya,I have a rich experience in development cycle form dynamic Web Application, 
            Mobile App development and I am also proficient in UX/UI design.
          </p>

          <button className="p-2 bg-light-blue-600 rounded-md font-semibold my-5 px-5">Download Resume</button>

          <div className="flex text-blue-500">
          <FaGithub className="me-3 text-2xl text-blue-500"/>
          <FaLinkedinIn className="mx-3 text-2xl"/>
          <FaTwitter className="mx-3 text-2xl"/>
          <FaWhatsapp className="mx-3 text-2xl"/>
          <MdEmail className="ms-3 text-2xl"/>
          </div>

        </div>
        <Image 
        src="/profile-image.png"
        width={500}
        height={500}
        alt="profile image"
        // className="mt-96"/
        
        />
      </div>
    </main>

    
  );
}



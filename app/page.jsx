"use client"

import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    // <main className=" home-pg flex min-h-screen flex-col items-center justify-between" >
    <main className="home-pg  min-h-screen "> 
      <div className="md:flex justify-evenly my-12">
        <div className=" w-1/2">
          <h1>Hello, My Name is,</h1>

          <h1 className="text-2xl md:text-6xl font-bold">Gilbert <span className="text-light-blue-400" >Kutoto</span></h1>

          <TypeAnimation
            sequence={['Software Engineer.', 500, 'UX/UI Designer.', 500, 'Web Developer.', 500, 'Android/IOS Developer.', 500]}
            // style={{ fontSize: '2em' }}
            className="md:text-4xl"
            repeat={Infinity}

          /> 

          <p>From Nairobi Kenya,I have a rich experience in development cycle form dynamic Web Application, 
            Mobile App development and I am also proficient in UX/UI design.
          </p>

          <button className="p-2 bg-light-blue-600 rounded-md font-semibold">Download Resume</button>

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



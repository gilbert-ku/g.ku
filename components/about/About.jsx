import Image from 'next/image'
import React from 'react'
import { IoCloudDoneSharp } from "react-icons/io5";

function About() {
  return (
    <>
        <div className='mx-auto lg:flex'>

            {/* image */}
            <Image 
                src="/about-image.png"
                width={300}
                height={300}
                alt="profile image"
                className="px-5 md:pr-0 mt-5 lg:mt-0 hidden lg:block "
                loading="lazy"
            />

            {/* content div */}
            <div className=' text-white lg:w-1/2 mx-5 lg:pl-20'>
                <h1 className='text-xl md:text-2xl font-semibold text-center lg:text-start'>About Me</h1>
                <p className='text-xl md:text-2xl font-semibold'>
                    Self <span className='text-light-blue-400'>Driven, Innovative</span> 
                    <br />
                    Software <span className='text-light-blue-400'>Engineer.</span>
                </p>
                <div className=' text-white pt-4'>
                    <p >
                    I have more than one year of experience in software development and solutions. 
                    I am passionate about software development, always eager to learn new concepts, 
                    and possess a collaborative spirit, 
                    with a focus on detail and leadership in developing solutions that meet organizational and personal objectives.
                    </p>
                </div>

                <ul className='pt-2'>
                    <li className='flex my-1 lg:my-3'><IoCloudDoneSharp className='mr-2 text-light-blue-400'/> <span className=''>Design Web and Mobile Application.</span></li>
                    <li className='flex my-1 lg:my-3'><IoCloudDoneSharp className='mr-2 text-light-blue-400'/> <span className=''>Develop highly interactive user interface.</span></li>{/* such us Mpesa, pay-pal, strip etc. */} 
                    <li className='flex my-1 lg:my-3'><IoCloudDoneSharp className='mr-2 text-light-blue-400'/> <span className=''>Develop Back-end business logic.</span> </li>
                    <li className='flex my-1 lg:my-3'><IoCloudDoneSharp className='mr-2 text-light-blue-400'/> <span className=''> Integration of payment get a ways.</span></li>  
                    <li className='flex my-1 lg:my-3'><IoCloudDoneSharp className='mr-2 text-light-blue-400'/> <span className=''>Testing, Deployment and Maintenance.</span></li>
                </ul>
            </div>
            
        </div>
    </>
  )
}

export default About
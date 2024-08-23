"use client"

import Link from 'next/link'
import { Link as ScrollLink } from "react-scroll";


import React from 'react'
 const Footer = () => {
  return (
    <>
    <footer className='md:flex justify-between items-center text-white font-serif md:text-xl  bg-gray-900 mt-12 py-3 md:py-6'>
        <p className='font-semibold mx-5 md:ms-12 text-center md:text-3xl'>copyright @2024, <span className='text-light-blue-600 '>Gilbert Kutoto.</span></p>
        <div>
            <ul className='flex justify-evenly md:mx-7'>
            <Link 
              href=""
              className="text-white hover:text-light-blue-600 font-semibold"
              >
                <li className='md:px-3'>Home</li>
              </Link>
              <ScrollLink 
              to="About" 
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="text-white hover:text-light-blue-600 font-semibold"
              >
                <li className='md:px-3'>About</li>
                </ScrollLink>

              <ScrollLink 
              to="Services" 
              spy={true}
              smooth={true}
              offset={-95}
              duration={500}
              className="text-white hover:text-light-blue-600 font-semibold"
              >
                <li className='md:px-3'>Services</li>
              </ScrollLink>

              <ScrollLink 
              to="Projects" 
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="text-white hover:text-light-blue-600 font-semibold"
              >
                <li className='md:px-3'>Projects</li>
              </ScrollLink>

              <ScrollLink 
              to="Skills" 
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="text-white hover:text-light-blue-600 font-semibold"
              >
                <li className='md:px-3'>Skills</li>
              </ScrollLink>
              <Link 
              href="blogs"
              className="text-white hover:text-light-blue-600 font-semibold"
              >
                <li className='md:px-3'>Blogs</li>
              </Link>
            </ul>
        </div>
    </footer>
    </>
  )
}

export default Footer

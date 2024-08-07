import React from 'react'
import { MdDesignServices } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";


const Services = () => {
  return (
    <>
    <div className='container mx-auto'>
      <div className='text-white'>
        <h1 className='text-center text-xl md:text-2xl font-semibold'>
          My <span className='text-light-blue-600'>Special Services</span> For your Personal and <br />Business <span className='text-light-blue-600'>Development.</span>
        </h1>
      </div>
      
      <div className='text-white grid grid-cols-1 md:grid-cols-3  gap-5 mt-3'>
        {/* ui/ux */}
        <div className='text-center bg-gray-900 p-5 rounded-lg border-double border-4 border-light-blue-600'>
          <MdDesignServices className='items-center text-3xl text-light-blue-600 mx-auto'/>
          <h1 className='font-semibold text-xl py-3'>UI/UX DESIGN</h1>
          <p className='px-5'>Innovative, Intrusive, and Delightful Prototype for User Experience by Blending Aesthetics with Usability.</p>
        </div>

        {/* web app */}
        <div className='text-center bg-gray-900 p-5 rounded-lg border-double border-4 border-light-blue-600'>
          <TbWorldWww className='items-center text-3xl text-light-blue-600 mx-auto'/>
          <h1 className='font-semibold text-xl py-3'>WEB DEVELOPMENT</h1>
          <p className='px-5'>Modern Desktop and Mobile Web Application to Enhance Your Marketing Reach.</p>
        </div>

        {/* Mobile dev */}
        <div className='text-center bg-gray-900 p-5 rounded-lg border-double border-4 border-light-blue-600'>
          <CiMobile3 className='items-center text-3xl text-light-blue-600 mx-auto'/>
          <h1 className='font-semibold text-xl py-3'>APP DEVELOPMENT</h1>
          <p className='px-5'>Cutting-Edge Android and iOS Mobile Applications to Expand Your Marketing Reach.</p>
        </div>

      </div>
    </div>
    </>
  )
}

export default Services
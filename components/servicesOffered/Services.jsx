import React from 'react'
import { MdDesignServices, MdPayment } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";
import { AiFillApi } from "react-icons/ai";
import { SiCodementor } from "react-icons/si";

const Services = () => {
  return (
    <>
    <div className='container mx-auto mt-5' id='Services'>
      <div className='text-white'>
        <h1 className='text-center text-xl md:text-2xl font-semibold mx-5'>
          My <span className='text-light-blue-600'>Special Services</span> For your Personal and <br />Business <span className='text-light-blue-600'>Development.</span>
        </h1>
      </div>
      
      <div className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-3'>
        {/* ui/ux */}
        <div className='text-center bg-gray-900 p-5 rounded-lg border-double border-4 border-light-blue-600 mx-5'>
          <MdDesignServices className='items-center text-3xl text-light-blue-600 mx-auto'/>
          <h1 className='font-semibold md:text-xl py-3'>UI/UX DESIGN</h1>
          <p className='px-1 md:px-5'>Innovative, Intrusive, and Delightful Prototype for User Experience by Blending Aesthetics with Usability.</p>
        </div>

        {/* web app */}
        <div className='text-center bg-gray-900 p-5 rounded-lg border-double border-4 border-light-blue-600 mx-5'>
          <TbWorldWww className='items-center text-3xl text-light-blue-600 mx-auto'/>
          <h1 className='font-semibold md:text-xl py-3'>WEB DEVELOPMENT</h1>
          <p className='px-1 md:px-5'>Modern Desktop and Mobile Web Application to Enhance Your Marketing Reach.</p>
        </div>

        {/* Mobile dev */}
        <div className='text-center bg-gray-900 p-5 rounded-lg border-double border-4 border-light-blue-600 mx-5'>
          <CiMobile3 className='items-center text-3xl text-light-blue-600 mx-auto'/>
          <h1 className='font-semibold md:text-xl py-3'>APP DEVELOPMENT</h1>
          <p className='px-1 md:px-5'>Cutting-Edge Android and iOS Mobile Applications to Expand Your Marketing Reach.</p>
        </div>

        {/* api */}
        <div className='text-center bg-gray-900 p-5 rounded-lg border-double border-4 border-light-blue-600 mx-5'>
          <AiFillApi className='items-center text-3xl text-light-blue-600 mx-auto'/>
          <h1 className='font-semibold md:text-xl py-3'>API DESIGN/INTEGRATION</h1>
          <p className='px-1 md:px-5'>Developing a highly secure, fast and salable REST APIs.</p>
        </div>

        {/* payment */}

        <div className='text-center bg-gray-900 p-5 rounded-lg border-double border-4 border-light-blue-600 mx-5'>
          <MdPayment className='items-center text-3xl text-light-blue-600 mx-auto'/>
          <h1 className='font-semibold md:text-xl py-3'>PAYMENT INTEGRATION</h1>
          <p className='px-1 md:px-5'>Automate the process of payments to allow users to pay right in your platform.</p>
        </div>

        {/* open source */}

        <div className='text-center bg-gray-900 p-5 rounded-lg border-double border-4 border-light-blue-600 mx-5'>
          <SiCodementor className='items-center text-3xl text-light-blue-600 mx-auto'/>
          <h1 className='font-semibold md:text-xl py-3'>OPEN SOURCE/MENTORSHIP</h1>
          <p className='px-1 md:px-5'>Eager to contribute to open-source projects while learning and sharing my expertise.</p>
        </div>

      </div>
    </div>
    </>
  )
}

export default Services
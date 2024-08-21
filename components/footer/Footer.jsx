import React from 'react'
 const Footer = () => {
  return (
    <>
    <footer className='md:flex justify-between items-center text-white font-serif md:text-xl  bg-gray-900 mt-12'>
        <p className='font-semibold mx-5 md:ms-12 text-center'>copyright @2024, <span className='text-light-blue-600 '>Gilbert Kutoto.</span></p>
        <div>
            <ul className='flex justify-evenly md:mx-7'>
                <li className='md:px-3'>About</li>
                <li className='md:px-3'>Services</li>
                <li className='md:px-3'>Projects</li>
                <li className='md:px-3'>Skills</li>
                <li className='md:px-3'>Blogs</li>
            </ul>
        </div>
    </footer>
    </>
  )
}

export default Footer

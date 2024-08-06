import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <>
    <div className='mt-5 container mx-auto px-4 md:px-1'>
        <h1 className='text-2xl text-center text-white font-semibold mb-5'>Professional <span className='text-light-blue-600'>Skills.</span></h1>

        <div className='text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            <div className="bg-gray-900 p-4 h-32 flex justify-center items-center rounded-xl" >
                <div>
                    <Image
                    src="/figma.png"
                    width={30}
                    height={30}
                    alt="figma logo"
                    className="mx-auto"
                    loading="lazy"
                    />
                    <p className='md:text-xl'>Figma</p>
                </div>
            </div>

            <div className="bg-gray-900 p-4 h-32 flex justify-center items-center rounded-xl" >
                <div>
                    <Image
                    src="/javascript.png"
                    width={30}
                    height={30}
                    alt="java logo"
                    className="mx-auto"
                    loading="lazy"
                    />
                    <p className='md:text-xl'>JavaScript</p>
                </div>
            </div>

            <div className="bg-gray-900 p-4 h-32 flex justify-center items-center rounded-xl" >
                <div>
                    <Image
                    src="/react.png"
                    width={30}
                    height={30}
                    alt="react logo"
                    className="mx-auto"
                    loading="lazy"
                    />
                    <p className='md:text-xl'>ReactJs</p>
                </div>
            </div>

            <div className="bg-gray-900 p-4 h-32 flex justify-center items-center rounded-xl" >
                <div>
                    <Image
                    src="/next.png"
                    width={30}
                    height={30}
                    alt="next js logo"
                    className="mx-auto"
                    loading="lazy"
                    />
                    <p className='md:text-xl'>NextJs</p>
                </div>
            </div>
            <div className="bg-gray-800 p-4 h-32" >
                <p>Dart</p>
            </div>
            <div className="bg-gray-800 p-4 h-32" >
                <p>Flutter</p>
            </div>
            <div className="bg-gray-800 p-4 h-32" >
                <p>Tailwind</p>
            </div>
            <div className="bg-gray-800 p-4 h-32" >
                <p>BootStrap</p>
            </div>
            <div className="bg-gray-800 p-4 h-32" >
                <p>Python</p>
            </div>
            <div className="bg-gray-800 p-4 h-32" >
                <p>Django</p>
            </div>
            <div className="bg-gray-800 p-4 h-32" >
                <p>Flask</p>
            </div>
            <div className="bg-gray-800 p-4 h-32" >
                <p>MySQL</p>
            </div>
        </div>
    </div>
        
    </>
  )
}

export default Skills
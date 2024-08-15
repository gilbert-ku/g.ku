import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <>
    <div className='mt-5 container mx-auto px-4 md:px-1 mb-3' id='Skills'>
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

            <div className="bg-gray-900 p-4 h-32 flex justify-center items-center rounded-xl" >
                <div>
                    <Image
                    src="/dart.png"
                    width={40}
                    height={40}
                    alt="dart logo"
                    className="mx-auto"
                    loading="lazy"
                    />
                    <p className='md:text-xl'>Dart</p>
                </div>
            </div>

            <div className="bg-gray-900 p-4 h-32 flex justify-center items-center rounded-xl" >
                <div>
                    <Image
                    src="/flutter.png"
                    width={30}
                    height={30}
                    alt="flutter js logo"
                    className="mx-auto"
                    loading="lazy"
                    />
                    <p className='md:text-xl'>Flutter</p>
                </div>
            </div>

            <div className="bg-gray-900 p-4 h-32 flex justify-center items-center rounded-xl" >
                <div>
                    <Image
                    src="/tailwind.png"
                    width={40}
                    height={40}
                    alt="tailwind js logo"
                    className="mx-auto"
                    loading="lazy"
                    />
                    <p className='md:text-xl'>Tailwind CSS</p>
                </div>
            </div>
            <div className="bg-gray-900 p-4 h-32 flex justify-center items-center rounded-xl" >
                <div>
                    <Image
                    src="/bootstrap.png"
                    width={40}
                    height={40}
                    alt="bootstrap logo"
                    className="mx-auto"
                    loading="lazy"
                    />
                    <p className='md:text-xl'>Bootstrap CSS</p>
                </div>
            </div>

            <div className="bg-gray-900 p-4 h-32 flex justify-center items-center rounded-xl" >
                <div>
                    <Image
                    src="/python.png"
                    width={30}
                    height={30}
                    alt="python logo"
                    className="mx-auto"
                    loading="lazy"
                    />
                    <p className='md:text-xl'>Python</p>
                </div>
            </div>

            <div className="bg-gray-900 p-4 h-32 flex justify-center items-center rounded-xl" >
                <div>
                    <Image
                    src="/django.png"
                    width={55}
                    height={30}
                    alt="Django logo"
                    className="mx-auto"
                    loading="lazy"
                    />
                    <p className='md:text-xl'>Django</p>
                </div>
            </div>

            <div className="bg-gray-900 p-4 h-32 flex justify-center items-center rounded-xl" >
                <div>
                    <Image
                    src="/flask.png"
                    width={45}
                    height={30}
                    alt="flask logo"
                    className="mx-auto"
                    loading="lazy"
                    />
                    <p className='md:text-xl'>Flask</p>
                </div>
            </div>

            <div className="bg-gray-900 p-4 h-32 flex justify-center items-center rounded-xl" >
                <div>
                    <Image
                    src="/mysql.png"
                    width={30}
                    height={60}
                    alt="mysql logo"
                    className="mx-auto"
                    loading="lazy"
                    />
                    <p className='md:text-xl'>MySQL</p>
                </div>
            </div>
        </div>
    </div>
        
    </>
  )
}

export default Skills
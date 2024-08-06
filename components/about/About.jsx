import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <>
        <div>
            <Image 
                src="/about-image.png"
                width={450}
                height={450}
                alt="profile image"
                className="px-5 md:pr-0 mt-5 lg:mt-0 "
                loading="lazy"
            />
        </div>
    </>
  )
}

export default About
"use client"
import Image from "next/image";


const Form = () => {
  return (
    <>
        <section className='relative '>

           <Image 
                src="/Vector.png"
                width={450}
                height={350}
                alt="profile image"
                className="px-5 lg:pr-0 mt-5 lg:mt-0 items-center object-contain "
                loading="lazy"
            />  
                
            <form className="w-full max-w-lg absolute top-6  z-10" >
                {/* name */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <input className="appearance-none block w-full text-white bg-white bg-opacity-25 border border-light-blue-500 rounded py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:bg-opacity-50 focus:border-blue-500" 
                        type="text" 
                        placeholder="Full Name" 
                        name="full_name"
                        // value={formData.full_name}
                        // onChange={handleChange}
                        required/>
                    </div>
                </div>  
                {/* phone and email */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full lg:w-1/2 px-3 mb-6 lg:mb-0">
                        <input className="appearance-none block w-full text-white bg-white bg-opacity-25 border border-light-blue-600 rounded py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:bg-opacity-50 focus:border-blue-500"  
                        type="email" 
                        placeholder="Enter Email Address" 
                        required
                        name='email'
                        // value={formData.email}
                        // onChange={handleChange}
                        />
                    </div>
                    <div className="w-full lg:w-1/2 px-3">
                    <input className="appearance-none block w-full text-white bg-white bg-opacity-25 border border-light-blue-600 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:bg-opacity-50 focus:border-blue-500" 
                    type="number"
                    placeholder="Enter Phone No"
                    required
                    name='phone'
                    // value={formData.phone}
                    // onChange={handleChange}
                    />
                    </div>
                </div>
                
                {/* message */}
                <div className=" mx-auto">
                    <textarea id="message" rows="4" 
                    className="block p-2 w-full text-sm text-black bg-white bg-opacity-25 rounded-lg border border-light-blue-600 focus:ring-blue-500 focus:outline-none focus:border-blue-500 focus:bg-white focus:bg-opacity-50  "
                    placeholder="Leave a Message..." 
                    required
                    name='message'
                    // value={formData.message}
                    // onChange={handleChange}
                    />
                </div>
                <div className='flex justify-end my-2'>
                    <button type="submit" className="w-full lg:w-2/4 text-white bg-gradient-to-r from-cyan-300 to-light-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm lg:text-xl px-5 p-2 text-center ">
                        Send
                    </button>
                </div>
            </form>
                
        </section>
    </>
  )
}

export default Form
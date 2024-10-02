import React from 'react'

export const Conatct = () => {
  return (
    <div className='flex flex-wrap gap-12 items-center justify-center mt-36'>
          <div className="">
             <h1 className="text-6xl">Contact Us</h1>
             <div className="">
                <p className='text-xl'>Phone: 0746841398</p>
                <p className='text-xl'>Email: oriemiobang1@gmail.com</p>
             </div>
          </div>
          <div className="w-2/3 ">
             <label className='text-2xl tracking-wide '>Name</label><br/>
             <input className='bg-neutral-400 w-full text-black  placeholder:text-black p-4' type="text" placeholder='Enter Your Name'/><br/>
             <label className='text-2xl tracking-wide'>Email</label><br/>
             <input className='bg-neutral-400 w-full  placeholder:text-black p-4' type="text" placeholder='Enter Your Email' /><br/>
             <label className='text-2xl tracking-wide' >Your message</label>< br/>
             <textarea className='bg-neutral-400 w-full h-36 resize-none text-black p-4 placeholder:text-black' placeholder='Enter Your Message'></textarea>
             <button className='bg-green-600 text-white py-2 px-8 rounded-md'>Submit</button>
          </div>
    </div>
  )
}

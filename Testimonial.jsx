import React from 'react'
import { testimonials } from '../constants'
import { Footer } from './Footer'

export const Testimonial = () => {
  return (
    <div className='tracking-wide'>
         <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20'>Our Instractors</h2>
         <div className="flex flex-wrap justify-center">
              {testimonials.map((testimonial, index) =>(
                <div key={index} className='w-full sm:w-1/3 lg:w-1/3  px-4 py-2'>
                     <div className="bg-neutral rounded-md p-2 text-md border border-neutral-500 font-thin">
                        <img src={testimonial.image} className='flex mx-auto items-center rounded-full w-60' alt="" />
                        <p><span className='text-xl font-bold'>Name:</span> {testimonial.user}</p>
                        <p><span className='text-xl font-bold'>Instructor:</span> {testimonial.instructor}</p>
                        <p><span className='text-xl font-bold'>Phone:</span> {testimonial.contact}</p>
                     </div>
                </div>
              ))}
         </div>
     
    </div>
  )
}

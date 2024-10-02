import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import atsa from "../assets/atsa.jpg"
import { checklistItems } from '../constants'
import { Testimonial } from './Testimonial'
export const About = () => {
  return (
    <div className='max-w-7xl mx-auto pt-18 px-6'>
       <div className="mt-20 ">
             <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-6 mb-2 tracking-wide text-center'>
                Anywaa Tertiary Student <br/> Association <span className='bg-gradient-to-r from-red-600 to-yellow-400 text-transparent bg-clip-text'>(ATSA)</span>
             </h2>
             <h4 className='text-center text-2xl bg-gradient-to-r from-red-600 to-yellow-400 text-transparent bg-clip-text'>We are ATSA we are smart brains.</h4>
             <div className="flex flex-wrap justify-center">
                <div className="p-2 w-full lg:w-1/2">
                    <img className='rounded-md mt-8' src={atsa} alt="" />
                </div>
                <div className="p-12 w-full lg:w-1/2">
                   {checklistItems.map((item, index) =>(
                    <div key={index} className='flex mb-6'>
                        <div className="text-green-400 mx-6 h-10 w-10 bg-neutral-900 p-2 justify-center items-center  rounded-full">
                            <CheckCircle2/>
                        </div>
                        <div>
                            <h5 className='mt-1 mb-1 text-xl'>{item.title}</h5>
                            <p className='text-md text-neutral-500'>{item.description}</p>
                        </div>
                    </div>
                   ))}
                </div>
             </div>
             <Testimonial/>
       </div>
    </div>
  )
}

import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import react from "../assets/react.avif"
import javascript from "../assets/javascript.avif"
import html from "../assets/html.avif"
import css from "../assets/css.avif"
import graphic from "../assets/graphic.avif"
import tailwind from "../assets/tailwind.avif"
import photoshop from "../assets/photoshop.avif"
import nextjs from "../assets/nextjs.avif"
import { Link } from 'react-router-dom'
import { Footer } from './Footer'


export const Itcours = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
          <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
             Welcomt to ATSA  we are<br/>
             <span className='bg-gradient-to-r from-red-600 to-yellow-300 text-transparent bg-clip-text'>
                Smart Brains
             </span>
            </h1>
            <p className='mt-10 text-lg text-center max-w-4xl'>
                Empower yourself with our IT courses.
                Get started today and turn your imagination into imersive reality
            </p>
            <div className="flex justify-center my-10">
                <Link className='bg-gradient-to-r from-red-600 to-yellow-300 to-green-500 py-3 px-4 mx-3 rounded-md'>
                    Start for free
                </Link>
                <Link className='border py-3 px-4 mx-3 rounded-md'>
                    Documentation
                </Link>
            </div>
            <div className="flex mt-10 justify-center">
               <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-500 shadow-orange-400 mx-2 my-4 '>
                  <source src={video1} type='video/mp4'/>
                  your vodeo is not supported
               </video>
               <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-500 shadow-orange-400 mx-2 my-4 '>
                  <source src={video2} type='video/mp4'/>
                  your vodeo is not supported
               </video>
            </div>
            {/* //all the courses go here */}
              <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-red-700  text-neutral-800 rounded shadow-lg overflow-hidden">
                   <img className='w-full h-29 object-cover' src={html} alt="" />
                   <div className='px-4 pt-2 pb-4'>
                        <h2 className='text font-semibold'>HTML</h2>
                        <div className="text-sm">Price: ksh 2000</div>
                        <div className="flex mt-2 gap-4">
                         <Link className='inline-block w-full shadow-md text-center text-sm bg-green-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer'>Buy</Link>
                         <Link className='inline-block w-full shadow-md text-center text-sm border border-neutral-800 text-neutral-900 rounded-sm px-4 py-2 font-bold hover:cursor-pointer text-nowrap'>Course details</Link>
                       </div>
                   </div>
                   
              </div>
              <div className="bg-white border border-red-700  text-neutral-800 rounded shadow-lg overflow-hidden">
                   <img className='w-full h-29 object-cover' src={css} alt="" />
                   <div className='px-4 pt-2 pb-4'>
                        <h2 className='text font-semibold'>CSS</h2>
                        <div className="text-sm">Price: ksh 2000</div>
                        <div className="flex mt-2 gap-4">
                         <Link className='inline-block w-full shadow-md text-center text-sm bg-green-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer'>Buy</Link>
                         <Link className='inline-block w-full shadow-md text-center text-sm border border-neutral-800 text-neutral-900 rounded-sm px-4 py-2 font-bold hover:cursor-pointer text-nowrap'>Course details</Link>
                        </div>
                   </div>
              </div>
              <div className="bg-white border border-red-700  text-neutral-800 rounded shadow-lg overflow-hidden">
                   <img className='w-full h-29 object-cover' src={javascript} alt="" />
                   <div className='px-4 pt-2 pb-4'>
                        <h2 className='text font-semibold'>Javascript</h2>
                        <div className="text-sm">Price: ksh 2000</div>
                        <div className="flex mt-2 gap-4">
                         <Link className='inline-block w-full shadow-md text-center text-sm bg-green-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer'>Buy</Link>
                         <Link className='inline-block w-full shadow-md text-center text-sm border border-neutral-800 text-neutral-900 rounded-sm px-4 py-2 font-bold hover:cursor-pointer text-nowrap'>Course details</Link>
                         </div>
                   </div>
              </div>
              <div className="bg-white border border-red-700 text-neutral-800 rounded shadow-lg overflow-hidden">
                   <img className='w-full h-29 object-cover' src={react} alt="" />
                   <div className='px-4 pt-2 pb-4'>
                        <h2 className='text font-semibold'>React js</h2>
                        <div className="text-sm">Price: ksh 2000</div>
                        <div className="flex mt-2 gap-4">
                         <Link className='inline-block w-full shadow-md text-center text-sm bg-green-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer'>Buy</Link>
                         <Link className='inline-block w-full shadow-md text-center text-sm border border-neutral-800 text-neutral-900 rounded-sm px-4 py-2 font-bold hover:cursor-pointer text-nowrap'>Course details</Link>
                         </div>
                   </div>
              </div>
              <div className="bg-white border border-red-700 text-neutral-800 rounded shadow-lg overflow-hidden">
                   <img className='w-full h-29 object-cover' src={nextjs} alt="" />
                   <div className='px-4 pt-2 pb-4'>
                        <h2 className='text font-semibold'>Next Js</h2>
                        <div className="text-sm">Price: ksh 2000</div>
                        <div className="flex mt-2 gap-4">
                         <Link className='inline-block w-full shadow-md text-center text-sm bg-green-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer'>Buy</Link>
                         <Link className='inline-block w-full shadow-md text-center text-sm border border-neutral-800 text-neutral-900 rounded-sm px-4 py-2 font-bold hover:cursor-pointer text-nowrap'>Course details</Link>
                         </div>
                   </div>
              </div>
              <div className="bg-white border border-red-700 text-neutral-800 rounded shadow-lg overflow-hidden">
                   <img className='w-full h-29 object-cover' src={tailwind} alt="" />
                   <div className='px-4 pt-2 pb-4'>
                        <h2 className='text font-semibold'>Tailwind CSS</h2>
                        <div className="text-sm">Price: ksh 2000</div>
                        <div className="flex mt-2 gap-4">
                         <Link className='inline-block w-full shadow-md text-center text-sm bg-green-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer'>Buy</Link>
                         <Link className='inline-block w-full shadow-md text-center text-sm border border-neutral-800 text-neutral-900 rounded-sm px-4 py-2 font-bold hover:cursor-pointer text-nowrap'>Course details</Link>
                         </div>
                   </div>
              </div>
              <div className="bg-white border border-red-700 text-neutral-800 rounded shadow-lg overflow-hidden">
                   <img className='w-full h-29 object-cover' src={graphic} alt="" />
                   <div className='px-4 pt-2 pb-4'>
                        <h2 className='text font-semibold'>Graphic Design</h2>
                        <div className="text-sm">Price: ksh 2000</div>
                        <div className="flex mt-2 gap-4">
                         <Link className='inline-block w-full shadow-md text-center text-sm bg-green-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer'>Buy</Link>
                         <Link className='inline-block w-full shadow-md text-center text-sm border border-neutral-800 text-neutral-900 rounded-sm px-4 py-2 font-bold hover:cursor-pointer text-nowrap'>Course details</Link>
                         </div>
                   </div>
              </div>
              <div className="bg-white border border-red-700 text-neutral-800 rounded shadow-lg overflow-hidden">
                   <img className='w-full h-29 object-cover' src={photoshop} alt="" />
                   <div className='px-4 pt-2 pb-4'>
                        <h2 className='text font-semibold'>Photoshop</h2>
                        <div className="text-sm">Price: ksh 2000</div>
                        <div className="flex mt-2 gap-4">
                         <Link className='inline-block w-full shadow-md text-center text-sm bg-green-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer'>Buy</Link>
                         <Link className='inline-block w-full shadow-md text-center text-sm border border-neutral-800 text-neutral-900 rounded-sm px-4 py-2 font-bold hover:cursor-pointer text-nowrap'>Course details</Link>
                         </div>
                   </div>
              </div>
              </div>
          </div>
       
    </div>
  )
}

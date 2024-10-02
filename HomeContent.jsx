import React from 'react'
import atsa from "../assets/atsa.jpg"
import { Link } from 'react-router-dom'

export const HomeContent = () => {
  return (
    <div className='lg:pt-90 sm:pt-20'>
        <div className='flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20'>
            {/* left side content */}
            <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-20 m-auto md:py-[10w] md:mb -[-30px] ">
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leadind-tight'>Learn From highly<br/> experience students</p>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Numquam sapiente expedita neque alias animi reiciendis.</p>
                <Link to={""} className='bg-gradient-to-r from-red-600 to-yellow-300 w-1/3 text-center rounded-lg p-2 font-bold hover:scale-105 transition-all duration-500'>Book</Link>
            </div>
            {/* right side content */}
            <div className="md:w-1/2 relative  ">
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg ' src={atsa} alt="" />
            </div>
        </div>
        <div className="">
            <h1 className='text-5xl text-center py-6'>Welcome to ATSA</h1>
            <p className='text-center text-2xl py-4'>we teach</p>
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
            <p className=' border p-3 rounded-md'>Mathematics</p>
            <p className=' border p-3 rounded-md'>Physics</p>
            <p className=' border p-3 rounded-md'>Biology</p>
            <p className=' border p-3 rounded-md'>Chemistry</p>
            <p className=' border p-3 rounded-md'>Computer courses</p>
        </div>
    </div>
  )
}

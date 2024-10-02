import React from 'react'
import { Footer } from './Footer'
import codeImg from "../assets/good2.avif"
import graduation from "../assets/good.avif"
import { Link } from 'react-router-dom'

export const Courses = () => {
  return (
    <div className='max-w-2xl mx-auto pt-19'>
        <h1 className='pt-4 mx-2 pb-0 mb-6 bg-gradient-to-r from-red-600 to-yellow-500 to-green-600 text-transparent bg-clip-text text-4xl'>ATSA EDUCATION</h1>
        <h1 className='text-xl pb-6 mx-2'>Our experience Instructors will guide and uplift you by creating the foundation for better future</h1>
          <div className="flex mx-4">
            <div className="p-2 rounded-xl rounded-tr-none rounded-bl-none flex flex-col border flex-wrap  justify-center items-center m-2">
                <h3 className='text-3xl py-4'>High school Educaiton</h3>
                <img src={graduation} className='rounded-lg lg:w-full  sm:w-1/3'alt="" />
                <Link to={"/highschool"} className='bg-green-500 w-1/3 m-2 text-center text-xl font-bold rounded-md'>Learn</Link>
            </div>
            <div className="p-2 rounded-xl rounded-tr-none rounded-bl-none flex flex-col border justify-center items-center m-2">
            <h3 className='text-3xl py-3'>Computer Courses</h3>
            <img src={codeImg} className='rounded-lg lg:w-full sm:w-1/3' alt="" />
            <Link to={"/itcourse"} className='bg-green-500 w-1/2 m-2 text-center text-xl font-bold rounded-md'>Learn</Link>
            </div>
          </div>
        
    </div>
  )
}

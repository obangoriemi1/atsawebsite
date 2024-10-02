import React from 'react'
import { Link } from 'react-router-dom'

export const Grades = () => {
  return (
    <div>
        <div className="flex flex-col items-center gap-4 mt-36 max-w-7xl mx-6">
            <h1 className='lg:text-5xl sm:text-6xl bg-gradient-to-r from-red-500 to bg-yellow-300 text-transparent bg-clip-text'>Learn Mathematics For a Better Grade</h1>
           <Link className="border sm:w-1/3 p-4 text-center">Mathematics Grade: 9</Link>
           <Link className="border sm:w-1/3 p-4 text-center">Mathematics Grade: 10</Link>
           <Link className="border sm:w-1/3 p-4 text-center">Mathematics Grade: 11</Link>
           <Link className="border sm:w-1/3 p-4 text-center">Mathematics Grade: 12</Link>
        </div>
    </div>
  )
}

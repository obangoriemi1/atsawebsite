import React from 'react'
import { Link } from 'react-router-dom'

const PhysicGrades = () => {
  return (
    <div>
        <div className="flex flex-col items-center gap-4 mt-36 max-w-7xl mx-6">
            <h1 className='lg:text-5xl sm:text-6xl bg-gradient-to-r from-red-500 to bg-yellow-300 text-transparent bg-clip-text'>Learn Physics For a Better Grade</h1>
           <Link className="border sm:w-1/3 p-4  flex justify-between gap-2">Pysices Grade: 9 <button className='bg-green-600 text-white px-4 py-1 rounded-md font-bold'>Buy</button></Link>
           <Link className="border sm:w-1/3 p-4  flex justify-between gap-2">Pysices Grade: 10 <button className='bg-green-600 text-white px-4 py-1 rounded-md font-bold'>Buy</button></Link>
           <Link className="border sm:w-1/3 p-4  flex justify-between gap-2">Pysices Grade: 11 <button className='bg-green-600 text-white px-4 py-1 rounded-md font-bold'>Buy</button></Link>
           <Link className="border sm:w-1/3 p-4  flex justify-between gap-2">Pysices Grade: 12 <button className='bg-green-600 text-white px-4 py-1 rounded-md font-bold'>Buy</button></Link>
        </div>
    </div>
  )
}

export default PhysicGrades
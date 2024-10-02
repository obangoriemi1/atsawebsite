import React from 'react'
import maths from "../assets/maths.avif"
import chem from "../assets/chem.avif"
import physics from "../assets/physics.avif"
import biology from "../assets/biology.avif"
import { Link } from 'react-router-dom'


export const HighSchool = () => {
  return (
    <div className='max-w-3xl mx-auto pt-18'>
        <h1 className='text-3xl sm:text-5xl lg:text-6xl text-center p-4'>
            Welcome, learn Today.
        </h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
           <div className="border p-2 mx-2 g-2">
              <img src={maths} className='' alt="" />
              <div className='flex justify-between p-2 '>
                 <Link className='border w-full text-center p-2  rounded-md hover:cursor-pointer'>Maths</Link>
                 <Link to={"/mathsgrades"} className='bg-neutral-700 p-2 w-full rounded-md mx-2 text-center hover:cursor-pointer'>Start Learing</Link>
              </div>
           </div>
           <div className="border p-2 mx-2">
              <img src={chem} className='' alt="" />
              <div className='flex justify-between p-2 '>
                 <Link className='border w-full text-center p-2  rounded-md hover:cursor-pointer'>Chemistry</Link>
                 <Link to={"/cheistrygrades"} className='bg-neutral-700 p-2 w-full rounded-md mx-2 text-center hover:cursor-pointer'>Start Learing</Link>
              </div>
           </div>
           <div className="border  p-2 mx-2">

              <img src={physics} className='' alt="" />
              <div className='flex justify-between p-2 '>
                 <Link className='border w-full text-center p-2  rounded-md hover:cursor-pointer'>Physics</Link>
                 <Link to={"/physicsgrades"} className='bg-neutral-700 p-2 w-full rounded-md mx-2 text-center hover:cursor-pointer'>Start Learing</Link>
              </div>
           </div>
           <div className="border p-2 mx-2">
              <img src={biology} className='' alt="" />
              <div className='flex justify-between p-2 '>
                 <Link className='border w-full text-center p-2  rounded-md hover:cursor-pointer'>Biology</Link>
                 <Link to={"/biologygrades"} className='bg-neutral-700 p-2 w-full rounded-md mx-2 text-center hover:cursor-pointer'>Start Learing</Link>
              </div>
           </div>
        </div>
       <div className="">
     
       </div>
    </div>
  )
}

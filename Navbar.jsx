import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleNavbar = () =>{
    setMobileOpen(!mobileOpen)
  }
  return (
    <nav className='sticky top-0 z-50 py-3 border-b border-red-600 bg-white text-black '>
       <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <h1 className='text-4xl tracking-wide'>ATSA</h1>
            <ul className='hidden lg:flex space-x-10'>
               <li><Link to={"/"}>Home</Link></li> 
               <li><Link to={"/courses"}>Courses</Link></li> 
               <li><Link to={"/about"}>About Us</Link></li> 
               <li><Link to={"/contact"}>Contact Us</Link></li> 
               {/* <li><Link to={"/itcourse"}>IT courses</Link></li>  */}
            </ul>
            <div className='hidden lg:flex justify-center items-center space-x-10'>
                <Link className='py-2 px-3 border rounded-md ' href="#">Sign in</Link>
                <Link className='py-2 px-3 bg-gradient-to-r from-red-500 to-yellow-400 to-green-500  text-white rounded-md' href="#">Create an account</Link>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                  {mobileOpen ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
              </button>
            </div>
          </div>
          {mobileOpen && (
            <div className="fixed right-0 flex flex-col z-20 bg-neutral-600 text-white w-full p-6 justify-center items-center lg:hidden">
               <ul>
               <li className='py-2'><Link to={"/"}>Home</Link></li> 
               <li className='py-2'><Link to={"/courses"}>Courses</Link></li> 
               <li className='py-2'><Link to={"/about"}>About Us</Link></li> 
               <li className='py-2'><Link to={"/contact"}>Contact Us</Link></li> 
            </ul>
            <div className="flex space-x-6">
            <Link className='py-2 px-3 border rounded-md ' href="#">Sign in</Link>
               <Link className='py-2 px-3 bg-green-600 text-white rounded-md' href="#">Create an account</Link>
            </div>
            </div>
          )}
       </div>
    </nav>
  )
}

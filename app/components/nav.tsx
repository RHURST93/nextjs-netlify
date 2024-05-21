import React from 'react'
import Link from 'next/link';
import code from '../../img/code.png';
import Image from 'next/image';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineQuestionMark } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { IoBookOutline } from "react-icons/io5";


 /** convert anchor elements to Link elements */
const Nav = () => {
  return (
    <>
    

<div className="navbar  bg-base-300 fixed w-full">
  <a href='/'>
  <Image className='ml-5' src={code} alt='logo' />
  </a>
  

  <div className="flex  space-x-4 mr-5 text-blue-800 ">
          <a href="#" className="items-center flex hover:text-gray-400 transition-colors duration-300 no-underline"><IoHomeOutline/>
 Home</a>
          <a href="#about" className="items-center flex hover:text-gray-400 transition-colors duration-300 no-underline"><MdOutlineQuestionMark />
About</a>
          <a href="#projects" className="items-center flex hover:text-gray-400 transition-colors duration-300 no-underline">
            
          <IoBookOutline />
Projects</a>
          {/* Add more links as needed */}
        </div>
</div>

</>
  )
}

export default Nav
import React from 'react'
import Link from 'next/link';
import code from '../../img/code.png';
import Image from 'next/image';


 /** convert anchor elements to Link elements */
const Nav = () => {
  return (
    <>
    

<div className="navbar bg-base-300 fixed w-full">
  <Link href='/'>
  <Image className='ml-5' src={code} alt='logo' />
  </Link>
  <div className="flex space-x-4 mr-5">
          <Link href="/" className="hover:text-gray-400 transition-colors duration-300 no-underline">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400 transition-colors duration-300 no-underline">
            About
          </Link>
          <Link href="/projects" className="hover:text-gray-400 transition-colors duration-300 no-underline">
            Projects
          </Link>
          {/* Add more links as needed */}
        </div>
</div>

</>
  )
}

export default Nav